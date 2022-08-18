// import data file
const tableData = data; 

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    
    // Next, loop through each object in the data
     // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)              
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    }); 
}

function handleClick() {
    // GRAB THE DATETIME VALUE FROM THE FILTER
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // CHECK TO SEE IF A DATE WAS ENTERED AND FILTER THE DATA USING THAT DATE
    if (date) {
        // APPLY FILTER TO THE TABLE DATA TO ONLY KEEP THE ROWS WHERE DATETIME VALUE MATCHES THE FILTER VALUE
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //REBUILD TABLE USING THE FILTERED DATA, IF BLANK, THEN ALL
    buildTable(filteredData);
}

// ATTACH AN EVENT TO LISTEN FOR THE FORM BUTTON
d3.selectAll("#filter-btn").on("click", handleClick);

// BUILD THE TABLE WHEN THE PAGE LOADS
buildTable(tableData);