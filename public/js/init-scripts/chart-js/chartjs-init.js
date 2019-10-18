( function ( $ ) {
    "use strict";


    //pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 300;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 600, 40, 49 ],
                backgroundColor: [
                                    "rgba(12, 100, 12, 0.6) ",
                                    "rgba(227, 117, 112, 0.6) " ,
                                    "rgba(127, 37, 72, 0.3) " ,
                                ],
                hoverBackgroundColor: [
                                    "rgba(227, 127, 72, 1)",
                                    "rgba(227, 117, 72, 1)",
                                    "rgba(227, 117, 72, 1)",
                                ]

                            } ],
            labels: [
                            "Semáforos funcionando",
                            "Semáforos dañados",
                            "Semáforos que requieren atención",

                        ]
        },
        options: {
            responsive: true
        }
    } );

} )( jQuery );



