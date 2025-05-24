import Chart from 'chart.js';

const ctx = document.getElementById('sleepChart').getContext('2d');
const sleepData = {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    datasets: [{
        label: 'Durée de sommeil (heures)',
        data: [7.5, 6.8, 8, 5.5, 7],
        backgroundColor: 'rgba(98, 0, 234, 0.6)',
        borderColor: '#6200ea',
        borderWidth: 2
    }]
};

new Chart(ctx, {
    type: 'line',
    data: sleepData,
    options: { responsive: true }
});
