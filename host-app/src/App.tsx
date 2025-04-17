import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./shared/store";

const ProductsApp = React.lazy(() => import("products_remote/ProductsApp"));
const BasketApp = React.lazy(() => import("basket_remote/BasketApp"));

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", justifyContent: "space-around", padding: 40 }}>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <ProductsApp />
          <BasketApp />
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
