import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function ProductDel() {
  let navigate = useNavigate();
    const {id} = useParams

    

  const [user, setUser] = useState({
    
    productid: "",
    
  });

  const { productid } = user;
  const onInputCHange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

    const onSubmit = async (e)=> {
      e.preventDefault();
      await axios.delete(`http://localhost:8080/api/product/delete/${id}`)
      navigate("/");
     
    }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
    <div className="create">
      <label htmlFor="Productid" className="form-label">
        Product ID:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Product Id"
        name="productid"
        value={productid}
        onChange={(e) => onInputCHange(e)}
      />
      <button type="submit" className="create button" >
        Delete
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" id="buttoncancel">
        Cancel
      </button>
    </div>
    </form>
  );
}
