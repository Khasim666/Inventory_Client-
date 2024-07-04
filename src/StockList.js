// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllStocks, deleteStock } from './stockService';
// import './App.css';

// function StockList() {
//   const [stocks, setStocks] = useState([]);

//   useEffect(() => {
//     fetchStocks();
//   }, []);

//   const fetchStocks = async () => {
//     const response = await getAllStocks();
//     setStocks(response.data);
//   };

//   const handleDelete = async (id) => {
//     await deleteStock(id);
//     fetchStocks();
//   };

//   return (
//     <div>
//       <h2>Stock List</h2>
//       <Link to="/stocks/add">Add New Stock</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {stocks.map((stock) => (
//             <tr key={stock.id}>
//               <td>{stock.id}</td>
//               <td>{stock.itemName}</td>
//               <td>{stock.quantity}</td>
//               <td>{stock.price}</td>
//               <td>
//                 <Link to={`/stocks/edit/${stock.id}`}>Edit</Link>
//                 <button onClick={() => handleDelete(stock.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StockList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllStocks, deleteStock } from './stockService';
import './StockList.css';

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    const response = await getAllStocks();
    setStocks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteStock(id);
    fetchStocks();
  };

  return (
    <div className="stock-list-container">
      <h2 className="stock-list-title">Stock List</h2>
      <Link to="/stocks/add" className="stock-add-link">Add New Stock</Link>
      <table className="stock-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.id}</td>
              <td>{stock.itemName}</td>
              <td>{stock.quantity}</td>
              <td>{stock.price}</td>
              <td>
                <Link to={`/stocks/edit/${stock.id}`} className="stock-edit-link">Edit</Link>
                <button onClick={() => handleDelete(stock.id)} className="stock-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
