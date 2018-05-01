// Vertical Barchart
var myBarChart = document.getElementById('myChart').getContext('2d');
// Horizontal Barchart
var myBarChart2 = document.getElementById('myChart2').getContext('2d');
// LineChart
var myLineChart = document.getElementById('myChart3').getContext('2d');
// DoughnutChart
var myDoughnutChart = document.getElementById('myChart4').getContext('2d');
// PieChart
var myPieChart = document.getElementById('myChart5').getContext('2d');
// PolarAreaChart
var myPolarAreaChart = document.getElementById('myChart5').getContext('2d');
// RadarChart
var myRadarChart = document.getElementById('myChart6').getContext('2d');





// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#777';


var barChart = new Chart(myChart,{
  type:'bar',
  data:{
    labels:['Walmart', 'State Grid', 'Sinopec Group', 'China National Petroleum', 'Toyota', 'Volkswagen Group', 'Royal Dutch Shell', 'Berkshire Hathaway', 'Apple', 'Exxon Mobil'],
    datasets:[{
    label:'Revenue (USD millions)',
    data:
    [
      485.873,
      315.199,
      267.518,
      262.573,
      254.694,
      240.264,
      240.033,
      223.604,	
      215.639,
      205.004,
    ],
    backgroundColor:[
      'rgba(255, 51, 102, 0.6)',
      'rgba(46, 196, 182, 0.6)',
      'rgba(32, 164, 243, 0.6)',
      'rgba(237, 106, 90, 0.6)',
      'rgba(244, 241, 187, 0.6)',
      'rgba(6, 214, 160, 0.6)',
      'rgba(27, 154, 170, 0.6)',
      'rgba(255, 186, 73, 0.6)',
      'rgba(83, 195, 243, 0.6)',
      'rgba(0, 165, 207, 0.6)'
    ],
    borderWidth:1,
    borderColor:'#474747',
    hoverBorderWidth:2,
    hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Top 10 largest companies by revenue',
      fontSize:25,
    },
    legend:{
      display:false,
    },
    layout:{

    },
    tooltips:{
      enabled:true,
    }
  }
});


var barChart2 = new Chart(myChart2,{
  type:'horizontalBar',
  data:{
    labels:['Walmart', 'State Grid', 'Sinopec Group', 'China National Petroleum', 'Toyota', 'Volkswagen Group', 'Royal Dutch Shell', 'Berkshire Hathaway', 'Apple', 'Exxon Mobil'],
    datasets:[{
    label:'Revenue (USD millions)',
    data:
    [
      485.873,
      315.199,
      267.518,
      262.573,
      254.694,
      240.264,
      240.033,
      223.604,	
      215.639,
      205.004,
    ],
    backgroundColor:[
      'rgba(255, 51, 102, 0.6)',
      'rgba(46, 196, 182, 0.6)',
      'rgba(32, 164, 243, 0.6)',
      'rgba(237, 106, 90, 0.6)',
      'rgba(244, 241, 187, 0.6)',
      'rgba(6, 214, 160, 0.6)',
      'rgba(27, 154, 170, 0.6)',
      'rgba(255, 186, 73, 0.6)',
      'rgba(83, 195, 243, 0.6)',
      'rgba(0, 165, 207, 0.6)',
    ],
    borderWidth:1,
    borderColor:'#474747',
    hoverBorderWidth:2,
    hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Top 10 largest companies by revenue',
      fontSize:25,
    },
    legend:{
      display:false,
    },
    layout:{

    },
    tooltips:{
      enabled:true,
    }
  }
});

var lineChart = new Chart(myChart3,{
  type:'line',
  data:{
    labels:['Walmart', 'State Grid', 'Sinopec Group', 'China National Petroleum', 'Toyota', 'Volkswagen Group', 'Royal Dutch Shell', 'Berkshire Hathaway', 'Apple', 'Exxon Mobil'],
    datasets:[{
    label:'Revenue (USD millions)',
    data:
    [
      485.873,
      315.199,
      267.518,
      262.573,
      254.694,
      240.264,
      240.033,
      223.604,	
      215.639,
      205.004,
    ],
    backgroundColor:[
      'rgba(255, 51, 102, 0.6)',
      'rgba(46, 196, 182, 0.6)',
      'rgba(32, 164, 243, 0.6)',
      'rgba(237, 106, 90, 0.6)',
      'rgba(244, 241, 187, 0.6)',
      'rgba(6, 214, 160, 0.6)',
      'rgba(27, 154, 170, 0.6)',
      'rgba(255, 186, 73, 0.6)',
      'rgba(83, 195, 243, 0.6)',
      'rgba(0, 165, 207, 0.6)',
    ],
    borderWidth:1,
    borderColor:'#474747',
    hoverBorderWidth:2,
    hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Top 10 largest companies by revenue',
      fontSize:25,
    },
    legend:{
      display:false,
    },
    layout:{

    },
    tooltips:{
      enabled:true,
    },
  }
});

var doughnutChart = new Chart(myChart4,{
  type:'doughnut',
  data:{
    labels:['Walmart', 'State Grid', 'Sinopec Group', 'China National Petroleum', 'Toyota', 'Volkswagen Group', 'Royal Dutch Shell', 'Berkshire Hathaway', 'Apple', 'Exxon Mobil'],
    datasets:[{
    label:'Revenue (USD millions)',
    data:
    [
      485.873,
      315.199,
      267.518,
      262.573,
      254.694,
      240.264,
      240.033,
      223.604,	
      215.639,
      205.004,
    ],
    backgroundColor:[
      'rgba(255, 51, 102, 0.6)',
      'rgba(46, 196, 182, 0.6)',
      'rgba(32, 164, 243, 0.6)',
      'rgba(237, 106, 90, 0.6)',
      'rgba(244, 241, 187, 0.6)',
      'rgba(6, 214, 160, 0.6)',
      'rgba(27, 154, 170, 0.6)',
      'rgba(255, 186, 73, 0.6)',
      'rgba(83, 195, 243, 0.6)',
      'rgba(0, 165, 207, 0.6)',
    ],
    borderWidth:1,
    borderColor:'#474747',
    hoverBorderWidth:2,
    hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Top 10 largest companies by revenue',
      fontSize:25,
    },
    legend:{
      display:true,
    },
    layout:{

    },
    tooltips:{
      enabled:true,
    },
    cutoutPercentage:'50',
  }
});

var polarAreaChart = new Chart(myChart5,{
  type:'polarArea',
  data:{
    labels:['Walmart', 'State Grid', 'Sinopec Group', 'China National Petroleum', 'Toyota', 'Volkswagen Group', 'Royal Dutch Shell', 'Berkshire Hathaway', 'Apple', 'Exxon Mobil'],
    datasets:[{
    label:'Revenue (USD millions)',
    data:
    [
      485.873,
      315.199,
      267.518,
      262.573,
      254.694,
      240.264,
      240.033,
      223.604,	
      215.639,
      205.004,
    ],
    backgroundColor:[
      'rgba(255, 51, 102, 0.6)',
      'rgba(46, 196, 182, 0.6)',
      'rgba(32, 164, 243, 0.6)',
      'rgba(237, 106, 90, 0.6)',
      'rgba(244, 241, 187, 0.6)',
      'rgba(6, 214, 160, 0.6)',
      'rgba(27, 154, 170, 0.6)',
      'rgba(255, 186, 73, 0.6)',
      'rgba(83, 195, 243, 0.6)',
      'rgba(0, 165, 207, 0.6)',
    ],
    borderWidth:1,
    borderColor:'#474747',
    hoverBorderWidth:2,
    hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Top 10 largest companies by revenue',
      fontSize:25,
    },
    legend:{
      display:true,
    },
    layout:{

    },
    tooltips:{
      enabled:true,
    },
    cutoutPercentage:'0',
  }
});

var radarChart = new Chart(myChart6,{
  type:'radar',
  data:{
    labels:['Walmart', 'State Grid', 'Sinopec Group', 'China National Petroleum', 'Toyota', 'Volkswagen Group', 'Royal Dutch Shell', 'Berkshire Hathaway', 'Apple', 'Exxon Mobil'],
    datasets:[{
    label:'Revenue (USD millions)',
    data:
    [
      485.873,
      315.199,
      267.518,
      262.573,
      254.694,
      240.264,
      240.033,
      223.604,	
      215.639,
      205.004,
    ],
    backgroundColor:[
      'rgba(255, 51, 102, 0.6)',
      'rgba(46, 196, 182, 0.6)',
      'rgba(32, 164, 243, 0.6)',
      'rgba(237, 106, 90, 0.6)',
      'rgba(244, 241, 187, 0.6)',
      'rgba(6, 214, 160, 0.6)',
      'rgba(27, 154, 170, 0.6)',
      'rgba(255, 186, 73, 0.6)',
      'rgba(83, 195, 243, 0.6)',
      'rgba(0, 165, 207, 0.6)',
    ],
    borderWidth:1,
    borderColor:'#474747',
    hoverBorderWidth:2,
    hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Top 10 largest companies by revenue',
      fontSize:25,
    },
    legend:{
      display:true,
    },
    layout:{

    },
    tooltips:{
      enabled:true,
    },
    cutoutPercentage:'0',
  }
});