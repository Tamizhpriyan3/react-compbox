import React, { useContext } from 'react';
import './Dashboard.css';
import logo from '../assest/background.png';
import image1 from '../assest/image1.jpg';
import image2 from '../assest/image2.jpg';
import image3 from '../assest/image3.jpg';
import { Link } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import FAQ from './FAQ';
import { ComplaintsContext } from './ComplaintsContext';
import ChartComponent from './ChartComponent';


function Dashboard() {
  const { totalComplaints } = useContext(ComplaintsContext);
  const resolvedComplaints = 10;
  const pendingComplaints = totalComplaints - resolvedComplaints;
  const monthlyResolved = [50, 100, 150, 100, 250];

  return (
    <div className="MunicipalDashboard">
      <header className="municipal-header"></header>
      <nav className="municipal-navbar">
        <img className="logo" src={logo} alt="Voice Vault" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="#" className="dropbtn">Complaints</Link>
            <div className="dropdown-content">
              <Link to="/form">New Complaint</Link>
              <Link to="/escalation-period">Escalation Period</Link>
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/charts">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/admin-login">Admin Login</Link></li>
        </ul>
      </nav>
      <main className="municipal-main-content">
        <section className="municipal-stats">
        
          <div className="municipal-stat">
            <h2>{resolvedComplaints}</h2>
            <h3>Resolved Complaints</h3>
          </div>
          <div className="municipal-stat">
            <h2>{totalComplaints}</h2>
            <h3>Total Complaints</h3>
          </div>
          <div className="municipal-stat">
            <h2>{pendingComplaints}</h2>
            <h3>Pending Complaints</h3>
          </div>
        </section>
      </main>
      <div className="Main">
        <Header />
        <Section
          title="What is Online Complaint Management System?"
          description="Online Complaint Management System is an online portal that helps manage online customer complaints. It provides a comprehensive platform to resolve these complaints with ease. Its features include an online complaint box where customers can drop in their complaints so that the service provider can access, analyze and respond to the customer issues."
          image={image1}
        />
        <Section
          title="What are the Uses of an Online Complaint Management System"
          description="The objective of the online complaint management system is to get away with the hassle faced in dealing with the issues that are faced in online businesses. The software is an excellent solution to resolve issues in a more managed and streamlined manner. It saves time as well as money in resolving problems efficiently. This helps build customer loyalty by efficiently handling their complaints and achieving a sustainable client database."
          image={image2}
          reverse
        />
        <Section
          title="Advantages of Our Online Complaint Management System"
          description="The web complaint management software allows the user to record the complaint and load it to the complaint’s database. It offers a strategic method for lodging and tracking customer concerns and issues. You can access the complaint’s history and check the status update. It has the details of how a complaint is being progressed and what actions are being taken. After a complaint is recorded by a user, an Administrator reviews it and then it is progressed."
          image={image3}
        />
      </div>
      <FAQ />
      <ChartComponent 
        totalComplaints={totalComplaints} 
        resolvedComplaints={resolvedComplaints} 
        pendingComplaints={pendingComplaints} 
        monthlyResolved={monthlyResolved} 
      />
      <footer className="municipal-footer">
        <nav>
          <a href="/contact">Contact Us</a>
          <a href="/about">About Us</a>
        </nav>
        <div className="footer-logo-container">
          <img src={logo} alt="Team Sparrow" className="footer-logo" />
          <p>Copyrights © 2024 | All Rights Reserved by <span className="bold-text">team sparrow</span></p>
        </div>
        <div className="municipal-support">
          <span>Customer Support:</span>
          <a href="www.policetn.in">www.helpme.org.in</a>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
