$(function() {
    $('.left-menu li').click(function(){
        $('.left-menu li').removeClass()
        $(this).addClass('active');
        $('.triangle').css('display','none')
        $(this).find('.triangle').css('display','block');
    });
    
    var ctx = $("#LineChart");
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
            label: 'Online',
            data: [60, 50, 30, 40, 60, 44],
            backgroundColor: [
                'rgba(52, 63, 75, 0.1)'
                
            ],
            borderColor: [
                'rgba(52, 63, 75, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
    }
});
    var ctx2 = $("#LineChart2");
    var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct","Nov"],
        datasets: [{
            label: 'Online',
            data: [300, 400, 200, 400,500,650],
            backgroundColor: [
                'rgba(250, 145, 126, 0.1)'
                
            ],
            borderColor: [
                'rgba(250, 145, 126, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
    }
});
    
var percent1 = $(".hidden1").html(),
    percent2 = $(".hidden2").html(),
    percent3 = $(".hidden3").html();
    
$(".first .line .percent-line").css("width",percent1 + '%');
$(".second .line .percent-line").css("width",percent2 + '%');
$(".last .line .percent-line").css("width",percent3 + '%');    
});
