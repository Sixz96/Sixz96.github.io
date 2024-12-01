document.addEventListener('DOMContentLoaded', function() {
    const goalForm = document.getElementById('goalForm');
    const goalTable = document.getElementById('goalTable').getElementsByTagName('tbody')[0];

    goalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const goalName = document.getElementById('goalName').value;
        const goalAmount = document.getElementById('goalAmount').value;
        const goalDate = document.getElementById('goalDate').value;

        // Agregar fila a la tabla
        const newRow = goalTable.insertRow();
        newRow.insertCell(0).innerHTML = goalName;
        newRow.insertCell(1).innerHTML = goalAmount;
        newRow.insertCell(2).innerHTML = goalDate;

        // Limpiar el formulario
        goalForm.reset();
    });
});
