import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function InventoryEdit() {
  let navigate = useNavigate();

  const {id} = useParams

  const [user, setUser] = useState({
    
    inventoryuniquecode: "",
    inventoryquantity: "",
    
  });

  const { inventoryuniquecode, inventoryquantity } = user;
  const onInputCHange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/inventory/products/${id}`, user);
    navigate("/");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
    <div className="create">
      <label htmlFor="InventoryUniqueCode" className="form-label">
        Inventory Unique Code:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Inventory Unique Code"
        name="inventoryuniquecode"
        value={inventoryuniquecode}
        onChange={(e) => onInputCHange(e)}
      />
      <label htmlFor="inventoryqty" className="form-label">
        Inventory Quantity:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="inventory quantity"
        name="inventoryquantity"
        value={inventoryquantity}
        onChange={(e) => onInputCHange(e)}
      />
      <button type="submit" className="create button">
        Submit
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" id="buttoncancel">
        Cancel
      </button>
    </div>
    </form>
  );
}
