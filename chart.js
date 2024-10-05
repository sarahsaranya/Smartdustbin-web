// Get the canvas element
var binChart = document.getElementById('binChart');

// Create the chart using Chart.js
var chart = new Chart(binChart, {
  type: 'pie',
  data: {
    labels: ['Empty', 'Filled'],
    datasets: [{
      data: [40, 60], // Example data, replace with your actual bin levels
      backgroundColor: [
        'pink', // Color for the 'Empty' section
        'orange' // Color for the 'Filled' section
      ],
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
  }
});

  
