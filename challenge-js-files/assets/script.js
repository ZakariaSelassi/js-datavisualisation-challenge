/*let table = document.getElementById("table1");
let data = [];
for (let i = 1; i < table.rows.length; i++) {
    let tableRow = table.rows[i];
    let rowData = [];
    console.log(tableRow);
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData.push(tableRow.cells[j].innerHTML);
    }
    data.push(rowData);
}
data[0].shift();
console.log(data);
let belgique = [];
for (let i = 1; i < 12; i++) {

    belgique.push(data[1][i]);
}
console.log(belgique);
*/
let years = [];
for (let i = 0; i < 11; i++) {
    years.push(data[0][i]);
}
console.log(years);

/*let table = document.getElementById("table1");

let row = item.row[3];
console.log(row);*/
/*const obj = Object.assign({ data }, data);
console.log(obj);*/
/*const obj = {
    years: [data[0]],
    country: [data[1][0]],
};

console.log(obj.country);
/*let swapKeysAndValues = (object) => {
        let keysAndValuesSwapped = {};

        function swap(object) {
            for (let key in object) {
                keysAndValuesSwapped[object[key]] = key;
            }
            return keysAndValuesSwapped;
        }
        return
        swap(object);
    }*/
// get table
/*
let arr = [];
let myTable = document.getElementById("table1").getElementsByTagName("tbody")[0];
for (let elementR of myTable.rows) {
    for (let elementCell of elementR.cells) {
        let a = elementCell.innerText;
        arr.push(a);
    }
}
arr.splice(0, 2);

let b = arr.slice();
console.log(b);
*/
let c = [];
let myTable = document.getElementById("table1").getElementsByTagName("tbody")[0];
let i = 1;

for (let e of myTable.rows) {
    let a = e.cells[i].innerText;
    c.push(a);
}
i++;
c.splice(0, 1);
console.log(c);


/****/


//years();
let r;
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
            labels: belgique,
            data: years,
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