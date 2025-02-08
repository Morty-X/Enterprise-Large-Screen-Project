(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('radarChart'));
    option = {
        
        width: 'fit', height: 'fit',
        // grid: { top: '20%', left: '10%', bottom: '20%', right: '10%' },
        radar: {
            // shape: 'circle',
            radius: '65%',
            axisName: {
                color: '#fff',
                fontSize: 18
            },
            splitNumber: 5,
            // 轴线相关设置
            axisLine: {
                lineStyle: {
                    // color:'red'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#4e545c',
                    cap: 'round'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['']
                }
            },
            indicator: [
                { name: '盈利能力', max: 6500 },
                { name: '偿债能力', max: 16000 },
                { name: '资产质量', max: 30000 },
                { name: '经营增长', max: 38000 },
                { name: '成长能力', max: 52000 },
                { name: '财务风险', max: 25000 }
            ]
        },
        series: [
            {
                name: '财务能力预警',
                type: 'radar',
                symbol: 'none',
                // 开启平滑曲线
                smooth: true,
                // 设置平滑单调模式
                smoothMonotone: 'y',
                lineStyle: {
                    cap: 'round',
                    join: 'round',
                    // 设置线条宽度
                    width: 3,
                },

                itemStyle: {

                    // borderCap: 'round'
                },
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget',
                        lineStyle: {
                            color: '#beaa42'
                        },
                        areaStyle: {
                            color: '#beaa42'
                        },
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual Spending',
                        lineStyle: {
                            color: '#b15861'
                        },
                        areaStyle: {
                            color: '#b15861'
                        },
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);

})()