import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

export default function ProductEdit() {
  let navigate = useNavigate();

  const {id} = useParams

  const [user, setUser] = useState({
    
    productname: "",
    productdescription: "",
    productprice: "",
  });

  const {  productname, productdescription, productprice } = user;
  const onInputCHange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8086/orders/${id}`, user);
    navigate("/");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="create">
      
        <label htmlFor="OrderUniqueCode" className="form-label">
          Product Name:<br></br>
        </label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter Product Name"
          name="productname"
          value={productname}
          onChange={(e) => onInputCHange(e)}
        />
        <label htmlFor="OrderPrice" className="form-label">
          Description:<br></br>
        </label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter product description"
          name="productdescription"
          value={productdescription}
          onChange={(e) => onInputCHange(e)}
        />
        <label htmlFor="OrderQuantity" className="form-label">
          product Price:<br></br>
        </label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter product price"
          name="productprice"
          value={productprice}
          onChange={(e) => onInputCHange(e)}
        />
        <button type="submit" className="create button" to={`/ProductEdit/${user.id}`} >
          Update
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" id="buttoncancel">
          Cancel
        </button>
      </div>
    </form>
  );
}
