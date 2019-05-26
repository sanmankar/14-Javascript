// from data.js
var tableData = data;
// Select the table body of an HTML element
var tbody = d3.select("tbody");
// Select the button on the page using the id
var fButton = d3.select ("#filter-btn");
// Select the data from filter
//var date_filter = d3.select("#datetime").node().value;

console.clear();
// YOUR CODE HERE!

//console.log(`Date Filter - I: ${date_filter}`);

function showData(pData) {
  pData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
return;
}

showData(tableData);


function showData2(pData) {
  pData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
return;
}

function filterData(vdata){
  date_filter = d3.select("#datetime").node().value;
  //console.log(`Date Filter: ${date_filter}`);

  if (vdata.datetime === date_filter){
    //console.log(`Data Date ${data.datetime}`);
    return vdata;
  }
}

fButton.on("click", function(){
  //console.log("Before Remove");
  rows = tbody.selectAll("tr");
  rows.remove();
  //var date_filter = d3.select("#datetime").node().value;
  x_data = tableData.filter(filterData);
  console.log('Object');
  console.log(x_data);
  showData2(x_data);
 });


//
  
