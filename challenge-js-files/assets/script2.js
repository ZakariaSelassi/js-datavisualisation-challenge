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
/** Boucle imbriqué  */
let dataC = [];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: country,
        datasets: [{
            label: years[0],
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }, {
            label: years[1],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[2],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[3],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[4],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[5],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[6],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[7],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[8],
            data: [2, 1, 3, 5, 2, 1],
        }, {
            label: years[9],
            data: [2, 1, 3, 5, 2, 1],
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