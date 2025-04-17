import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "host_app/store";
import { Product } from "host_app/store"; // Product tipini import et

const products = [
  { id: 1, name: "Kırmızı Ceket", price: 300 },
  { id: 2, name: "Mavi Kot", price: 200 },
  { id: 3, name: "Beyaz Tişört", price: 100 },
];

const ProductsApp = () => {
  const dispatch = useDispatch();

  // 'product' parametresine tip ataması yapıyoruz
  const handleAddToBasket = (product: Product) => {
    dispatch(addToBasket(product));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ürünler</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: 10 }}>
          <p>{product.name} - {product.price}₺</p>
          <button onClick={() => handleAddToBasket(product)}>
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsApp;
