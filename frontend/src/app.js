// BAR CHART     
var barChartOptions = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        },
    ],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false,
    },
  },
  colors: [
    '#2e7d32',
    '#2962ff',
    '#d50000',
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct'],
    labels: {
        style: {
            colors: '#f5f7ff',
        },
    },
 },
 yaxis: {
    title: {
        text: '$ (thousands)',
        style: {
            color: '#f5f7ff',
        },
    },
    labels: {
        style: {
            colors: '#f5f7ff',
        },
    },
    fill: {
        opacity: 1
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'bottom',
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return '$' + val + 'thousands'
            },
        }
    }
 },

};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// MIXED-CHART LINE-AREA

      
var areaChartOptions = {
    series: [
        {
            name: 'Purchase Orders',
            data: [31, 40, 45, 28, 51, 42, 109, 80],
        },
        {
            name: 'Sales Orders',
            data: [11, 32, 45, 32, 34, 52, 41, 40]
        },
    ],
    chart: {
        type: 'area',
        background: 'transparent',
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ['#00ab57', '#d50000'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradients: {
            opacityForm: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: 'vertical',
        },
        type: 'gradient',
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
            style: {
                colors: '##f5f7ff',
            },
        },
        show: true,
        position: 'bottom',
    },
    
    yaxis: [
        {
            title: {
                text: 'Purchase Order',
                style: {
                    color: '#f5f7ff',
                },
            },
            title: {
                text: 'Sales Orders',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
    ],    
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
       
    }
};

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

