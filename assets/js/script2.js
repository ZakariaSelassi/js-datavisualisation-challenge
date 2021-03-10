let table2 = document.getElementById("table2");
let country2 = [];
/***** Get Country ******/
for (let i = 2; i < table2.rows.length; i++) {
    let firstCol = table2.rows[i].cells[1].innerHTML;
    country2.push(firstCol);
}
console.log(country2);
/***** Get Years ******/
let years2 = [];
for (let i = 2; i < table2.rows[0].cells.length; i++) {
    let firstRow = table2.rows[0].cells[i].innerHTML;
    years2.push(firstRow);

}
/*** Get Data */
let data2007 = [];
for (let i = 1; i < table2.rows.length; i++) {
    let col1 = table2.rows[i].cells[2].innerHTML;
    data2007.push(parseInt(col1));
}
console.log(data2007);
let data2010 = [];
for (let i = 1; i < table2.rows.length; i++) {
    let col1 = table2.rows[i].cells[3].innerHTML;
    data2010.push(parseInt(col1));
}
/**** */
function RGB() { return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); }
var ctx = document.getElementById('myCanvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: country2,
        datasets: [{
                label: years2[0],
                data: data2007,
                //hidden: true,
                options: {
                    animation: false
                },
                borderWidth: 1,
                backgroundColor: [
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                ],
            },
            {
                label: years2[1],
                data: data2010,
                borderWidth: 1,
                hidden: true,
                borderWidth: 1,
                backgroundColor: [
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                    RGB(),
                ],
            }
        ]
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