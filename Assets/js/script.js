// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const employees = [];

const collectEmployees = function () {
  let continueInput = true;

  while (continueInput) {
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    let salary = parseInt(prompt("Enter salary:"));

    if (isNaN(salary)) {
      salary = 0;
    };

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employees.push(employee);
    continueInput = confirm("Add another employee?");
  }
  console.log(employees);
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;

  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });

  const numberOfEmployees = employeesArray.length;
  const averageSalary = totalSalary / numberOfEmployees;

  console.log(
    `Average Salary: $${averageSalary.toFixed(
      2
    )} for ${numberOfEmployees} employees`
  );
};

// Select a random employee
const getRandomEmployee = function (employees) {
  // TODO: Select and display a random employee
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)];

  console.log(`Congratulations, ${randomEmployee.firstName} ${randomEmployee.lastName}, you won the raffle!`);
  return employees[randomEmployee];
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
