import React from "react";
import { addToBasket } from "../../shared/basketState"; 

const products = [
  { id: 1, name: "Kırmızı Ceket", price: 300 },
  { id: 2, name: "Mavi Kot", price: 200 },
  { id: 3, name: "Beyaz Tişört", price: 100 },
];

const ProductsApp = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ürünler</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <p><strong>{product.name}</strong></p>
          <p>Fiyat: {product.price} ₺</p>
          <button onClick={() => addToBasket(product)}>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsApp;
