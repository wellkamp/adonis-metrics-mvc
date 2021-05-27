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
                    label: "Últimas temperaturas da GPU CORE",
                    data: temperatures,
                    fill: false,
                    borderColor: "#9400D3",
                    tension: 0.1,
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
                    label: "Temperatura maior que 50° nos últimos 10 dias",
                    data: gpuMoreThenFifty,
                    fill: false,
                    borderColor: "#9400D3",
                    tension: 0.1,
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
