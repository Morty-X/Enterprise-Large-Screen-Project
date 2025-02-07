(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('sessionCount'));

    option = {
        legend: {
            icon: 'circle',
            right: '10%',
            top: '6%',
            textStyle: {
                color: '#fff'
            }
        },
        grid: { top: '15%', right: '10%', bottom: '10%', left: '8%' },
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['SESSION', '党支部大会', '支部委员会', '党小组会', '党课', 'end'],
                ['党委', 43.3, 85.8, 93, 72.4, 57, 57],
                ['党总支', 83.1, 73.4, 55.1, 53.9, 76, 76],
                ['党支部', 86.4, 65.2, 82.5, 39.1, 49, 49],
            ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#f1f1f1'
                }
            },

            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 6,
                color: '#fff'
            }
        },
        // 声明一个 Y 轴，数值轴。 
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                color: '#fff'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#aaa',
                    width: 1
                }
            },
        },
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            { type: 'bar' },
            { type: 'bar' },
            { type: 'bar' },
            { type: 'bar' },
        ]
    };

    myChart.setOption(option);
})()