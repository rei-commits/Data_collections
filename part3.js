// Part 3
const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

const rows = csvString.split('\n');
const headers = rows[0].split(',');
const numOfColumns = headers.length;
const result = [];
result.push(headers.map(header => header.trim()));

for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    const rowArray = [];

    for (let j = 0; j < numOfColumns; j++) {
        rowArray.push(values[j].trim());
    }
    result.push(rowArray);
}

// Print the parsed CSV data
console.log("Parsed CSV Data:", result);

// Transforming Data into an Array of Objects
// Extract the headers from the first row
const objectHeaders = result[0].map(header => header.trim().toLowerCase());
const transformedData = [];

for (let i = 1; i < result.length; i++) {
    // Initialize an empty object for the current row
    const obj = {};

    for (let j = 0; j < objectHeaders.length; j++) {
        obj[objectHeaders[j]] = result[i][j].trim();
    }
     // Add the object to the transformed data array
    transformedData.push(obj);
}

// Print the transformed data
console.log("Transformed Data:", transformedData);
