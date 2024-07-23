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
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const data = loadData();
  if (!data) return

  if (!data[id]) {
      data[id] = 1;
  } else {
    data[id]++
  }

  saveData(data); // Сохраняем изменения в файл после каждого запроса
  res.json(data);
});



