let humanAll = [2127872, 2070009, 1913050, 1811824];
let humanUse = [1113872, 1107801, 1131431, 882878];
let humanNot = [1014000, 962208, 781618, 928947];
let workAll = [64735, 38429, 41678, 48405];
let workUse = [43441, 27130, 33699, 27909];
let workNot = [21294, 11299, 7979, 20496];
let percentageAll = [3.0, 1.9, 2.2, 2.7];
let percentageUse = [3.9, 2.4, 3.0, 3.2];
let percentageNot = [2.1, 1.2, 1.0, 2.2];


var chartData = {
    labels: ['2013', '2015', '2017', '2019'],
    datasets: [
        {
            label: '농업인수-총계',
            backgroundColor: 'rgb(236, 96, 103, 0.3)',
            borderColor: '#ec5f67',
            data: humanAll,
        },
        {
            label: '농업인수-사용함',
            backgroundColor: 'rgb(249, 145, 87, 0.3)',
            borderColor: '#f99157',
            data: humanUse,
        },
        {
            label: '농업인수-사용 안함',
            backgroundColor: 'rgb(250, 200, 100, 0.3)',
            borderColor: '#fac863',
            data: humanNot,
        },
        {
            label: '업무상 손상자 수-총계',
            backgroundColor: 'rgb(153, 199, 148, 0.3)',
            borderColor: '#99c794',
            data: workAll,
        },
        {
            label: '업무상 손상자 수-사용함',
            backgroundColor: 'rgb(96, 179, 179, 0.3)',
            borderColor: '#5fb3b3',
            data: workUse,
        },
        {
            label: '업무상 손상자 수-사용 안함',
            backgroundColor: 'rgb(102, 153, 204, 0.3)',
            borderColor: '#6699cc',
            data: workNot,
        },
        {
            label: '업무상 손상 발생률-총계',
            backgroundColor: 'rgb(197, 148, 197, 0.3)',
            borderColor: '#c594c5',
            data: percentageAll,
        },
        {
            label: '업무상 손상 발생률-사용함',
            backgroundColor: 'rgb(171, 121, 104, 0.3)',
            borderColor: '#ab7967',
            data: percentageUse,
        },
        {
            label: '업무상 손상 발생률-사용 안함',
            backgroundColor: 'rgb(101, 115, 126, 0.3)',
            borderColor: '#65737e',
            data: percentageNot,
        },
    ]
};
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
    options: {
        legend: {
            labels: {
                usePointStyle: true,
            },
            position:'bottom'
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                }
            }],
            xAxes: [{
                ticks: {
                }
            }]
        },
    },
});



document.getElementById('line').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                    }
                }]
            },
        },
    });
};

document.getElementById('rader').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'radar',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
                /*yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],*/
                /*xAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                    }
                }]*/
            },
        },
    });
};

document.getElementById('polarArea').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'polarArea',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            /*scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                    }
                }]
            },*/
        },
    });
};

document.getElementById('bubble').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'bubble',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                    }
                }]
            },
        },
    });
};

document.getElementById('doughnut').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            /*tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },*/
            /*scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                    }
                }]
            },*/
        },
    });
};

document.getElementById('pie').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            /*tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },*/
            /*scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                    }
                }]
            },*/
        },
    });
};

document.getElementById('bar').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }],
                xAxes: [{
                    ticks: {
                    }
                }]
            },
        },
    });
};
