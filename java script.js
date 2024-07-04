function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        var visitor = {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            gender: document.getElementById('gender').value,
            date: document.getElementById('date').value,
            destination: Array.from(document.getElementById('destination').selectedOptions).map(option => option.value)
        };

        addVisitorToTable(visitor);

        document.getElementById('registrationForm').reset();
    }
}
