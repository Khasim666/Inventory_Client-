import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StockList from './StockList';
import StockForm from "./StockForm";
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import SupplierList from './SupplierList';
import SupplierForm from './SupplierForm';
import ReportView from './ReportView';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/stocks">Stocks</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/suppliers">Suppliers</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/stocks" element={<StockList />} />
          <Route path="/stocks/add" element={<StockForm />} />
          <Route path="/stocks/edit/:id" element={<StockForm />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/add" element={<OrderForm />} />
          <Route path="/orders/edit/:id" element={<OrderForm />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/suppliers/add" element={<SupplierForm />} />
          <Route path="/suppliers/edit/:id" element={<SupplierForm />} />
          <Route path="/reports" element={<ReportView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
