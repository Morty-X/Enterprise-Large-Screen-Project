(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('eventStatistics'));
    option = {
        backgroundColor: '#000',
        grid: {
            top: '10%',
            left: '0%',
            right: '30%',
            bottom: '3%'
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                inside: false
            },

        }],
        series: [
            {
                data: [
                    {
                        name: '其它重大决策',
                        value: 201,
                    },
                    {
                        name: '党的建设重大决策',
                        value: 179,
                    },
                    {
                        name: '利益调配', value: 150,
                    },
                    {
                        name: '其它重要人事任免', value: 158
                    },
                    {
                        name: '其它大额度资金运作', value: 139
                    },
                    {
                        name: '发展战略', value: 128
                    },
                    {
                        name: '资产调整', value: 108
                    }
                ],
                type: 'bar',
                barWidth: 10,

                showBackground: true,
                backgroundStyle: {
                    borderRadius: 30
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#52befa'
                        }, {
                            offset: 0.5,
                            color: '#65d4d6'
                        }, {
                            offset: 1,
                            color: '#7bf2a1'
                        }], false),
                    },
                },
                label: {
                    normal: {
                        color: '#f1f1f1',
                        show: true,
                        position: [0, '-24px'],
                        textStyle: {
                            fontSize: 18
                        },
                        formatter: function (a, b) {
                            return a.name
                        }
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
})()