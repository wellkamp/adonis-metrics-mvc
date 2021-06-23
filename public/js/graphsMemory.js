if (!memoryValues.lenght) {
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
                    color: "rgba(255,255,255, 0.5)",
                    backgroundColor: "rgba(255,255,255, 0.5)",
                    borderWidth: 1,
                    borderColor: "#9400D3",
                    tension: 0.1,
                },
            ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: "rgba(255,255,255, 0.5)",
                },
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255,255,255, 0.5)",
                            beginAtZero: true,
                            max: 100,
                            min: 0,
                        },
                        gridLines: {
                            color: "rgba(255,255,255, 0.5)",
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255,255,255, 0.5)",
                        },
                        gridLines: {
                            color: "rgba(255,255,255, 0.5)",
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
                    label: "Temperaturas maiores que 50 nos últimos 10 dias",
                    data: temps,
                    fill: false,
                    color: "rgba(255,255,255, 0.5)",
                    backgroundColor: "rgba(255,255,255, 0.5)",
                    borderWidth: 1,
                    borderColor: "#9400D3",
                    tension: 0.1,
                },
            ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: "rgba(255,255,255, 0.5)",
                },
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255,255,255, 0.5)",
                            beginAtZero: true,
                            max: 100,
                            min: 0,
                        },
                        gridLines: {
                            color: "rgba(255,255,255, 0.5)",
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255,255,255, 0.5)",
                        },
                        gridLines: {
                            color: "rgba(255,255,255, 0.5)",
                        },
                    },
                ],
            },
        },
    });
}
