// circle 1
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle1'));

    const themeColor = {
        bar: 'yellow',
        remain: 'transprant',
        text: '#f1f1f1'
    };
    const progress = 60;
    option = {
        grid: { top: 0, left: 0, right: 0, bottom: 0 },
        title: [{
            text: progress + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: '10',
                color: themeColor.text,
                fontFamily: 'Oswald',
                foontWeight: '300',
            },
        }],
        polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: progress > 0 ? themeColor.remain : 'red',
            },
            data: [progress],
            coordinateSystem: 'polar',
            itemStyle: {
                color: themeColor.bar,
            }
        },]
    };
    myChart.setOption(option);
})();

// circle 2
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle2'));

    const themeColor = {
        bar: '#99b868',
        remain: 'transprant',
        text: '#f1f1f1'
    };
    const progress = 45;
    option = {
        grid: { top: 0, left: 0, right: 0, bottom: 0 },
        title: [{
            text: progress + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: '10',
                color: themeColor.text,
                fontFamily: 'Oswald',
                foontWeight: '300',
            },
        }],
        polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: progress > 0 ? themeColor.remain : 'red',
            },
            data: [progress],
            coordinateSystem: 'polar',
            itemStyle: {
                color: themeColor.bar,
            }
        },]
    };
    myChart.setOption(option);
})();

// circle 3
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle3'));

    const themeColor = {
        bar: '#f1939c',
        remain: 'transprant',
        text: '#f1f1f1'
    };
    const progress =57;
    option = {
        grid: { top: 0, left: 0, right: 0, bottom: 0 },
        title: [{
            text: progress + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: '10',
                color: themeColor.text,
                fontFamily: 'Oswald',
                foontWeight: '300',
            },
        }],
        polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: progress > 0 ? themeColor.remain : 'red',
            },
            data: [progress],
            coordinateSystem: 'polar',
            itemStyle: {
                color: themeColor.bar,
            }
        },]
    };
    myChart.setOption(option);
})();
// circle 4
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle4'));

    const themeColor = {
        bar: '#951c48',
        remain: 'transprant',
        text: '#f1f1f1'
    };
    const progress = 78;
    option = {
        grid: { top: 0, left: 0, right: 0, bottom: 0 },
        title: [{
            text: progress + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: '10',
                color: themeColor.text,
                fontFamily: 'Oswald',
                foontWeight: '300',
            },
        }],
        polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: progress > 0 ? themeColor.remain : 'red',
            },
            data: [progress],
            coordinateSystem: 'polar',
            itemStyle: {
                color: themeColor.bar,
            }
        },]
    };
    myChart.setOption(option);
})();
// circle 5
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle5'));

    const themeColor = {
        bar: '#2f90b9',
        remain: 'transprant',
        text: '#f1f1f1'
    };
    const progress = 86;
    option = {
        grid: { top: 0, left: 0, right: 0, bottom: 0 },
        title: [{
            text: progress + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: '10',
                color: themeColor.text,
                fontFamily: 'Oswald',
                foontWeight: '300',
            },
        }],
        polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: progress > 0 ? themeColor.remain : 'red',
            },
            data: [progress],
            coordinateSystem: 'polar',
            itemStyle: {
                color: themeColor.bar,
            }
        },]
    };
    myChart.setOption(option);
})();
// circle 6
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circle6'));

    const themeColor = {
        bar: '#68b88e',
        remain: 'transprant',
        text: '#f1f1f1'
    };
    const progress = 55;
    option = {
        grid: { top: 0, left: 0, right: 0, bottom: 0 },
        title: [{
            text: progress + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: '10',
                color: themeColor.text,
                fontFamily: 'Oswald',
                foontWeight: '300',
            },
        }],
        polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: progress > 0 ? themeColor.remain : 'red',
            },
            data: [progress],
            coordinateSystem: 'polar',
            itemStyle: {
                color: themeColor.bar,
            }
        },]
    };
    myChart.setOption(option);
})();

