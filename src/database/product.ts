import { RowDataPacket } from "mysql2";
import { connection } from "./connection";

export interface Product extends RowDataPacket {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
}

export async function findAllProducts() : Promise<Product[]>{
    const conn = await connection;
    const [rows] = await conn.query<Product[]>("SELECT ProductID,ProductName,UnitPrice FROM Products", [])
    return rows
}

export async function createTable(){
    const conn = await connection;
    await conn.query("CREATE TABLE IF NOT EXISTS Products (ProductID INT PRIMARY KEY AUTO_INCREMENT, ProductName VARCHAR(255), UnitPrice FLOAT)", [])
}


