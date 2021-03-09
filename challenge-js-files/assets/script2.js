Chart.defaults.global.defaultFontFamily = 'helvetica';
Chart.defaults.global.defaultFontSize = 14;

let graph = () => {
    let ctx = document.createElement('canvas');
    ctx.setAttribute('id', 'canvas');

    document.getElementById('firstHeading').appendChild(ctx);

    let canvas = document.getElementById('canvas').getContext('2d');
    let dataSource = [];
    let label = [];
    let i = 0;
    let chart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: ['Crime Statistics'],
                borderColor: 'grey',
                data: dataSource,
            }]

        }
    })
    console.log(label);
    // Update via ajax
    function updateChart() {
        i++;
        label.push(i);
        fetch('https://canvasjs.com/services/data/datapoints.php') //https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                dataSource.length + 1;
                data.forEach(element => dataSource.push(parseInt(element[1])));
                chart.update();
            })
            //  console.log(dataSource);
            //console.log(updateChart);
    };
    setInterval(updateChart, 1000);

}

graph();