var myChart = echarts.init(document.getElementById('change'));

let xData=['2000','2005','2010','2015','2020'],
    yData=['6','9','8','8','7'];


  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip : {
            formatter: function(params, ticket, callback) {
            console.log(params);
            return "排名" + "<br />" + 
            params.name + "：" + params.value;
        },
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
      legend: {
        data:['H(X)']
      },
      xAxis: {
        data:xData
      },
      yAxis: {},
      series: [{
        type:'line',
        data:yData
      }]
  };
  myChart.setOption(option); 
