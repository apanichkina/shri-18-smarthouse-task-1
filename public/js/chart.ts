import { Chart } from 'chart.js';

const chartBackgroundColor = {
  water: 'rgba(54, 162, 235, 0.2)',
  electricity: 'rgba(255, 206, 86, 0.2)',
  gas: 'rgba(255, 159, 64, 0.2)',
  default: 'rgba(255,99,132, 0.2)',
};

const chartBorderColor = {
  water: 'rgba(54, 162, 235, 1)',
  electricity: 'rgba(255, 206, 86, 1)',
  gas: 'rgba(255, 159, 64, 1)',
  default: 'rgba(255,99,132, 1)',
};

function prepareDataForChart(chartData) {
  const defaultBackgroundColor = chartBackgroundColor.default;
  const defaultBorderColor = chartBorderColor.default;

  const result = [];

  for (const item of chartData) {
    Object.keys(item).forEach((key) => {
      const localResult = {
        label: key,
        data: [],
        borderWidth: 1,
        borderColor: defaultBorderColor,
        backgroundColor: defaultBackgroundColor,
      };

      for (const param of item[key]) {
        localResult.backgroundColor = chartBackgroundColor[key] || defaultBackgroundColor;
        localResult.borderColor = chartBorderColor[key] || defaultBorderColor;
        localResult.data.push({ x: new Date(Number(param[0])), y: param[1] });
      }
      result.push(localResult);
    });
  }

  return result;
}

export default function drawChart(container, data) {
  const parsedData = prepareDataForChart(data);

  if (!parsedData.length || !container) {
    return null;
  }

  const ctx = container.getContext('2d');

  // TODO destroy chart
  return new Chart(ctx, {
    type: 'line',
    data: {
      datasets: parsedData,
    },
    options: {
      responsive: true,

      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              minute: 'h:mm',
            },
          },
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}
