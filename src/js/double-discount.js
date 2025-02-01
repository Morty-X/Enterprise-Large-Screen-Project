(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('doubleDiscount'));
    option = {
        // backgroundColor: 'rgba(0,0,0,0,5)',
        xAxis: {
            type: 'category',
            // 坐标轴刻度标签的相关设置。
            axisLabel: {
                color: '#f1f1f1',
            },
            boundaryGap: false,
            axisTick: { show: false },
            data: ['2016年', '2017年', '2018年', '2019年', '2021年', '2022年']
        },
        yAxis: {
            type: 'value',
            axisLine: {

            },
            axisLabel: {
                color: '#f1f1f1'
            },
            splitLine: {
                show: true,
                showMinLine: true,
                interval: 0,
                lineStyle: {
                    color: 'rgba(56, 126, 173,0.4)',
                    width: 1
                },

            },
            interval: 300,
        },

        legend: {
            right: 45,
            // top: 20,
            textStyle: {
                color: '#f1f1f1'
            },
            icon: 'circle'
        },
        series: [
            {
                name: '今年',
                data: [250, 350, 478, 657, 1100, 928, 574],
                type: 'line',
                smooth: true,
                // ===================
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 3,
                        color: '#489ece',
                    },
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(71, 154, 200,0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(71, 154, 200,0.2)' // 100% 处的颜色
                        }],
                    }
                },
                itemStyle: {
                    color: '#77f4d0'
                },



            }, {
                name: '去年',
                data: [350, 456, 745, 345, 789, 998, 689],
                type: 'line',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 3,
                        color: 'rgb(86, 183, 194)',
                    },
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(86, 183, 194,0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(86, 183, 194,0.2)' // 100% 处的颜色
                        }],
                    }
                },
                itemStyle: {
                    color: '#bbbafe'
                },

            }
        ]
    };
    myChart.setOption(option);
})()