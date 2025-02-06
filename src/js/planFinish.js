(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('planFinish'));
    // 指定图表的配置项和数据
    var option = {
        legend: {
            show: true,
            data: ['实际', '计划', '达成率'],
            icon: 'circle',
            right: 45,
            textStyle: {
                color: '#f1f1f1'
            }
        },

        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['planFinish', 'nullData', 'fact', 'plan', 'compleRate'],
                ['01', 0, 43.3, 85.8, 93.7],
                ['02', 0, 83.1, 73.4, 55.1],
                ['03', 0, 86.4, 65.2, 82.5],
                ['04', 0, 72.4, 53.9, 39.1],
                ['05', 0, 42.4, 23.9, 29.1],
                ['06', 0, 52.4, 33.9, 79.1],
                ['07', 0, 82.4, 23.9, 59.1],
                ['08', 0, 22.4, 33.9, 89.1],
                ['09', 0, 12.4, 33.9, 99.1],
                ['10', 0, 72.4, 43.9, 59.1],
                ['11', 0, 22.4, 43.9, 79.1],
                ['12', 0, 42.4, 53.9, 89.1],
            ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
            type: 'category',
            boundaryGap: 0,
            axisTick: {
                show: false
            },
            lineStyle: {
                color: '#999',
                width: 0.5,
                join: 'round',
                cap: 'round',
                opacity: 0.5
            },
            axisLabel: {
                interval: 0,
                color: '#f1f1f1',
            }
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: {
            show: false
        },
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            { type: 'bar', },
            {
                name: '实际', type: 'bar',
                itemStyle: {
                    borderRadius: [20, 20, 0, 0],
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#72f0f6' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0a1d29'
                            // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            },
            {
                name: '计划', type: 'bar',
                itemStyle: {
                    borderRadius: [20, 20, 0, 0],
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#318cf4' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0a1d29' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },

            },

            {
                name: '达成率',
                type: 'line',
                showAllSymbol: false,
                showSymbol: false,
                symbol: 'circle',
                smooth: true,
                symbolSize: 3,
                zlevel: 3,
                itemStyle: {
                    color: 'orange'
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        color: '#ffea38',
                    },
                },
                // areaStyle: {
                //     color: {
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [{
                //             offset: 0, color: 'rgba(255,234,56,0.4)' // 0% 处的颜色
                //         }, {
                //             offset: 1, color: 'rgba(255,234,56,0.4)' // 100% 处的颜色
                //         }],
                //         global: false // 缺省为 false
                //     }
                // }
            }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})()