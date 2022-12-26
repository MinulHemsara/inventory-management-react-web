import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function OrderEdit() {

  let navigate = useNavigate();

  const {id} = useParams

  const [user, setUser] = useState({
    
    
    OrderUniqueCode: "",
    orderprice: "",
    orderquantity:""
  });

  const { OrderUniqueCode, orderprice, orderquantity } = user;
  const onInputCHange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/${id}`, user);
    navigate("/");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
    <div className="create">
      
      <label htmlFor="OrderUniqueCode" className="form-label">
        Unique Code:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Unique Code"
        name="OrderUniqueCode"
        value={OrderUniqueCode}
        onChange={(e) => onInputCHange(e)}
      />
      <label htmlFor="OrderPrice" className="form-label">
        Order Price:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Order Price"
        name="orderprice"
        value={orderprice}
        onChange={(e) => onInputCHange(e)}
      />
      <label htmlFor="OrderQuantity" className="form-label">
        Order Quantity:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Quantity"
        name="orderquantity"
        value={orderquantity}
        onChange={(e) => onInputCHange(e)}
      />
      <button type="submit" className="create button" to={`/OrderEdit/${user.id}`}>
        Submit
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" id="buttoncancel" >
        Cancel
      </button>
    </div>
    </form>
  );
}
