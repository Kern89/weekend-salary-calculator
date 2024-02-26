console.log('Hello World!');


// variable to select emplopyee table
let empTable = document.querySelector('#tableBody');

// to populate empTable with new employee data
function submitForm(event) {
    event.preventDefault();

    // variables to select data from form
    let fName = document.querySelector('#fNameData').value;
    let lName = document.querySelector('#lNameData').value;
    let idData = document.querySelector('#idData').value;
    let title = document.querySelector('#titleData').value;
    let salary = document.querySelector('#salaryData').value;

    // .innerHTML portion of function
    empTable.innerHTML += `
        <tr id="tabRow">
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${idData}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onClick="deleteEmp(event)">Delete</button></td>
        </tr>
    `
    monthSal(event);
    totalMonthly.innerHTML =`Total Monthly: $${totMonth}`;
    document.getElementById('employeeForm').reset();

    // to check if over budget 
    if (totMonth > 20000) {
        totalMonthly.setAttribute('class', 'overBudget');
        //change this to tell by how much over the budget?
        // totalMonthly.innerHTML += `
        // <p class="overBudget">Warning you are over your $20,000 budget!</p>
        // `
        alert('Warning you are over your $20,000 budget!');
    }
}


// updating total monthly cost
let totMonth = 0;
let totalMonthly = document.querySelector('#monthTotal');
function monthSal(event) {
    totMonth += event.target.querySelector('#salaryData').value / 12;
}

//function to remove employee
function deleteEmp(event) {
    event.target.parentElement.parentElement.remove();
}