import express, { Express, Request, Response } from "express";
import  { Message, getAllMessages } from "./models/message";
import dotenv from "dotenv";
import { findAllProducts } from "./database/product";
 
dotenv.config();
 
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/allproducts", async (req: Request, res: Response) => {
    const prods = await findAllProducts()
    res.json(prods);
  });
  


app.get("/test", (req: Request, res: Response) => {
    res.json(getAllMessages());
  });
  
 
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
 
app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 