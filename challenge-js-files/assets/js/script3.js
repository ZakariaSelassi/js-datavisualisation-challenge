let graph = () => {
    let ctx = document.createElement('canvas'); //create canvas id
    ctx.setAttribute('id', 'canvas');
    document.getElementById('firstHeading').appendChild(ctx); //take place

    let canvas = document.getElementById('canvas').getContext('2d'); //context
    let dataSource = [];
    let label = [];
    let i = 9;
    let chart = new Chart(canvas, { //https://github.com/chartjs/Chart.js/tree/master/samples/charts/line
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                    label: ['Crime Statistics'],
                    data: dataSource,
                    backgroundColor: RGB(),
                    fillStroke: 'transparent'

                }]

            }
        })
        //console.log(label);

    function RGB() {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    }

    function updateChart() {
        i++;
        label.push(i);
        //  label.push[1];
        fetch('https://canvasjs.com/services/data/datapoints.php') //https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                dataSource.length + 1;
                data.forEach(element => dataSource.push(parseInt(element[1])));
                chart.update();

            })
    };

    updateChart();

    setInterval(updateChart, 1000);
}
graph();