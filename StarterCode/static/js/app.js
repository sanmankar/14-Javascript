// from data.js
var tableData = data;
// Select the table body of an HTML element
var tbody = d3.select("tbody");
// Select the button on the page using the id
var fButton = d3.select ("#filter-btn");
// Select the data from filter
//var date_filter = d3.select("#datetime").node().value;

//var date_filter = document.getElementById("#datetime").value
var date_filter = d3.select("#datetime").attr("placeholder");

console.clear();
// YOUR CODE HERE!

console.log(`Date Filter - I: ${date_filter}`);
console.log(tableData);

fButton.on("click", function(){

  event.preventDefault();
  
  var date_filter2 = d3.select("#datetime").node().value;

  if (date_filter2 == ""){
    date_filter2 = date_filter;
  }

  console.log("Before Remove");
  console.log(`Date Filter - II: ${date_filter2}`);

  //rows = tbody.selectAll("tr");
  //rows.remove();

  // Filter the results based on the input date
  var results = tableData.filter( s => s.datetime === date_filter2);

  console.log(results);

  results.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
 });


//
  
