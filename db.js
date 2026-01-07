import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare(
  `CREATE TABLE IF NOT EXISTS product
  ( id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author STRING,
    year INTEGER)`
).run();
export const getAllProducts = () => {return db.prepare("SELECT * FROM product").all();}
export const getProductById = (id) => {return db.prepare("SELECT* FROM product WHERE id = ?").get(id)}
export const saveProduct = (title, author, year) => {return db.prepare("INSERT INTO product (title = ?, author = ?, year = ?) VALUES(?,?,?,?)").run(title, author, year)}
export const updateProduct = (id, title, author, year) => {return db.prepare("UPDATE product SET title = ?, author = ?, year = ? WHERE id = ?").run(id, title, year, author)}
export const deleteProduct = (id) => {return db.prepare("DELETE FROM product WHERE id = ?").run(id)}
