import { Router } from "express";
import fs from 'fs';

const router = Router();
export default router;





const saveData =(data)=> {
  fs.writeFileSync('data.json', JSON.stringify(data));
}


const loadData =() => {
  try {
      const data = fs.readFileSync('data.json', 'utf8');
      return JSON.parse(data);
  } catch (error) {
      return {};
  }
}

// Обновленная функция обработки запросов
router.post('/:bookId/incr', (req, res) => {
  const { bookId } = req.params;
  const data = loadData();
  if (!data) return

  if (!data[bookId]) {
      data[bookId] = 1;
  } else {
    data[bookId]++
  }

  saveData(data); // Сохраняем изменения в файл после каждого запроса
  res.json(data);
});


router.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  const data = loadData();
  if (!data) {
    res.status(404);
    res.json("404 | ошибка загрузки JSON");
  }


  if (!data[bookId]) {
    res.status(404);
    res.json("404 | Такой книги нет");
  } 


  res.json(data[bookId]);
});

