import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import OrderAdd from "./pages/OrderAdd.js";
import OrderEdit from "./pages/OrderEdit.js";
import OrderView from "./pages/OrderView.js";
// import Comment from "./pages/ProductView.js";
import ProductAdd from "./pages/ProductAdd.js";
import ProductView from "./pages/ProductView.js";
import InventoryAdd from "./pages/InventoryAdd.js";
import InventoryEdit from "./pages/InventoryEdit";
import InventoryView from "./pages/InventoryView";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductEdit from "./pages/ProductEdit.js";
import OrderDel from "./pages/OrderDel";
import ProductDel from "./pages/ProductDel";
import InventoryDel from "./pages/InventoryDel";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/orderadd" element={<OrderAdd />} />
          <Route path="/orderedit" element={<OrderEdit />} />
          <Route path="/orderview" element={<OrderView />} />
          <Route path="/orderdel" element={<OrderDel />} />
          <Route path="/productadd" element={<ProductAdd />} />
          <Route path="/productedit" element={<ProductEdit />} />
          <Route path="/productdel" element={<ProductDel />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/inventoryadd" element={<InventoryAdd />} />
          <Route path="/inventoryedit" element={<InventoryEdit />} />
          <Route path="/inventorydel" element={<InventoryDel />} />
          <Route path="/inventoryview" element={<InventoryView />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
