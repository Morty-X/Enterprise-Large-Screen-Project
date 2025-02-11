(function () {
    // 基于准备好的 DOM，初始化 echarts 实例
    var myChart = echarts.init(document.querySelector('#pianoWaves'));
    // 加入声音
    var xAxisData = [];
    var data = [];
    for (var i = 0; i < 50; i++) {
        xAxisData.push(i);
        data.push(Math.random(i * 5) + 2)
    }
    option = {
        // backgroundColor: '#08263a',
        grid: {
            top: '5%',
            left: '5%',
            bottom: '5%',
            right: '5%'
        },
        xAxis: {
            show: false,
            data: xAxisData
        },
        visualMap: {
            show: false,
            min: 0,
            max: 50,
            dimension: 0,
            inRange: {
                // color: '#6dbcc6'
                color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
            }
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#4a657a'
                }
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            data: data,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    shadowBlur: 10,
                    shadowColor: '#111'
                }
            },
            animationEasing: 'elasticOut',
            animationEasingUpdate: 'elasticOut',
            animationDelay: function (idx) {
                return idx * 20;
            },
            animationDelayUpdate: function (idx) {
                return idx * 20;
            }
        }]
    };
    myChart.setOption(option);


})()