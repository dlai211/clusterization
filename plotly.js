document.addEventListener("DOMContentLoaded", function () {
    const trace1 = {
        x: [-28.01, -6.76, 6.38, 36.73, 41.94, 42.09],
        y: [0, 0, 0, 0, 0, 0],
        mode: "markers+text",
        type: "scatter",
        name: "Traccc",
        text: ["-28.010", "-6.757", "6.380", "36.731", "41.940", "42.091"],
        textposition: "top right",
        marker: { color: "steelblue" },
    };

    const trace2 = {
        x: [-27.93, -6.72, 6.46, 36.77, 42.10],
        y: [0, 0, 0, 0, 0],
        mode: "markers+text",
        type: "scatter",
        name: "Athena",
        text: ["-27.931", "-6.715", "6.460", "36.773", "42.096"],
        textposition: "bottom left",
        marker: { color: "orange" },
    };

    const layout = {
        title: "Detray_ID: 1599062399503472383",
        xaxis: { title: "Local X Position (mm)" },
        yaxis: { visible: false },
        showlegend: true,
        dragmode: "zoom",
        height: 230,
        width: 1200,
    };

    Plotly.newPlot("plot-container", [trace1, trace2], layout);
});
