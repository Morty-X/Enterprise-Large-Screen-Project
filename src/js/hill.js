(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('project-progress'));
    option = {
        // backgroundColor: '#474747',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: "shadow"
            }
        },

        grid: {
            left: '12%',
            top: '5%',
            bottom: '12%',
            right: '8%'
        },
        xAxis: {
            data: ['土地', '新筑股份', '财产保险', '发展城投', '轨道投资', '新能源', '通讯',],
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                    fontSize: 10
                }
            }
        },
        yAxis: [{
            splitNumber: 6,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2d3437',
                    width: 0.5,
                    type: 'dashed'
                }
            }
        }],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: false,
            },
            // itemStyle:
            // {
            //     normal: {
            //         color: {
            //             type: 'linear',
            //             x: 0,
            //             y: 0,
            //             x2: 0,
            //             y2: 1,
            //             colorStops: [{
            //                 offset: 0,
            //                 color: 'rgba(68, 111, 129)' //  0%  处的颜色
            //             },
            //             {
            //                 offset: 1,
            //                 color: 'rgba(68, 111, 129,0.5)' //  100%  处的颜色
            //             }
            //             ],
            //             global: false //  缺省为  false
            //         }
            //     },
            //     emphasis: {
            //         opacity: 1
            //     }
            // },
            // data: [5.68, 3.37, 2.43, 1.65, 0.98, 0.65, 2.16],
            data: [{
                value: 5.36,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(68, 111, 129)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(68, 111, 129)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }, {
                value: 3.37,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(39, 71, 126)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(39, 71, 126)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }, {
                value: 2.43,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(81, 128, 117)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(81, 128, 117)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }, {
                value: 3.37,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(109, 105, 42)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(109, 105, 42)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }, {
                value: 0.98,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(31, 54, 75)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(31, 54, 75)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }, {
                value: 0.65,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(91, 66, 25)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(91, 66, 25)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }, {
                value: 2.16,
                itemStyle:
                {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(37, 50, 102)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(37, 50, 102)' //  100%  处的颜色
                            }
                            ],
                            global: false //  缺省为  false
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }],
            z: 10
        },
        ]

    };


    myChart.setOption(option);
})()