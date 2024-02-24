console.log('Hello World!');

// variables to select data from form
let fName = 
// variable to select emplopyee table
let empTable = document.querySelector('#tableBody');

// to populate empTable with new employee data
empTable.innerHTML += `
    <tr>
        <td>${}</td>
        <td>${}</td>
        <td>${}</td>
        <td>${}</td>
        <td>${}</td>
    </tr>
`