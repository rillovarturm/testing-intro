const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const category = "Наушники";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const category = "Чистый код";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const category = "Настольная лампа";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const category = "javascript";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([3]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const category = "ЧЕХОЛ";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const category = "наушники";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "    ";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "\t\n";
    expect(searchProducts(products, category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
