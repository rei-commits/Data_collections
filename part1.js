// Part one
const csvString = `name,age,city
John,25,New York
Jane,30,Los Angeles
Doe,22,Chicago`;

// Splitting the CSV string into rows
const rows = csvString.split('\n');


const headers = rows[0].split(',');

// Initializing an empty array to store the parsed data
const result = [];

// Looping through the remaining rows
for (let i = 1; i < rows.length; i++) {
    // Splitting the current row into values
    const values = rows[i].split(',');

    // Initialize an empty object to store the row data
    const obj = {};

    // Loop through the headers and assigning the corresponding values
    for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = values[j].trim();
    }

    // Add the object to the result array
    result.push(obj);
}

// Printing the parsed data
console.log(result);



