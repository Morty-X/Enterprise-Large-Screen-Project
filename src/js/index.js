(function () {
    var animationImg = document.querySelector('.bg-top img')
    console.log(animationImg);

    function animate(i) {
        requestAnimationFrame(function () {
            var index = `00${i++}`.slice(-3)
            animationImg.src = `assets/frames/${index}.png`
            var nextIndex = i >= 298 ? 50 : i++;
            animate(nextIndex)
        })
    }
    animate(0)


    // eCharts图表配置项

    var turnoverRateEChart = echarts.init(document.getElementById('turnoverRate-graph'));
    

    const offsetX = 20;
    const offsetY = 10;
    // 绘制左侧面
    const CubeLeft = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
        },
        buildPath: function (ctx, shape) {
            // 会canvas的应该都能看得懂，shape是从custom传入的
            const xAxisPoint = shape.xAxisPoint;
            // console.log(shape);
            const c0 = [shape.x, shape.y];
            const c1 = [shape.x - offsetX, shape.y - offsetY];
            const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
            const c3 = [xAxisPoint[0], xAxisPoint[1]];
            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
        },
    });
    // 绘制右侧面
    const CubeRight = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c1 = [shape.x, shape.y];
            const c2 = [xAxisPoint[0], xAxisPoint[1]];
            const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
            const c4 = [shape.x + offsetX, shape.y - offsetY];
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        },
    });
    // 绘制顶面
    const CubeTop = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
        },
        buildPath: function (ctx, shape) {
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
            const c3 = [shape.x, shape.y - offsetX];
            const c4 = [shape.x - offsetX, shape.y - offsetY];
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        },
    });
    // 注册三个面图形
    echarts.graphic.registerShape('CubeLeft', CubeLeft);
    echarts.graphic.registerShape('CubeRight', CubeRight);
    echarts.graphic.registerShape('CubeTop', CubeTop);

    // 指定图表的配置项和数据
    option = {
        color: '#3779b8',
        backgroundColor: '#020B19',
        legend: {
            show: true,
            textStyle: {
                color: '#fff'
            },
            right: '5%',
            itemStyle: {
                // color: 'orange'
            }
        },
        dataset: {
            source: [
                ["year", "当月值", '同比'],
                ["2016年", 0.02, 0.02],
                ["2017年", 0.03, 0.03],
                ["2018年", 0.09, 0.09],
                ["2019年", 0.07, 0.07],
                ["2020年", 0.06, 0.06],
                ["2021年", 0.08, 0.08],
                ["2022年", 0.04, 0.04],
            ]
        },
        grid: {
            top: '17%',
            bottom: '20%',
        },
        tooltip: {

        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
            type: "category",
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
                show: true,
                interval: 0,
                margin: 25,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: {
            type: "value",
            axisLabel: {
                color: '#fff'
            }
        },
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            {
                type: 'custom',
                name: '当月值',
                renderItem: (params, api) => {
                    const location = api.coord([api.value(0), api.value(1)]);
                    return {
                        type: 'group',
                        children: [
                            {
                                type: 'CubeLeft',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0]),
                                },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#33BCEB',
                                        },
                                        {
                                            offset: 1,
                                            color: '#337CEB',
                                        },
                                    ]),
                                },
                            },
                            {
                                type: 'CubeRight',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0]),
                                },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#28A2CE',
                                        },
                                        {
                                            offset: 1,
                                            color: '#1A57B7',
                                        },
                                    ]),
                                },
                            },
                            {
                                type: 'CubeTop',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0]),
                                },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#43C4F1',
                                        },
                                        {
                                            offset: 1,
                                            color: '#28A2CE',
                                        },
                                    ]),
                                },
                            },
                        ],
                    };
                },
            },
            {
                name: '同比',
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
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255,234,56,0.4)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255,234,56,0.4)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }


                }

            },

        ]

    };

    // 使用刚指定的配置项和数据显示图表。
    turnoverRateEChart.setOption(option);










})();