import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function InventoryDel() {
  let navigate = useNavigate();
  const {id} = useParams

  

const [user, setUser] = useState({
  
  inventoryid: "",
  
});

const { inventoryid } = user;
const onInputCHange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

  return (
    <div className="create">
      <label htmlFor="inventoryid" className="form-label">
        Inventory Id:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Inventory Id"
        name="inventoryid"
        value={inventoryid}
        onChange={(e) => onInputCHange(e)}
      />
      <button type="submit" className="create button">
        Delete
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" id="buttoncancel">
        Cancel
      </button>
    </div>
  );
}
