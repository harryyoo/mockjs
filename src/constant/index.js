/*
* @Author: liujjxi
* @Date:   2017-09-05 22:41:29
* @Last Modified by:   liujjxi
* @Last Modified time: 2017-09-05 22:43:43
*/
function valFomat(val) {
  // body...
  if (val < 10) {
    return val * 2000
  } else if (val < 100) {
    return 20000 + (val - 10) * 200
    return val * 100
  } else if (val < 1000) {
    return 40000 + (val - 100) * 20
  } else if (val < 10000) {
    return 60000 + (val - 1000) * 2
  } else if (val < 100000) {
    return 80000 + (val - 10000) / 5
  }
}

export function barOption() {
  return {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'item',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: [{
      type: 'value',
      splitNumber: '6',
      min: 0,
      max: 100000,
      axisLabel: {
        formatter(value, index) {
          
          if (index === 0) {
            return 0
          } else if (index === 1) {
            return 10
          } else if (index === 2) {
            return 100
          } else if (index === 3) {
            return 1000
          } else if (index === 4) {
            return 10000
          } else if (index === 5) {
            return 100000
          } else {
            return ''
          }
        }
      }
    }],
    series: [{
      type: 'bar',
      barWidth: '30%',
      data: [{
        value: valFomat(1200),
        tooltip: {
          formatter(param) {
            console.log(param)
            return 1200
          }
        }
      }, {
        value: valFomat(8),
        tooltip: {
          formatter(param) {
            return 8
          }
        }
      }, {
        value: valFomat(356),
        tooltip: {
          formatter(param) {
            return 356
          }
        }
      }, {
        value: valFomat(76666),
        tooltip: {
          formatter(param) {
            return 76666
          }
        }
      }, {
        value: valFomat(25647),
        tooltip: {
          formatter(param) {
            return 25647
          }
        }
      }, {
        value: valFomat(55),
        tooltip: {
          formatter(param) {
            return 55
          }
        }
      }, {
        value: valFomat(6375),
        tooltip: {
          formatter(param) {
            return 6375
          }
        }
      }]
    }]
  }
};