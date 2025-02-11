// circle 1
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle1'));
    // 最大值
    var getmax = 100;
    // 实际值
    var getvalue = 80;
    option = {
        title: [
            {
                text: getvalue + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#f1f1f1',
                    fontFamily: 'Oswald',
                    foontWeight: '300',
                },
            },
        ],

        angleAxis: {
            show: false,
            // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 90, //极坐标初始角度
            splitLine: {
                show: false,
            },
        },

        barMaxWidth: 4, //圆环宽度 
        radiusAxis: {
            show: false,
            type: 'category',
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%',
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: getvalue,
                        itemStyle: {
                            color: '#1598FF',
                        },
                    },
                ],
                barGap: '-100%', //柱间距离,上下两层圆环重合
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3, //圆环层级，同zindex
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: getmax,
                        itemStyle: {
                            color: '#1598FF',
                            opacity: 0.2,
                            borderWidth: 0,
                        },
                    },
                ],

                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            },
        ],
    };

    myChart.setOption(option);
})();

// circle 2
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle2'));
    // 最大值
    var getmax = 100;
    // 实际值
    var getvalue = 45;
    option = {
        title: [
            {
                text: getvalue + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#f1f1f1',
                    fontFamily: 'Oswald',
                    foontWeight: '300',
                },
            },
        ],

        angleAxis: {
            show: false,
            // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 90, //极坐标初始角度
            splitLine: {
                show: false,
            },
        },

        barMaxWidth: 4, //圆环宽度 
        radiusAxis: {
            show: false,
            type: 'category',
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%',
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: getvalue,
                        itemStyle: {
                            color: '#7eb651',
                        },
                    },
                ],
                barGap: '-100%', //柱间距离,上下两层圆环重合
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3, //圆环层级，同zindex
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: getmax,
                        itemStyle: {
                            color: '#1598FF',
                            opacity: 0.2,
                            borderWidth: 0,
                        },
                    },
                ],

                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            },
        ],
    };

    myChart.setOption(option);
})();

// circle 3
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle3'));
    // 最大值
    var getmax = 100;
    // 实际值
    var getvalue = 80;
    option = {
        title: [
            {
                text: getvalue + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#f1f1f1',
                    fontFamily: 'Oswald',
                    foontWeight: '300',
                },
            },
        ],

        angleAxis: {
            show: false,
            // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 90, //极坐标初始角度
            splitLine: {
                show: false,
            },
        },

        barMaxWidth: 4, //圆环宽度 
        radiusAxis: {
            show: false,
            type: 'category',
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%',
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: getvalue,
                        itemStyle: {
                            color: '#7eb651',
                        },
                    },
                ],
                barGap: '-100%', //柱间距离,上下两层圆环重合
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3, //圆环层级，同zindex
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: getmax,
                        itemStyle: {
                            color: '#1598FF',
                            opacity: 0.2,
                            borderWidth: 0,
                        },
                    },
                ],

                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            },
        ],
    };

    myChart.setOption(option);
})();

// circle 4
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle4'));
    // 最大值
    var getmax = 100;
    // 实际值
    var getvalue = 80;
    option = {
        title: [
            {
                text: getvalue + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#f1f1f1',
                    fontFamily: 'Oswald',
                    foontWeight: '300',
                },
            },
        ],

        angleAxis: {
            show: false,
            // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 90, //极坐标初始角度
            splitLine: {
                show: false,
            },
        },

        barMaxWidth: 4, //圆环宽度 
        radiusAxis: {
            show: false,
            type: 'category',
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%',
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: getvalue,
                        itemStyle: {
                            color: '#7eb651',
                        },
                    },
                ],
                barGap: '-100%', //柱间距离,上下两层圆环重合
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3, //圆环层级，同zindex
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: getmax,
                        itemStyle: {
                            color: '#1598FF',
                            opacity: 0.2,
                            borderWidth: 0,
                        },
                    },
                ],

                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            },
        ],
    };

    myChart.setOption(option);
})();
// circle 5
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle5'));
    // 最大值
    var getmax = 100;
    // 实际值
    var getvalue = 80;
    option = {
        title: [
            {
                text: getvalue + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#f1f1f1',
                    fontFamily: 'Oswald',
                    foontWeight: '300',
                },
            },
        ],

        angleAxis: {
            show: false,
            // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 90, //极坐标初始角度
            splitLine: {
                show: false,
            },
        },

        barMaxWidth: 4, //圆环宽度 
        radiusAxis: {
            show: false,
            type: 'category',
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%',
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: getvalue,
                        itemStyle: {
                            color: '#f0a1a8',
                        },
                    },
                ],
                barGap: '-100%', //柱间距离,上下两层圆环重合
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3, //圆环层级，同zindex
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: getmax,
                        itemStyle: {
                            color: '#1598FF',
                            opacity: 0.2,
                            borderWidth: 0,
                        },
                    },
                ],

                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            },
        ],
    };

    myChart.setOption(option);
})();
// circle 6
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle6'));
    // 最大值
    var getmax = 100;
    // 实际值
    var getvalue = 80;
    option = {
        title: [
            {
                text: getvalue + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#f1f1f1',
                    fontFamily: 'Oswald',
                    foontWeight: '300',
                },
            },
        ],

        angleAxis: {
            show: false,
            // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 90, //极坐标初始角度
            splitLine: {
                show: false,
            },
        },

        barMaxWidth: 4, //圆环宽度 
        radiusAxis: {
            show: false,
            type: 'category',
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%',
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: getvalue,
                        itemStyle: {
                            color: '#3ff197',
                        },
                    },
                ],
                barGap: '-100%', //柱间距离,上下两层圆环重合
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3, //圆环层级，同zindex
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: getmax,
                        itemStyle: {
                            color: '#1598FF',
                            opacity: 0.2,
                            borderWidth: 0,
                        },
                    },
                ],

                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            },
        ],
    };

    myChart.setOption(option);
})();

