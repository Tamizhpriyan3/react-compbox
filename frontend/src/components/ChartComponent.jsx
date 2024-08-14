// src/components/ChartComponent.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import './ChartComponent.css';

// Registering the components needed for the charts
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartComponent = ({ totalComplaints, resolvedComplaints, pendingComplaints, monthlyResolved }) => {
  // Data for Bar chart
  const barData = {
    labels: ['Total Complaints', 'Resolved Complaints', 'Pending Complaints'],
    datasets: [
      {
        label: 'Complaints',
        data: [totalComplaints, resolvedComplaints, pendingComplaints],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  // Data for Pie chart
  const pieData = {
    labels: ['Total Complaints', 'Resolved Complaints', 'Pending Complaints'],
    datasets: [
      {
        data: [totalComplaints, resolvedComplaints, pendingComplaints],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  // Data for Line chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Complaint Resolved',
        data: monthlyResolved,
        fill: false,
        borderColor: '#2196f3',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Bar Chart */}
      <div className="chart-section">
        <h2 className="chart-title">Bar Chart - Complaints</h2>
        <div className="chart-wrapper">
          <Bar data={barData} />
        </div>
      </div>

      {/* Pie Chart */}
      <div className="chart-section">
        <h2 className="chart-title">Pie Chart - Complaints</h2>
        <div className="chart-wrapper">
          <Pie data={pieData} />
        </div>
      </div>

      {/* Line Chart */}
      <div className="chart-section">
        <h2 className="chart-title">Line Chart - Monthly Complaints Resolved</h2>
        <div className="chart-wrapper">
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
