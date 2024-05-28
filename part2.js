// Sample CSV string
const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Splitting the CSV string into rows
const rows = csvString.split('\n');

// Extracting the header row and determining the number of columns
const headers = rows[0].split(',');
const numOfColumns = headers.length;

// Initializing an empty array to store the parsed data
const result = [];

// Adding the header row to the result array
result.push(headers.map(header => header.trim()));

// Looping through the remaining rows
for (let i = 1; i < rows.length; i++) {
    // Splitting the current row into values
    const values = rows[i].split(',');

    // Creating an array for the current row
    const rowArray = [];

    // Looping through the values and adding them to the row array
    for (let j = 0; j < numOfColumns; j++) {
        rowArray.push(values[j].trim());
    }

    // Adding the row array to the result array
    result.push(rowArray);
}

// Caching the result array for later use
const cachedResult = result;

// Printing the parsed data
console.log(cachedResult);