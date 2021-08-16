var chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3]
  }]
};
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
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

document.getElementById('rader').onclick = function() {
  myChart.destroy();
  myChart = new Chart(ctx, {
      type: 'radar',
    data: chartData
  });
};

document.getElementById('line').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'line',
        data: chartData
    });
};

document.getElementById('polarArea').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'polarArea',
        data: chartData
    });
};

document.getElementById('bubble').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'bubble',
        data: chartData,
    });
};

document.getElementById('doughnut').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData
    });
};

document.getElementById('pie').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'pie',
        data: chartData
    });
};

document.getElementById('bar').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData
    });
};
