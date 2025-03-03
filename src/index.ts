import express, { Express, Request, Response } from "express";
import  { Message, getAllMessages } from "./models/message";
import dotenv from "dotenv";
import { createTable, findAllProducts } from "./database/product";
import { create } from "domain";
 
dotenv.config();
 
const app: Express = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')


app.get("/allproducts", async (req: Request, res: Response) => {
    const prods = await findAllProducts()
    res.json(prods);
  });


  app.get("/products", async (req: Request, res: Response) => {
    const allProducts = await findAllProducts()
    res.render('pages/index',{
      allProducts
  });
});

  


app.get("/test", (req: Request, res: Response) => {
    res.json(getAllMessages());
  });
  
 
app.get("/", (req: Request, res: Response) => {
  res.send("<html><body><h1>dsadsa</h1></body></html>");
});
 
app.listen(port, async () => {
  createTable();
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 