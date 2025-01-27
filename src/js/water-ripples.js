(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ripples'));
    // ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
    // 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill
    option = {
        // backgroundColor: '#04184A',

        series: [{
            name: 'Liquid Fill',
            type: 'liquidFill',
            center: ['20%', '30%'],// 球心到左/上边界的距离 百分数 或者 px（其他单位也按px计算）
            color: ['orange'],
            radius: '45%',
            data: [0.29],
            outline: {
                show: true,
                borderDistance: 4,
                itemStyle: {
                    borderColor: "orange",
                    borderWidth: 4,
                }
            },
            backgroundStyle: {
                color: 'transparent'
            },
            label: {
                formatter: function (param) {
                    return Math.ceil(param.value * 100) + '家';
                },
                fontSize: 18,
                color: '#f1f1f1'

            },
            tooltip: {
                show: true
            }
        }, {
            name: 'Liquid Fill',
            type: 'liquidFill',
            center: ['40%', '60%'],// 球心到左/上边界的距离 百分数 或者 px（其他单位也按px计算）
            color: ['#6de5a6'],
            radius: '30%',
            data: [0.15],
            outline: {
                show: true,
                borderDistance: 4,
                itemStyle: {
                    borderColor: "#6de5a6",
                    borderWidth: 4,
                }
            },
            backgroundStyle: {
                color: 'transparent'
            },
            label: {
                formatter: function (param) {
                    return Math.ceil(param.value * 100) + '家';
                },
                fontSize: 18,
                color: '#f1f1f1'

            },
            tooltip: {
                show: true
            }
        },
        {
            name: 'Liquid Fill',
            type: 'liquidFill',
            center: ['70%', '35%'],// 球心到左/上边界的距离 百分数 或者 px（其他单位也按px计算）
            color: ['#53b4ed'],
            radius: '60%',
            data: [0.93],
            outline: {
                show: true,
                borderDistance: 4,
                itemStyle: {
                    borderColor: "#53b4ed",
                    borderWidth: 4,
                }
            },
            backgroundStyle: {
                color: 'transparent'
            },
            label: {
                formatter: function (param) {
                    return Math.ceil(param.value * 100) + '家';
                },
                fontSize: 18,
                color: '#f1f1f1'

            },
            tooltip: {
                show: true
            }
        }]

    };
    myChart.setOption(option);
})()