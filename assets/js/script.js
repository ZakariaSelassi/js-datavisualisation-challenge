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
/*Data sur la premiere année*/
let data1 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col1 = table1.rows[i].cells[2].innerHTML;
    data1.push(parseInt(col1));
}
let data2 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col2 = table1.rows[i].cells[3].innerHTML;
    data2.push(parseInt(col2));
}

let data3 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col3 = table1.rows[i].cells[4].innerHTML;
    data3.push(parseInt(col3));
}
let data4 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col4 = table1.rows[i].cells[5].innerHTML;
    data4.push(parseInt(col4));
}
let data5 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col5 = table1.rows[i].cells[6].innerHTML;
    data5.push(parseInt(col5));
}
let data6 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col6 = table1.rows[i].cells[7].innerHTML;
    data2.push(parseInt(col6));
}

let data7 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col7 = table1.rows[i].cells[8].innerHTML;
    data7.push(parseInt(col7));
}
let data8 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col8 = table1.rows[i].cells[9].innerHTML;
    data8.push(parseInt(col8));
}
let data9 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col9 = table1.rows[i].cells[10].innerHTML;
    data9.push(parseInt(col9));
}
let data10 = [];
for (let i = 2; i < table1.rows.length; i++) {
    let col10 = table1.rows[i].cells[10].innerHTML;
    data10.push(parseInt(col10));
}
/*
/*******NE PAS EFFACER  */
/*let d;
let test = [];
for (let i = 2; i < table1.rows.length; i++) {
    let tabRow = table1.rows[i];
    let tr = [];
    console.log(tabRow);
    for (let j = 2; j < tabRow.cells.length; j++) {
        tr.push(tabRow.cells[j].innerText);

    }
    test.push(tr);
}
console.log(test[0]);*/
let ctx = document.createElement('canvas');
ctx.setAttribute('id', 'mycanvas1');
document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police').appendChild(ctx);
let canvas1 = document.getElementById("mycanvas1").getContext('2d');
var myChart = new Chart(canvas1, {
    type: 'bar',
    data: {
        labels: country,
        datasets: [{
                label: years[0],
                data: data1,
                borderWidth: 1

            },
            {
                label: years[1],
                data: data2,
            }, {
                label: years[2],
                data: data3,
            }, {
                label: years[3],
                data: data4,
            }, {
                label: years[4],
                data: data5,
            }, {
                label: years[5],
                data: data6,
            }, {
                label: years[6],
                data: data7,
            }, {
                label: years[7],
                data: data8,
            }, {
                label: years[8],
                data: data9,
            }, {
                label: years[9],
                data: data10,
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