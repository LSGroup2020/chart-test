var humanAll = [2127872, 2070009, 1913050, 1811824];
var humanUse = [1113872, 1107801, 1131431, 882878];
var humanNot = [1014000, 962208, 781618, 928947];
var workAll = [64735, 38429, 41678, 48405];
var workUse = [43441, 27130, 33699, 27909];
var workNot = [21294, 11299, 7979, 20496];
var percentageAll = [3.0, 1.9, 2.2, 2.7];
var percentageUse = [3.9, 2.4, 3.0, 3.2];
var percentageNot = [2.1, 1.2, 1.0, 2.2];

var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var chartData = {
    labels: ['2013', '2015', '2017', '2019'],
    datasets: [
        {
            yAxisID:'bar_a',
            label: '농업인수-총계',
            backgroundColor: 'rgb(236, 96, 103, 0.3)',
            borderColor: '#ec5f67',
            data: humanAll,
        },
        {
            yAxisID:'bar_a',
            label: '농업인수-사용함',
            backgroundColor: 'rgb(249, 145, 87, 0.3)',
            borderColor: '#f99157',
            data: humanUse,
        },
        {
            yAxisID:'bar_a',
            label: '농업인수-사용 안함',
            backgroundColor: 'rgb(250, 200, 100, 0.3)',
            borderColor: '#fac863',
            data: humanNot,
        },
        {
            yAxisID:'bar_a',
            label: '업무상 손상자 수-총계',
            backgroundColor: 'rgb(153, 199, 148, 0.3)',
            borderColor: '#99c794',
            data: workAll,
        },
        {
            yAxisID:'bar_a',
            label: '업무상 손상자 수-사용함',
            backgroundColor: 'rgb(96, 179, 179, 0.3)',
            borderColor: '#5fb3b3',
            data: workUse,
        },
        {
            yAxisID:'bar_a',
            label: '업무상 손상자 수-사용 안함',
            backgroundColor: 'rgb(102, 153, 204, 0.3)',
            borderColor: '#6699cc',
            data: workNot,
        },
        {
            type: 'scatter',
            yAxisID:'line_a',
            fill: false,
            label: '업무상 손상 발생률-총계',
            backgroundColor: 'rgb(197, 148, 197, 0.3)',
            borderColor: '#c594c5',
            data: percentageAll,
        },
        {
            type: 'scatter',
            yAxisID:'line_a',
            fill: false,
            label: '업무상 손상 발생률-사용함',
            backgroundColor: 'rgb(171, 121, 104, 0.3)',
            borderColor: '#ab7967',
            data: percentageUse,
        },
        {
            type: 'scatter',
            yAxisID:'line_a',
            fill: false,
            label: '업무상 손상 발생률-사용 안함',
            backgroundColor: 'rgb(101, 115, 126, 0.3)',
            borderColor: '#65737e',
            data: percentageNot,
        },
    ]
};

var chartData_normal = {
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
        elements: {
            line: {
                tension: 0
            }
        },
        legend: {
            labels: {
                usePointStyle: true,
            },
            position:'bottom'
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                },
            }
        },
        scales: {
            yAxes: [{
                id: 'bar_a',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero:true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                }
            }, {
                id: 'line_a',
                type: 'linear',
                position: 'right',
                ticks: {
                    beginAtZero:true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                }
            }]
        }
    },
});



document.getElementById('line').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'line',
        data: chartData_normal,
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
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
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
        data: chartData_normal,
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
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
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
        data: chartData_normal,
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
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
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
        data: chartData_noraml,
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
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
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
        data: chartData_normal,
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
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
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
        data: chartData_normal,
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
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
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
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                labels: {
                    usePointStyle: true,
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
            },
            scales: {
                yAxes: [{
                    id: 'bar_a',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }, {
                    id: 'line_a',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }]
            }
        },
    });
};


/*$("#toggle").click(function() {
    myChart.data.datasets.forEach(function(ds) {
        ds.hidden = !ds.hidden;
    });
    myChart.update();
});*/

/*$("#toggle").click(function() {
    myChart.getDatasetMeta(0).hidden=true;
    myChart.getDatasetMeta(1).hidden=true;
    myChart.update();
});*/

