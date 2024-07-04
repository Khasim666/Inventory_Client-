// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getStock, createStock, updateStock } from './stockService';
// import './App.css';

// function StockForm() {
//   const [stock, setStock] = useState({ itemName: '', quantity: 0, price: 0 });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchStock = useCallback(async () => {
//     if (id) {
//       try {
//         const response = await getStock(id);
//         setStock(response.data);
//       } catch (error) {
//         console.error('Error fetching stock:', error);
//       }
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchStock();
//   }, [fetchStock]);

//   const handleChange = (e) => {
//     setStock({ ...stock, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         await updateStock(id, stock);
//       } else {
//         await createStock(stock);
//       }
//       navigate('/stocks');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>{id ? 'Edit Stock' : 'Add Stock'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Item Name:</label>
//           <input
//             type="text"
//             name="itemName"
//             value={stock.itemName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input
//             type="number"
//             name="quantity"
//             value={stock.quantity}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             name="price"
//             value={stock.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">{id ? 'Update' : 'Create'}</button>
//       </form>
//     </div>
//   );
// }

// export default StockForm;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStock, createStock, updateStock } from './stockService';
import './StockForm.css';

function StockForm() {
  const [stock, setStock] = useState({ itemName: '', quantity: 0, price: 0 });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchStock = useCallback(async () => {
    if (id) {
      try {
        const response = await getStock(id);
        setStock(response.data);
      } catch (error) {
        console.error('Error fetching stock:', error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchStock();
  }, [fetchStock]);

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateStock(id, stock);
      } else {
        await createStock(stock);
      }
      navigate('/stocks');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="stock-form-container">
      <h2 className="stock-form-title">{id ? 'Edit Stock' : 'Add Stock'}</h2>
      <form onSubmit={handleSubmit} className="stock-form">
        <div className="stock-form-group">
          <label className="stock-form-label">Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={stock.itemName}
            onChange={handleChange}
            className="stock-form-input"
            required
          />
        </div>
        <div className="stock-form-group">
          <label className="stock-form-label">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={stock.quantity}
            onChange={handleChange}
            className="stock-form-input"
            required
          />
        </div>
        <div className="stock-form-group">
          <label className="stock-form-label">Price:</label>
          <input
            type="number"
            name="price"
            value={stock.price}
            onChange={handleChange}
            className="stock-form-input"
            required
          />
        </div>
        <button type="submit" className="stock-form-submit">
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default StockForm;
