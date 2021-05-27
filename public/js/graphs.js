if (!gpuValues.lenght) {
    var ctx = $("#lastTen");
    var temperatures = gpuValues;
    var hours = hourAt;

    var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: hours,
            datasets: [
                {
                    label: "Últimos registros da temperatura",
                    data: temperatures,
                    fill: false,
                    backgroundColor: ["rgba(0, 0, 0)"],
                    borderColor: ["rgb(0, 0, 0)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            min: 0,
                        },
                    },
                ],
            },
        },
    });

    var ctx2 = $("#fiftyGraph");
    var temps = gpuMoreThenFifty;
    var h = hourAtFifty;

    var myLineChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: h,
            datasets: [
                {
                    label: "Temps da GPU CORE > 50 nos últimos 10 dias",
                    data: temps,
                    fill: false,
                    backgroundColor: ["rgba(0, 0, 0)"],
                    borderColor: ["rgb(0, 0, 0)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            min: 0,
                        },
                    },
                ],
            },
        },
    });
}
