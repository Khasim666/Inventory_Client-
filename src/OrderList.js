// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllOrders, deleteOrder } from './orderService';
// import './App.css';

// function OrderList() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     const response = await getAllOrders();
//     setOrders(response.data);
//   };

//   const handleDelete = async (id) => {
//     await deleteOrder(id);
//     fetchOrders();
//   };

//   return (
//     <div>
//       <h2>Order List</h2>
//       <Link to="/orders/add">Add New Order</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Customer Name</th>
//             <th>Order Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.customerName}</td>
//               <td>{new Date(order.orderDate).toLocaleString()}</td>
//               <td>{order.status}</td>
//               <td>
//                 <Link to={`/orders/edit/${order.id}`}>Edit</Link>
//                 <button onClick={() => handleDelete(order.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default OrderList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllOrders, deleteOrder } from './orderService';
import './OrderList.css';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await getAllOrders();
    setOrders(response.data);
  };

  const handleDelete = async (id) => {
    await deleteOrder(id);
    fetchOrders();
  };

  return (
    <div className="order-list-container">
      <h2 className="order-list-title">Order List</h2>
      <Link to="/orders/add" className="order-list-add-link">Add New Order</Link>
      <table className="order-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{new Date(order.orderDate).toLocaleString()}</td>
              <td>{order.status}</td>
              <td>
                <Link to={`/orders/edit/${order.id}`} className="order-list-edit-link">Edit</Link>
                <button onClick={() => handleDelete(order.id)} className="order-list-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
