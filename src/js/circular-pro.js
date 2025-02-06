(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('circularPro'));

    data = [{
        name: "基础设施",
        value: 267
    },
    {
        name: "能源资源",
        value: 90
    },
    {
        name: "现代服务",
        value: 32
    },
    {
        name: "新兴产业",
        value: 230
    }, {
        name: '其它',
        value: 32
    }
    ];

    arrName = getArrayValue(data, "name");
    arrValue = getArrayValue(data, "value");
    sumValue = eval(arrValue.join('+'));

    // ===============
    console.log(sumValue);
    // ===============

    objData = array2obj(data, "name");

    // ===============
    console.log(objData);
    // ===============

    optionData = getData(data)
    // ===============
    console.log(optionData);
    // ===============

    function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function (t) {
                res.push(t[key]);
            });
        }
        return res;
    }


    function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }


    function getData(data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: '',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],

                center: ["30%", "55%"],
                label: {
                    show: false
                },

                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                    roundCap: true,
                    borderRadius: 15
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 3.6,
                    itemStyle: {
                        color: "rgb(3, 31, 62)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 2.8,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });


            res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
        }
        return res;
    }


    option = {
        backgroundColor: '#000',
        legend: {
            show: true,
            icon: "circle",
            top: '20%',
            bottom: '53%',
            left: "30%",
            data: arrName,
            width: 40,
            padding: [0, 16],
            itemGap: 20,
            formatter: function (name) {
                // return "{title|" + name + "}{value|" + (objData[name].value) + "}  {title|项}"
                return "{title|" + name + "}{value|" + ((objData[name].value) / sumValue * 100).toFixed() + '%' + "} {num|" + objData[name].value + "}{title|项}"
            },

            textStyle: {
                rich: {
                    title: {
                        fontSize: 16,
                        lineHeight: 16,
                        color: "#f1f1f1"
                    },
                    value: {
                        fontSize: 18,
                        lineHeight: 20,
                        color: "#fff"
                    },
                    num: {
                        fontSize: 18,
                        lineHeight: 20,
                        color: "#fff"
                    }
                }
            },
        },

        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: ['rgb(50, 144, 253)', 'rgb(135, 241, 203)', 'rgb(254, 250, 42)', 'rgb(115, 244, 250)', 'rgb(241, 155, 26)'],
        xAxis: [{
            show: false
        }],
        series: optionData.series
    };
    myChart.setOption(option);


})()