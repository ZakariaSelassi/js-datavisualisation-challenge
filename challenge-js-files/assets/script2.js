let table1 = document.getElementById("table1");
let country = [];
/***** Get Country ******/
for (let i = 2; i < table1.rows.length; i++) {
    let a = table1.rows[i].cells[1].innerHTML;
    country.push(a);
}
console.log(country);
/******Get Years */
let years = [];
for (let k = 2; k < 12; k++) {
    let b = table1.rows[1].cells[k].innerHTML;
    years.push(b);

}
console.log(years);
/* GET DATA */

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
            labels: country,
            data: data,
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