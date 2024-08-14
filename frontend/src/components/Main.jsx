import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './Main.css'; // Update this line

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Section
        title="What is Online Complaint Management System?"
        description="Online Complaint Management System is an online portal that helps manage online customer complaints. It provides a comprehensive platform to resolve these complaints with ease. Its features include an online complaint box where customers can drop in their complaints so that the service provider can access, analyze and respond to the customer issues."
        image="image1.jpg"
      />
      <Section
        title="What are the Uses of an Online Complaint Management System"
        description="The objective of the online complaint management system is to get away with the hassle faced in dealing with the issues that are faced in online businesses. The software is an excellent solution to resolve issues in a more managed and streamlined manner. It saves time as well as money in resolving problems efficiently. This helps build customer loyalty by efficiently handling their complaints and achieving a sustainable client database."
        image="path/to/image2.png"
        reverse
      />
      <Section
        title="Advantages of Our Online Complaint Management System"
        description="The web complaint management software allows the user to record the complaint and load it to the complaint’s database. It offers a strategic method for lodging and tracking customer concerns and issues. You can access the complaint’s history and check the status update. It has the details of how a complaint is being progressed and what actions are being taken. After a complaint is recorded by a user, an Administrator reviews it and then it is progressed."
        image="path/to/image3.png"
      />
    </div>
  );
};

export default Main;
