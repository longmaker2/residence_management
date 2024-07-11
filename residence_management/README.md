# University Residence Management System

This project implements a simple University Residence Management System using JavaScript. It allows for the management of dorm rooms, apartments, students, maintenance requests, and employees within a university setting.

## Features

- **Residences**: Add and manage dorm rooms and apartments with their respective details such as name, address, and size/number of bedrooms.
- **Students**: Add and manage student details including name, student ID, gender, and their assigned residence.
- **Maintenance Requests**: Submit maintenance requests with descriptions and assign them to employees for handling.
- **Employees**: Add and manage employee details for handling maintenance requests.

## Classes

- **Residence**: Base class for all types of residences (dorm rooms and apartments).
- **DormRoom**: Subclass of Residence, represents dormitory rooms with additional size information.
- **Apartment**: Subclass of Residence, represents apartments with additional bedroom count information.
- **Student**: Represents a student with name, student ID, gender, and assigned residence.
- **MaintenanceRequest**: Represents a maintenance request with a description, status, associated student, and assigned employee.
- **Employee**: Represents an employee with name and employee ID.

## Usage

1. **Adding Residences**:

   - Use `addDormRoom()` function to add a dorm room.
   - Use `addApartment()` function to add an apartment.

2. **Adding Students**:

   - Use `addStudent()` function to add a student.

3. **Assigning Residences**:

   - Use `assignResidence()` function to assign a residence to a student.

4. **Managing Maintenance Requests**:

   - Use `addMaintenanceRequest()` function to add a maintenance request.
   - Use `assignEmployee()` function to assign an employee to handle a maintenance request.

5. **Adding Employees**:
   - Use `addEmployee()` function to add an employee.

## How to Run

To run this system:

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.

## Author

- [Long Deng](https://github.com/longmaker2)
