// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getSupplier, createSupplier, updateSupplier } from './supplierService';
// import './App.css';

// function SupplierForm() {
//   const [supplier, setSupplier] = useState({ name: '', contactInfo: '' });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchSupplier = useCallback(async () => {
//     if (id) {
//       try {
//         const response = await getSupplier(id);
//         setSupplier(response.data);
//       } catch (error) {
//         console.error('Error fetching supplier:', error);
//       }
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchSupplier();
//   }, [fetchSupplier]);

//   const handleChange = (e) => {
//     setSupplier({ ...supplier, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         await updateSupplier(id, supplier);
//       } else {
//         await createSupplier(supplier);
//       }
//       navigate('/suppliers');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>{id ? 'Edit Supplier' : 'Add Supplier'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={supplier.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Contact Info:</label>
//           <input
//             type="text"
//             name="contactInfo"
//             value={supplier.contactInfo}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">{id ? 'Update' : 'Create'}</button>
//       </form>
//     </div>
//   );
// }

// export default SupplierForm;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSupplier, createSupplier, updateSupplier } from './supplierService';
import './SupplierForm.css';

function SupplierForm() {
  const [supplier, setSupplier] = useState({ name: '', contactInfo: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchSupplier = useCallback(async () => {
    if (id) {
      try {
        const response = await getSupplier(id);
        setSupplier(response.data);
      } catch (error) {
        console.error('Error fetching supplier:', error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchSupplier();
  }, [fetchSupplier]);

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateSupplier(id, supplier);
      } else {
        await createSupplier(supplier);
      }
      navigate('/suppliers');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="supplier-form-container">
      <h2 className="supplier-form-title">{id ? 'Edit Supplier' : 'Add Supplier'}</h2>
      <form onSubmit={handleSubmit} className="supplier-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={supplier.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo" className="form-label">Contact Info:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={supplier.contactInfo}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default SupplierForm;

