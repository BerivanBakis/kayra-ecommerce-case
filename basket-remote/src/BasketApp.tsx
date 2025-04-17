import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, Product } from "host_app/store";


const BasketApp = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (basket.length === 0) {
      setMessage("Sepet boş.");
    } else {
      setMessage(`Sepetinizde ${basket.length} ürün var.`);
    }
  }, [basket]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sepet</h2>
      <p>{message}</p>
      {basket.length === 0 ? (
        <p>Sepet boş.</p>
      ) : (
        <ul>
          {basket.map((item: Product, index: number) => (
            <li key={index}>
              {item.name} - {item.price}₺
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasketApp;
