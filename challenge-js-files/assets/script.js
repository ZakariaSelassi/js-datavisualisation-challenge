const xData = [];
const yData = [];

fetch('https://canvasjs.com/services/data/datapoints.php') //https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
    .then(response => response.json() //https://developer.mozilla.org/fr/docs/Web/API/Body/json
        .then(data => { // data is an array
            data.forEach((element) => {
                xData.push(element[0]);
                yData.push(element[1]);
            })
            updateData(); // add and update xData and yData into chartJS
            updateChart();
            console.log(xData);
            console.log(yData);
            console.log(data);
        }))

// fetch new data every second then push 1 pair
const updateChart = () => {
    fetch('https://canvasjs.com/services/data/datapoints.php') //https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
        .then(response => response.json()
            .then(data => {
                yData.push(data[9][0]); // number of datapoints = 9;
                xData.push(xData.length);
                updateData(); // add and update xData and yData into chartJS
                //  setInterval(updateChart, 1000); //https://codepen.io/jordanwillis/pen/bqaGRR
                setTimeout(function() { updateChart() }, 1000);
                // console.log(data);
                //  console.log(updateData);
                //  console.log(updateChart);
                // console.log(xData);
                // console.log(yData);

            }))
}

// every second a new array of data is update
const updateData = () => {
    chartJS.data.labels = xData;
    chartJS.data.datasets[0].data = yData;
    chartJS.update(); // https://www.chartjs.org/docs/latest/developers/updates.html
    // console.log('updateData'); OK
    console.log(yData);
    console.log("verif");
}

// Insert <canvas> into DOM

document.getElementById('firstHeading').insertAdjacentHTML('beforeend', "<canvas id='myChart'></canvas>");

// https://www.chartjs.org/docs/latest/charts/line.html

let ctx = document.getElementById('myChart').getContext('2d');
let chartJS = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bubble',
    data: {
        labels: [],
        datasets: [{
            label: 'Crimes Statistics In Europe',
            borderColor: 'grey',
            backgroundColor: 'light grey',
            data: []
        }]
    },
    // Configuration options go here
    options: {

    }
});