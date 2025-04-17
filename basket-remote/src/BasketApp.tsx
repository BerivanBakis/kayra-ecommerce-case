import React, { useEffect, useState } from "react";
import { basket } from "../../shared/basketState";

const BasketApp = () => {
  const [items, setItems] = useState([...basket]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems([...basket]); // basket dizisini her 0.5 saniyede bir kontrol edip yeniliyorum
    }, 500);
    return () => clearInterval(interval); // bileşen kapandığında temizleyecek
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sepet</h2>
      {items.length === 0 ? (
        <p>Sepet şu an boş</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} ₺
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasketApp;
