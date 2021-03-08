/*let table = document.getElementById("table1");
var data = [];
for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = [];
    for (var j = 1; j < tableRow.cells.length; j++) {
        rowData.push(tableRow.cells[j].innerHTML);

    }

    data.push(rowData);
}
data[0].shift();
console.log(data);
*/


// get table
/* Recupere la valeur année */
let arr = [];
let myTable = document.getElementById("table1").getElementsByTagName("tbody")[0];
console.log(myTable);
let i = 3;
for (let e of myTable.rows) {
    let a = e.cells[i].innerText;
    arr.push(a);
    i++;

}
arr.splice(0, 2);
console.log(arr);


/*let country = () => {
    
    console.log(myTable);
    for (let e of myTable.rows) {

        console.log(e.cells[1].innerText);
    }
}*/


/****/
//country();
//years();

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arr,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 5, 2, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});