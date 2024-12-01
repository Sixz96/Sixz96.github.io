document.addEventListener('DOMContentLoaded', function() {
    const investmentForm = document.getElementById('investmentForm');
    const investmentTable = document.getElementById('investmentTable').getElementsByTagName('tbody')[0];

    investmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const investmentName = document.getElementById('investmentName').value;
        const investmentAmount = document.getElementById('investmentAmount').value;
        const investmentDate = document.getElementById('investmentDate').value;

        // Agregar fila a la tabla
        const newRow = investmentTable.insertRow();
        newRow.insertCell(0).innerHTML = investmentName;
        newRow.insertCell(1).innerHTML = investmentAmount;
        newRow.insertCell(2).innerHTML = investmentDate;

        // Limpiar el formulario
        investmentForm.reset();
    });
});
