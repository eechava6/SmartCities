( function ( $ ) {
    "use strict";


       //line chart
       var ctx = document.getElementById( "lineChart" );
       ctx.height = 150;
       var myChart = new Chart( ctx, {
           type: 'line',
           data: {
               labels: [ "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
               datasets: [
                   {
                       label: "Pm 2.5 segundo semestre",
                       borderColor: "rgba(0,0,0,.09)",
                       borderWidth: "1",
                       backgroundColor: "rgba(255,0,0,0.5)",
                       data: [ 32, 28, 30, 27, 26, 26 ]
                               },
                           ]
           },
           options: {
               responsive: true,
               tooltips: {
                   mode: 'index',
                   intersect: false
               },
               hover: {
                   mode: 'nearest',
                   intersect: true
               },
               scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 40
                    }
                }]
            }
   
           }
       } );

   //line chart
   var ctx = document.getElementById( "lineChart2" );
   ctx.height = 150;
   var myChart = new Chart( ctx, {
       type: 'line',
       data: {
           labels: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio" ],
           datasets: [
               {
                   label: "Pm2.5 primer semestre",
                   borderColor: "rgba(255,0,0,.09)",
                   borderWidth: "1",
                   backgroundColor: "rgba(255,0,0,0.5)",
                   data: [ 18, 23, 22, 21, 26, 30 ]
                           }
                       ]
       },
       options: {
           responsive: true,
           tooltips: {
               mode: 'index',
               intersect: false
           },
           hover: {
               mode: 'nearest',
               intersect: true
           },
           scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 40
                }
            }]
        }

       }
   } );

} )( jQuery );



