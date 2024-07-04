import React, { useState, useEffect } from 'react';
import { getStockReport, getOrderReport, getSupplierReport } from './reportService';
import './ReportView.css';

function ReportView() {
  const [stockReport, setStockReport] = useState([]);
  const [orderReport, setOrderReport] = useState([]);
  const [supplierReport, setSupplierReport] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const stockResponse = await getStockReport();
    setStockReport(stockResponse.data);

    const orderResponse = await getOrderReport();
    setOrderReport(orderResponse.data);

    const supplierResponse = await getSupplierReport();
    setSupplierReport(supplierResponse.data);
  };

  return (
    <div className="report-view-container">
    <h2 className="report-view-title">Reports</h2>
    
    <h3 className="report-view-subtitle">Stock Report</h3>
    <table className="report-view-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {stockReport.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.id}</td>
            <td>{stock.itemName}</td>
            <td>{stock.quantity}</td>
            <td>${stock.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3 className="report-view-subtitle">Order Report</h3>
    <table className="report-view-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Order Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orderReport.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>{new Date(order.orderDate).toLocaleString()}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3 className="report-view-subtitle">Supplier Report</h3>
    <table className="report-view-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact Info</th>
        </tr>
      </thead>
      <tbody>
        {supplierReport.map((supplier) => (
          <tr key={supplier.id}>
            <td>{supplier.id}</td>
            <td>{supplier.name}</td>
            <td>{supplier.contactInfo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default ReportView;