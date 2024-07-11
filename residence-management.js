// Base class for all residences
class Residence {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.occupied = false;
  }

  occupy() {
    this.occupied = true;
  }

  vacate() {
    this.occupied = false;
  }
}

// Subclass for Dorm Rooms, extends Residence
class DormRoom extends Residence {
  constructor(name, address, size) {
    super(name, address);
    this.size = size; // Size of the dorm room in square footage
  }

  calculateRent() {
    return this.size * 20; // Calculation of rent based on size
  }
}

// Subclass for Apartments, extends Residence
class Apartment extends Residence {
  constructor(name, address, numBedrooms) {
    super(name, address);
    this.numBedrooms = numBedrooms; // Number of bedrooms in the apartment
  }

  calculateRent() {
    return this.numBedrooms * 150000; // Calculation of rent based on number of bedrooms
  }
}

// Class representing a Student
class Student {
  constructor(name, studentID, gender) {
    this.name = name;
    this.studentID = studentID;
    this.gender = gender;
    this.residence = null; // Residence assigned to the student, initially null
  }

  // Method to assign a residence to the student
  assignResidence(residence) {
    this.residence = residence;
    residence.occupy(); // Mark the residence as occupied
  }

  // Method to vacate the current residence
  vacateResidence() {
    if (this.residence) {
      this.residence.vacate(); // Mark the residence as vacant
      this.residence = null;
    }
  }
}

// Class representing a Maintenance Request
class MaintenanceRequest {
  constructor(description, student) {
    this.description = description;
    this.status = "submitted"; // Initial status of the maintenance request
    this.student = student; // Student associated with the maintenance request
    this.assignedEmployee = null; // Employee assigned to handle the request, initially null
  }

  // Method to assign an employee to handle the maintenance request
  assignEmployee(employee) {
    this.assignedEmployee = employee;
    this.status = "in progress"; // Update status to indicate request is in progress
  }

  // Method to mark the maintenance request as completed
  completeRequest() {
    this.status = "completed"; // Update status to indicate request is completed
  }
}

// Class representing an Employee
class Employee {
  constructor(name, employeeID) {
    this.name = name;
    this.employeeID = employeeID;
  }
}

// Arrays to store instances of residences, students, maintenance requests, and employees
const residences = [];
const students = [];
const maintenanceRequests = [];
const employees = [];

// Function to add a Dorm Room
function addDormRoom() {
  const name = document.getElementById("dormName").value;
  const address = document.getElementById("dormAddress").value;
  const size = document.getElementById("dormSize").value;
  const dormRoom = new DormRoom(name, address, parseInt(size));
  residences.push(dormRoom); // Add dorm room instance to residences array
  displayList("dormRoomList", dormRoom); // Display dorm room in the list
  document
    .querySelector('form[onsubmit="addDormRoom(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to add an Apartment
function addApartment() {
  const name = document.getElementById("aptName").value;
  const address = document.getElementById("aptAddress").value;
  const numBedrooms = document.getElementById("aptBedrooms").value;
  const apartment = new Apartment(name, address, parseInt(numBedrooms));
  residences.push(apartment); // Add apartment instance to residences array
  displayList("apartmentList", apartment); // Display apartment in the list
  document
    .querySelector('form[onsubmit="addApartment(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to add a Student
function addStudent() {
  const name = document.getElementById("studentName").value;
  const studentID = document.getElementById("studentID").value;
  const gender = document.getElementById("studentGender").value;
  const student = new Student(name, studentID, gender);
  students.push(student); // Add student instance to students array
  displayList("studentList", student); // Display student in the list
  document
    .querySelector('form[onsubmit="addStudent(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to assign a residence to a Student
function assignResidence() {
  const studentName = document.getElementById("assignStudentName").value;
  const residenceName = document.getElementById("assignResidenceName").value;
  const student = students.find((s) => s.name === studentName);
  const residence = residences.find((r) => r.name === residenceName);
  if (student && residence) {
    student.assignResidence(residence); // Assign residence to the student
    displayList(
      "assignedResidenceList",
      `${student.name} assigned to ${residence.name}`
    ); // Display assignment in the list
    alert(`${student.name} assigned to ${residence.name}!`); // Show alert message
  } else {
    alert(`Student or Residence not found!`); // Show alert if student or residence not found
  }
  document
    .querySelector('form[onsubmit="assignResidence(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to add a Maintenance Request
function addMaintenanceRequest() {
  const description = document.getElementById("requestDescription").value;
  const studentName = document.getElementById("requestStudentName").value;
  const student = students.find((s) => s.name === studentName);
  if (student) {
    const request = new MaintenanceRequest(description, student);
    maintenanceRequests.push(request); // Add maintenance request instance to array
    displayList("maintenanceRequestList", request); // Display request in the list
    alert(`Maintenance Request for ${description} added!`); // Show alert message
  } else {
    alert(`Student not found!`); // Show alert if student not found
  }
  document
    .querySelector('form[onsubmit="addMaintenanceRequest(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to add an Employee
function addEmployee() {
  const name = document.getElementById("employeeName").value;
  const employeeID = document.getElementById("employeeID").value;
  const employee = new Employee(name, employeeID);
  employees.push(employee); // Add employee instance to employees array
  displayList("employeeList", employee); // Display employee in the list
  document
    .querySelector('form[onsubmit="addEmployee(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to assign an Employee to a Maintenance Request
function assignEmployee() {
  const description = document.getElementById("assignRequestDescription").value;
  const employeeName = document.getElementById("assignEmployeeName").value;
  const request = maintenanceRequests.find(
    (r) => r.description === description
  );
  const employee = employees.find((e) => e.name === employeeName);
  if (request && employee) {
    request.assignEmployee(employee); // Assign employee to handle the request
    displayList(
      "assignedEmployeeList",
      `Request for ${description} assigned to ${employee.name}`
    ); // Display assignment in the list
    alert(`Request for ${description} assigned to ${employee.name}!`); // Show alert message
  } else {
    alert(`Request or Employee not found!`); // Show alert if request or employee not found
  }
  document
    .querySelector('form[onsubmit="assignEmployee(); return false;"]')
    .reset(); // Reset form after submission
}

// Function to display an item in the specified list
function displayList(elementId, item) {
  const list = document.getElementById(elementId);
  const listItem = document.createElement("div");
  listItem.textContent = JSON.stringify(item, null, 2); // Display item as formatted JSON
  list.appendChild(listItem);
}
