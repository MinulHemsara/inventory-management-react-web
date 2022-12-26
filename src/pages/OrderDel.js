import React from "react";

export default function orderdel() {
  return (
    <div className="create">
      <label htmlFor="Orderid" className="form-label">
        Order id:<br></br>
      </label>
      <input
        type={"text"}
        className="form-control"
        placeholder="Order ID"
        name="orderid"
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
