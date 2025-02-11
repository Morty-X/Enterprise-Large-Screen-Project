(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('valprogressbar'));
    var data = [
        {
            name: "事项",
            itemNum: "9,796",
            value: 9796,
            color: '#96ddfe',
            itemStyle: {
                color: "#96ddfe"
            }
        },
        {
            name: "议题",
            itemNum: "10,052",
            value: 10052,
            color: '#3290fd',
            itemStyle: {
                color: "#3290fd"
            }
        },
        {
            name: "制度",
            itemNum: "6,051",
            value: 6051,
            color: '#ffef34',
            itemStyle: {
                color: "#ffef34"
            }
        }];

    var nameArr = []
    data.forEach(function (value) {
        nameArr.unshift(value.name)
    })
    console.log(nameArr);
    option = {
        backgroundColor: 'black',
        grid: {
            left: '18%', top: '15%', right: '20%', bottom: '10%'
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: [{
            type: 'category',
            inverse: false,
            data: nameArr,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 6,
                textStyle: {
                    color: "#f1f1f1",
                    fontSize: 16.25
                }
            }
        }],
        series: [
            {
                type: "pictorialBar",
                label: {
                    show: true,
                    position: 'insideRight',
                    distance: -40,
                    color: '#6f89b6',
                    formatter: "{c}万元",
                    fontSize: 18
                },
                itemStyle: {
                    borderRadius: 5
                },
                symbolRepeat: "fixed",
                symbolMargin: "4",
                symbol: 'rect',
                symbolClip: true,
                symbolSize: [10, 16],
                symbolPosition: "start",
                // symbolOffset: [
                //     10, 0
                // ],
                data: data
            }]
    };

    myChart.setOption(option);


})()