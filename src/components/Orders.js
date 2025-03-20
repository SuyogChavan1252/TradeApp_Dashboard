import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [error, setError] = useState(null); // ✅ Error state for debugging

  // Fetch orders on component mount
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BASE_URL}/allOrders", { withCredentials: true })
  //     .then((res) => {
  //       console.log("Orders fetched successfully:", res.data);
  //       setAllOrders(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching orders:", error);
  //       setError(error.response?.data?.message || "Failed to fetch orders");
  //     });
  // }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log("📌 Sending Token:", token); // ✅ Debugging token before sending
  
  //   axios
  //     .get(`${process.env.REACT_APP_BASE_URL}/allOrders", {
  //       headers: { Authorization: `Bearer ${token}` },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log("✅ Orders fetched successfully:", res.data);
  //       setAllOrders(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("❌ Error fetching orders:", error);
  //       setError(error.response?.data?.message || "Failed to fetch orders");
  //     });
  // }, []);
  // const fetchOrders = async () => {
  //   const token = localStorage.getItem("token"); // Get stored token
  
  //   if (!token) {
  //     console.error("No token found!");
  //     return;
  //   }
  
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_BASE_URL}/allOrders", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`, // ✅ Send token
  //       },
  //     });
  //     console.log(response)
  //     const data = await response.json();
  
  //     if (!response.ok) {
  //       console.error("Error fetching orders:", data.message);
  //       return;
  //     }
  
  //     console.log("Orders Data:", data);
  //     setAllOrders(response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  
  // // Call fetchOrders when the component loads
  // useEffect(() => {
  //   fetchOrders();
  // }, []);
  
   //first time render
   useEffect(() => {
 
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/allOrders`, {
          withCredentials: true,
        });
        console.log(response.data);
        setAllOrders(response.data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchOrders();
  }, []);
  

  return (
    <div className="orders">
      <div className="no-orders">
        <h3 className="title">Orders ({allOrders.length})</h3>

        {error && <p style={{ color: "red" }}>Error: {error}</p>} {/* ✅ Show error message */}

        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
