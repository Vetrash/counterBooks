import express from "express";
import counter from "./src/routes/counter.js"


const app = express();
app.use(express.json());


app.use("/api/counter", counter);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`приложение запущено на http://localhost:${PORT}`);
});
