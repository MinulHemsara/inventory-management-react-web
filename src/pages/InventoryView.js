import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InventoryView() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadinventory();
  }, []);

  const loadinventory = async () => {
    const result = await axios.get("http://localhost:8080/api/inventory/products");
    setUsers(result.data);
  };
  return (
    <div>
      <table class="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>SKUcode</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{user.id}</td>
              <td>{user.skuCode}</td>
              <td>{user.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
