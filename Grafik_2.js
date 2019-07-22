function callDailyChart(Values, Name){

    var series= [];

    for(var i=0; i<Values.length; i++){

        if(i===0){
            series[series.length]={
                name: Name[i],
                color: 'rgba(223, 83, 83, .5)',
                data: Values[i]

            };
        }else if (i===1){

            series[series.length]={
                name:  Name[i],
                color: 'rgba(119, 152, 191, .5)',
                data: Values[i]

            };
        }



    }
    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Tägliche Datenvisualisierung'
        },

        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            categories: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
        },
        yAxis: {
            title: {
                text: Name
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            x: 'top',
            y: 'top',
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: ' {point.x}, {point.y} '
                }
            }
        },
        series: series
    });
}


function callWeeklyChart(Values, Name){


    var series= [];

    for(var i=0; i<Values.length; i++){

        if(i===0){
            series[series.length]={
                name: Name[i],
                color: 'rgba(223, 83, 83, .5)',
                data: Values[i]

            };
        }else if (i===1){

            series[series.length]={
                name:  Name[i],
                color: 'rgba(119, 152, 191, .5)',
                data: Values[i]

            };
        }



    }
    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Wöchentliche Datenvisualisierung'
        },

        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            categories: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],


        },
        yAxis: {
            title: {
                text: Name
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            x: 'top',
            y: 'top',
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: ' {point.x}, {point.y} '
                }
            }
        },
        series: series
    });
}

function callMonthlyChart(Values, Name){

    var series= [];

    for(var i=0; i<Values.length; i++){

        if(i===0){
            series[series.length]={
                name: Name[i],
                color: 'rgba(223, 83, 83, .5)',
                data: Values[i]

            };
        }else if (i===1){

            series[series.length]={
                name:  Name[i],
                color: 'rgba(119, 152, 191, .5)',
                data: Values[i]

            };
        }



    }

    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Monatliche Datenvisualisierung'
        },

        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            categories: ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]
        },
        yAxis: {
            title: {
                text: Name
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            x: 'top',
            y: 'top',
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: ' {point.x}, {point.y} '
                }
            }
        },
        series: series
    });
}
function callAllChart(Values, Name){

    var series= [];

    for(var i=0; i<Values.length; i++){

        if(i===0){
            series[series.length]={
                name: Name[i],
                color: 'rgba(223, 83, 83, .5)',
                data: Values[i]

            };
        }else if (i===1){

            series[series.length]={
                name:  Name[i],
                color: 'rgba(119, 152, 191, .5)',
                data: Values[i]

            };
        }



    }

    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: ''
        },

        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            categories: [""]
        },
        yAxis: {
            title: {
                text: Name
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            x: 'top',
            y: 'top',
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: ' {point.x}, {point.y} '
                }
            }
        },
        series: series
    });
}
