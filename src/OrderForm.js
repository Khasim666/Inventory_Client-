// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getOrder, createOrder, updateOrder } from './orderService';
// import './App.css';

// function OrderForm() {
//   const [order, setOrder] = useState({ customerName: '', orderDate: '', status: '' });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchOrder = useCallback(async () => {
//     if (id) {
//       try {
//         const response = await getOrder(id);
//         setOrder(response.data);
//       } catch (error) {
//         console.error('Error fetching order:', error);
//       }
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchOrder();
//   }, [fetchOrder]);

//   const handleChange = (e) => {
//     setOrder({ ...order, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         await updateOrder(id, order);
//       } else {
//         await createOrder(order);
//       }
//       navigate('/orders');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>{id ? 'Edit Order' : 'Add Order'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Customer Name:</label>
//           <input
//             type="text"
//             name="customerName"
//             value={order.customerName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Order Date:</label>
//           <input
//             type="datetime-local"
//             name="orderDate"
//             value={order.orderDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Status:</label>
//           <select name="status" value={order.status} onChange={handleChange} required>
//             <option value="">Select Status</option>
//             <option value="PENDING">Pending</option>
//             <option value="PROCESSING">Processing</option>
//             <option value="SHIPPED">Shipped</option>
//             <option value="DELIVERED">Delivered</option>
//           </select>
//         </div>
//         <button type="submit">{id ? 'Update' : 'Create'}</button>
//       </form>
//     </div>
//   );
// }

// export default OrderForm;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrder, createOrder, updateOrder } from './orderService';
import './OrderForm.css';

function OrderForm() {
  const [order, setOrder] = useState({ customerName: '', orderDate: '', status: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchOrder = useCallback(async () => {
    if (id) {
      try {
        const response = await getOrder(id);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateOrder(id, order);
      } else {
        await createOrder(order);
      }
      navigate('/orders');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="order-form-container">
      <h2 className="order-form-title">{id ? 'Edit Order' : 'Add Order'}</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label className="form-label">Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={order.customerName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Order Date:</label>
          <input
            type="datetime-local"
            name="orderDate"
            value={order.orderDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Status:</label>
          <select
            name="status"
            value={order.status}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Status</option>
            <option value="PENDING">Pending</option>
            <option value="PROCESSING">Processing</option>
            <option value="SHIPPED">Shipped</option>
            <option value="DELIVERED">Delivered</option>
          </select>
        </div>
        <button type="submit" className="submit-button">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default OrderForm;

