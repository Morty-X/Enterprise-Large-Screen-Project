(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rankList'));
    var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']
    option = {
        backgroundColor: '#000',
        grid: {
            borderWidth: 0,
            top: '15%',
            left: '15%',
            right: '15%',
            bottom: '0%'
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
            data: ['对外担保逾期', '委托贷款逾期', '受限货币资金'],
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
                        name: '对外担保逾期',
                        value: 120,
                        color: color[0] + ')',
                        itemStyle: {
                            normal: {
                                show: true,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: color[0] + ', 0.3)'
                                }, {
                                    offset: 1,
                                    color: color[0] + ', 1)'
                                }], false),
                                barBorderRadius: 30
                            },
                            emphasis: {
                                shadowBlur: 15,
                                shadowColor: 'rgba(0, 0, 0, 0.1)'
                            }
                        }

                    },
                    {
                        name: '委托贷款逾期',
                        value: 179,
                        color: color[1] + ')',
                        itemStyle: {
                            normal: {
                                show: true,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: color[1] + ', 0.3)'
                                }, {
                                    offset: 1,
                                    color: color[1] + ', 1)'
                                }], false),
                                barBorderRadius: 30
                            },
                            emphasis: {
                                shadowBlur: 15,
                                shadowColor: 'rgba(0, 0, 0, 0.1)'
                            }
                        }
                    },
                    {
                        name: '受限货币资金', value: 150,
                        color: color[2] + ')',
                        itemStyle: {
                            normal: {
                                show: true,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: color[2] + ', 0.3)'
                                }, {
                                    offset: 1,
                                    color: color[2] + ', 1)'
                                }], false),
                                barBorderRadius: 30
                            },
                            emphasis: {
                                shadowBlur: 15,
                                shadowColor: 'rgba(0, 0, 0, 0.1)'
                            }
                        }
                    }],
                type: 'bar',
                barWidth: 10,
                showBackground: true,
                backgroundStyle: {
                    borderRadius: 30
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                    }
                },
                label: {
                    normal: {
                        color: '#b3ccf8',
                        show: true,
                        position: [0, '-24px'],
                        textStyle: {
                            fontSize: 16
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