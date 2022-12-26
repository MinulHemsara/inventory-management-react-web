import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadproducts();
  }, []);

  const loadproducts = async () => {
    const result = await axios.get("http://localhost:8086/orders");
    setUsers(result.data);
  };

  return (
    <div>
      <table class="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>{user.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
