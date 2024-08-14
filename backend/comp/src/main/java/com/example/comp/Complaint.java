package com.example.comp;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "complaints")
public class Complaint {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String rollNumber;
    private String department;
    private String yearOfStudying;
    private String tutorName;
    private String hodName;
    private String mobileNumber;
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getYearOfStudying() {
		return yearOfStudying;
	}
	public void setYearOfStudying(String yearOfStudying) {
		this.yearOfStudying = yearOfStudying;
	}
	public String getTutorName() {
		return tutorName;
	}
	public void setTutorName(String tutorName) {
		this.tutorName = tutorName;
	}
	public String getHodName() {
		return hodName;
	}
	public void setHodName(String hodName) {
		this.hodName = hodName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getActionRequired() {
		return actionRequired;
	}
	public void setActionRequired(String actionRequired) {
		this.actionRequired = actionRequired;
	}
	public String getTroublemaker1() {
		return troublemaker1;
	}
	public void setTroublemaker1(String troublemaker1) {
		this.troublemaker1 = troublemaker1;
	}
	public String getTroublemaker2() {
		return troublemaker2;
	}
	public void setTroublemaker2(String troublemaker2) {
		this.troublemaker2 = troublemaker2;
	}
	public String getGpsLocation() {
		return gpsLocation;
	}
	public void setGpsLocation(String gpsLocation) {
		this.gpsLocation = gpsLocation;
	}
	private String email;
    private Date date;
    private String reason;
    private String actionRequired;
    private String troublemaker1;
    private String troublemaker2;
    private String gpsLocation;
    
    
}
