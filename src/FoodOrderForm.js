import React, { useState } from "react";

function FoodOrderForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [order, setOrder] = useState("");

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input id="name" value={name}></input>

            <label htmlFor="phone">Phone:</label>
            <input id="phone" value={phone}></input>

            <label htmlFor="address">Address:</label>
            <input id="address" value={address}></input>

            <label htmlFor="order">Order:</label>
            <input id="order" value={order}></input>

            <button type="submit">Submit Order</button>
        </form>
    );
}

export default FoodOrderForm;