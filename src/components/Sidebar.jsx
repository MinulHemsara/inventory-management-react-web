import React, { useState } from "react";
import {
  //   FaTh,
  FaBars,
  //   FaUserAlt,
  //   FaRegChartBar,
  //   FaCommentAlt,
  //   FaShoppingBag,
  //   FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //   path: "/orderadd",
    //   name: "Order Add",
    // },
    // {
    //   path: "/orderedit",
    //   name: "Order Edit",
    // },
    // {
    //   path: "/orderdel",
    //   name: "Order Delete",
    // },
    // {
    //   path: "/orderview",
    //   name: "Order View",
    // },
    {
      path: "/productadd",
      name: "Product Add",
    },
    {
      path: "/productedit",
      name: "Product Edit",
    },
    {
      path: "/productdel",
      name: "Product Delete",
    },
    {
      path: "/productview",
      name: "Product View",
    },
    {
      path: "/inventoryadd",
      name: "inventory add",
    },
    {
      path: "/inventoryedit",
      name: "Inventory Edit",
    },
    {
      path: "/inventorydel",
      name: "Inventory Delete",
    },
    {
      path: "/inventoryview",
      name: "Inventory View",
    },
  ];
  return (
    <div className="container">
      {/* <div
        style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
      > */}
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
