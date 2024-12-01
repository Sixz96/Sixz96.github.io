document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('reportForm');
    const reportOutput = document.getElementById('reportOutput');

    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const reportType = document.getElementById('reportType').value;

        // Lógica para generar el informe
        reportOutput.innerHTML = `Informe ${reportType} generado.`;
    });
});

