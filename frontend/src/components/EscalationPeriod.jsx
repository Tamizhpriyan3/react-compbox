// src/components/EscalationPeriod.js
import React from 'react';
import './EscalationPeriod.css';

const EscalationPeriod = () => {
  // Sample data representing problems faced by students
  const problems = [
    {
      id: 1,
      title: 'Library Access Issues',
      description: 'Students are facing problems accessing the library due to limited hours of operation.',
      action: 'Extend library hours and hire more staff to manage the increased hours.',
      daysToResolve: 14
    },
    {
      id: 2,
      title: 'Internet Connectivity',
      description: 'Frequent internet outages are disrupting online classes and research activities.',
      action: 'Upgrade internet infrastructure and increase bandwidth to ensure reliable connectivity.',
      daysToResolve: 7
    },
    {
      id: 3,
      title: 'Hostel Maintenance',
      description: 'Hostel rooms are not being cleaned regularly, causing discomfort to the students.',
      action: 'Increase the frequency of cleaning and conduct regular maintenance checks.',
      daysToResolve: 3
    },
    {
      id: 4,
      title: 'Canteen Food Quality',
      description: 'The quality of food served in the canteen has deteriorated, leading to health issues.',
      action: 'Conduct regular quality checks and introduce a feedback system for students.',
      daysToResolve: 10
    },
    {
      id: 5,
      title: 'Classroom Facilities',
      description: 'Some classrooms lack proper seating arrangements and ventilation.',
      action: 'Upgrade classroom furniture and improve ventilation systems.',
      daysToResolve: 15
    },
    {
      id: 6,
      title: 'Administrative Support',
      description: 'Students are facing delays in getting administrative support for various issues.',
      action: 'Streamline administrative processes and introduce a helpdesk for quicker resolution.',
      daysToResolve: 5
    },
    {
      id: 7,
      title: 'Counseling Services',
      description: 'Insufficient counseling services are causing mental health issues among students.',
      action: 'Hire more counselors and organize regular mental health workshops.',
      daysToResolve: 20
    },
    {
      id: 8,
      title: 'Transport Facilities',
      description: 'Inadequate transport facilities are causing inconvenience for students commuting to college.',
      action: 'Increase the number of buses and optimize routes for better coverage.',
      daysToResolve: 10
    },
    {
      id: 9,
      title: 'Exam Scheduling',
      description: 'Frequent changes in exam schedules are causing confusion and stress among students.',
      action: 'Implement a fixed exam schedule and ensure timely communication of any changes.',
      daysToResolve: 7
    },
    {
      id: 10,
      title: 'Lab Equipment',
      description: 'Lab equipment is outdated or insufficient, hindering practical learning.',
      action: 'Purchase new lab equipment and conduct regular maintenance of existing equipment.',
      daysToResolve: 30
    },
    {
      id: 11,
      title: 'Sports Facilities',
      description: 'Lack of proper sports facilities is affecting the physical fitness of students.',
      action: 'Develop new sports facilities and maintain existing ones regularly.',
      daysToResolve: 25
    },
    {
      id: 12,
      title: 'Security Concerns',
      description: 'Inadequate security measures on campus are causing safety concerns.',
      action: 'Increase security personnel and install additional surveillance cameras.',
      daysToResolve: 15
    },
    {
      id: 13,
      title: 'Fee Payment Issues',
      description: 'Complicated fee payment processes are causing delays and confusion for students.',
      action: 'Simplify the fee payment process and introduce online payment options.',
      daysToResolve: 5
    },
    {
      id: 14,
      title: 'Scholarship Availability',
      description: 'Lack of information and delays in scholarship processing are affecting students financially.',
      action: 'Provide clear information on scholarships and streamline the application process.',
      daysToResolve: 10
    },
    {
      id: 15,
      title: 'Cultural Activities',
      description: 'Limited opportunities for cultural activities are affecting the overall development of students.',
      action: 'Organize more cultural events and encourage student participation.',
      daysToResolve: 30
    },
    {
      id: 16,
      title: 'Drug Abuse',
      description: 'There have been instances of drug abuse among students, creating a hazardous environment.',
      action: 'Implement strict anti-drug policies, conduct awareness programs, and provide counseling.',
      daysToResolve: 30
    },
    {
      id: 17,
      title: 'Harassment',
      description: 'Cases of harassment, including bullying and sexual harassment, have been reported.',
      action: 'Establish a zero-tolerance policy on harassment, provide support for victims, and take disciplinary actions against offenders.',
      daysToResolve: 7
    },
    {
      id: 18,
      title: 'Ragging',
      description: 'Incidents of ragging are causing severe distress and mental health issues for new students.',
      action: 'Enforce strict anti-ragging policies, conduct regular monitoring, and provide support for victims.',
      daysToResolve: 5
    },
  ];

  return (
    <div className="escalation-period-container">
      <h1>Problems Faced by Students in College</h1>
      <div className="problems-list">
        {problems.map(problem => (
          <div key={problem.id} className="problem-item">
            <h2>{problem.title}</h2>
            <p><strong>Description:</strong> {problem.description}</p>
            <p><strong>Action to be taken:</strong> {problem.action}</p>
            <p><strong>Days to resolve:</strong> {problem.daysToResolve}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscalationPeriod;
