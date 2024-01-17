// Chart.js configuration for mixed chart
const ctx = document.getElementById("dailyCasesChart").getContext("2d");
const data = {
  labels: [
    "Dec 1",
    "Dec 2",
    "Dec 3",
    "Dec 4",
    "Dec 5",
    "Dec 6",
    "Dec 7",
    "Dec 8",
    "Dec 9",
    "Dec 10",
    "Dec 11",
    "Dec 12",
    "Dec 13",
    "Dec 14",
  ],
  datasets: [
    {
      type: "line",
      label: "Daily Cases(past 2 weeks)",
      data: [
        1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103,
      ],
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      fill: false,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

new Chart(ctx, config);
