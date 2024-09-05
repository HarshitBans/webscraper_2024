document.addEventListener('DOMContentLoaded', function () {
    // Toggle Pictures
    const toggleButtons = document.querySelectorAll('.toggle-pics');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const picturesList = this.nextElementSibling;
            if (picturesList.style.display === 'none' || !picturesList.style.display) {
                picturesList.style.display = 'block';
                this.textContent = 'v';
            } else {
                picturesList.style.display = 'none';
                this.textContent = '>';
            }
        });
    });

    // Graph Data (Example Placeholder)
    const cityCtx = document.getElementById('cityGraph').getContext('2d');
    const stateCtx = document.getElementById('stateGraph').getContext('2d');

    new Chart(cityCtx, {
        type: 'bar',
        data: {
            labels: ['Area 1', 'Area 2', 'Area 3'],
            datasets: [{
                label: 'City Affected Areas',
                data: [120, 150, 180],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderWidth: 1
            }]
        }
    });

    new Chart(stateCtx, {
        type: 'pie',
        data: {
            labels: ['Region 1', 'Region 2', 'Region 3'],
            datasets: [{
                label: 'State Affected Population',
                data: [300, 400, 500],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
                borderWidth: 1
            }]
        }
    });
});
