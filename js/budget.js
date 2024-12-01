document.addEventListener('DOMContentLoaded', function() {
    const budgetForm = document.getElementById('budgetForm');
    const budgetTable = document.getElementById('budgetTable').getElementsByTagName('tbody')[0];

    budgetForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;

        // Agregar fila a la tabla
        const newRow = budgetTable.insertRow();
        newRow.insertCell(0).innerHTML = category;
        newRow.insertCell(1).innerHTML = amount;

        // Limpiar el formulario
        budgetForm.reset();
    });
});
