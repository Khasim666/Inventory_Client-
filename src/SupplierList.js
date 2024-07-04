// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllSuppliers, deleteSupplier } from './supplierService';
// import './App.css';

// function SupplierList() {
//   const [suppliers, setSuppliers] = useState([]);

//   useEffect(() => {
//     fetchSuppliers();
//   }, []);

//   const fetchSuppliers = async () => {
//     const response = await getAllSuppliers();
//     setSuppliers(response.data);
//   };

//   const handleDelete = async (id) => {
//     await deleteSupplier(id);
//     fetchSuppliers();
//   };

//   return (
//     <div>
//       <h2>Supplier List</h2>
//       <Link to="/suppliers/add">Add New Supplier</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Contact Info</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {suppliers.map((supplier) => (
//             <tr key={supplier.id}>
//               <td>{supplier.id}</td>
//               <td>{supplier.name}</td>
//               <td>{supplier.contactInfo}</td>
//               <td>
//                 <Link to={`/suppliers/edit/${supplier.id}`}>Edit</Link>
//                 <button onClick={() => handleDelete(supplier.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SupplierList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllSuppliers, deleteSupplier } from './supplierService';
import './SupplierList.css';

function SupplierList() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    const response = await getAllSuppliers();
    setSuppliers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteSupplier(id);
    fetchSuppliers();
  };

  return (
    <div className="supplier-list-container">
      <h2 className="supplier-list-title">Supplier List</h2>
      <Link to="/suppliers/add" className="supplier-list-add-link">Add New Supplier</Link>
      <table className="supplier-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contactInfo}</td>
              <td>
                <Link to={`/suppliers/edit/${supplier.id}`} className="supplier-list-edit-link">Edit</Link>
                <button onClick={() => handleDelete(supplier.id)} className="supplier-list-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupplierList;
