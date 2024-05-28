// Part 2
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

const cachedResult = result;

// Printing the parsed data
console.log(cachedResult);
