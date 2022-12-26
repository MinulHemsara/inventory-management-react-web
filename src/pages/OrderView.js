import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


export default function OrderView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadorders();
  },[]);

  const loadorders = async () => {
    const result = await axios.get("http://localhost:8086/orders")
    setUsers(result.data);
  };

  return (
    <div >
       <table class="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>name</th>
            <th>amount</th>
            <th>customer_name</th>
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
              <td>{user.amount}</td>
              <td>{user.customer_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