function gethumanValue(event)  {
    if(event.target.checked)  {
        myChart.getDatasetMeta(0).hidden=false;
        myChart.getDatasetMeta(1).hidden=false;
        myChart.getDatasetMeta(2).hidden=false;
        myChart.update();
    }else {
        myChart.getDatasetMeta(0).hidden=true;
        myChart.getDatasetMeta(1).hidden=true;
        myChart.getDatasetMeta(2).hidden=true;
        myChart.update();
    }
}
function getworkValue(event)  {
    if(event.target.checked)  {
        myChart.getDatasetMeta(3).hidden=false;
        myChart.getDatasetMeta(4).hidden=false;
        myChart.getDatasetMeta(5).hidden=false;
        myChart.update();
    }else {
        myChart.getDatasetMeta(3).hidden=true;
        myChart.getDatasetMeta(4).hidden=true;
        myChart.getDatasetMeta(5).hidden=true;
        myChart.update();
    }
}
function getpercentageValue(event)  {
    if(event.target.checked)  {
        myChart.getDatasetMeta(6).hidden=false;
        myChart.getDatasetMeta(7).hidden=false;
        myChart.getDatasetMeta(8).hidden=false;
        myChart.update();
    }else {
        myChart.getDatasetMeta(6).hidden=true;
        myChart.getDatasetMeta(7).hidden=true;
        myChart.getDatasetMeta(8).hidden=true;
        myChart.update();
    }
}
function getallValue(event)  {
    if(event.target.checked)  {
        myChart.getDatasetMeta(0).hidden=false;
        myChart.getDatasetMeta(3).hidden=false;
        myChart.getDatasetMeta(6).hidden=false;
        myChart.update();
    }else {
        myChart.getDatasetMeta(0).hidden=true;
        myChart.getDatasetMeta(3).hidden=true;
        myChart.getDatasetMeta(6).hidden=true;
        myChart.update();
    }
}
function getuseValue(event)  {
    if(event.target.checked)  {
        myChart.getDatasetMeta(1).hidden=false;
        myChart.getDatasetMeta(4).hidden=false;
        myChart.getDatasetMeta(7).hidden=false;
        myChart.update();
    }else {
        myChart.getDatasetMeta(1).hidden=true;
        myChart.getDatasetMeta(4).hidden=true;
        myChart.getDatasetMeta(7).hidden=true;
        myChart.update();
    }
}
function getnotValue(event)  {
    if(event.target.checked)  {
        myChart.getDatasetMeta(2).hidden=false;
        myChart.getDatasetMeta(5).hidden=false;
        myChart.getDatasetMeta(8).hidden=false;
        myChart.update();
    }else {
        myChart.getDatasetMeta(2).hidden=true;
        myChart.getDatasetMeta(5).hidden=true;
        myChart.getDatasetMeta(8).hidden=true;
        myChart.update();
    }
}

$("#line, #rader, #polarArea, #bubble, #doughnut, #pie, #bar").click(function() {
    $("input[type=checkbox]").prop("checked", true);
});



//test
var chartData_n = {
    labels: ['2013', '2015'],
    datasets: [
        {
            label: '농업인수-총계',
            backgroundColor: 'rgb(236, 96, 103, 0.3)',
            borderColor: '#ec5f67',
            data: humanUse,
        },
        {
            label: '농업인수-사용함',
            backgroundColor: 'rgb(249, 145, 87, 0.3)',
            borderColor: '#f99157',
            data: humanUse,
        },

    ]
};



var ctx1 = document.getElementById("myChart_1");
var ctx2 = document.getElementById("myChart_2");
var myChart_1 = new Chart(ctx1, {
    type: 'pie',
    data: chartData_n,
    options: {
        legend: {
            labels: {
                usePointStyle: true
            },
            position:'bottom'
        },
    }
});

var myChart_2 = new Chart(ctx2, {
    type: 'pie',
    data: chartData_normal,
    options: {
        legend: {
            labels: {
                usePointStyle: true
            },
            position:'bottom'
        },
    }
});


function fnClickYear(){
    var labelArr = []
    var humanAllArr = [];
    var humanNotArr = [];
    var workAllArr = [];
    var workUseArr = [];
    var workNotArr = [];
    var percentageAllArr = [];
    var percentageUseArr = [];
    var percentageNotArr = [];


    $('input:checkbox[name="year_check"]').each(function() {
        if(this.checked){
            if( this.value == '2013' ) {
                labelArr.push('2013')
                humanAllArr.push('2127872');
                humanNotArr.push('1014000');
                workAllArr.push('64735');
                workUseArr.push('43441');
                workNotArr.push('21294');
                percentageAllArr.push('3.0');
                percentageUseArr.push('3.9');
                percentageNotArr.push('2.1');
            }
            if( this.value == '2015' ) {
                labelArr.push('2015')
                humanAllArr.push('2070009');
                humanNotArr.push('962208');
                workAllArr.push('38429');
                workUseArr.push('27130');
                workNotArr.push('11299');
                percentageAllArr.push('1.9');
                percentageUseArr.push('2.4');
                percentageNotArr.push('1.2');
            }
            if( this.value == '2017' ) {
                labelArr.push('2017')
                humanAllArr.push('1913050');
                humanNotArr.push('781618');
                workAllArr.push('41678');
                workUseArr.push('11299');
                workNotArr.push('7979');
                percentageAllArr.push('2.2');
                percentageUseArr.push('3.0');
                percentageNotArr.push('1.0');
            }
            if( this.value == '2019' ) {
                labelArr.push('2019')
                humanAllArr.push('1811824');
                humanNotArr.push('928947');
                workAllArr.push('48405');
                workUseArr.push('27909');
                workNotArr.push('20496');
                percentageAllArr.push('2.7');
                percentageUseArr.push('3.2');
                percentageNotArr.push('2.2');
            }
        }
    });

    humanAll = humanAllArr;
    humanNot = humanNotArr;
    workAll = workAllArr;
    workUse = workUseArr;
    workNot = workNotArr;
    percentageAll = percentageAllArr;
    percentageUse = percentageUseArr;
    percentageNot = percentageNotArr;

    chartData.labels = labelArr;

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                labels: {
                    usePointStyle: true,
                },
                position:'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                    },
                }
            },
            scales: {
                yAxes: [{
                    id: 'bar_a',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }, {
                    id: 'line_a',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero:true,
                        userCallback: function(value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }]
            }
        },
    });
}