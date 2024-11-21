document.addEventListener("DOMContentLoaded", function() {
    // Function to handle navigation and show/hide sections
    window.showSection = function(sectionId) {
        // Hide all sections
        let sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        document.getElementById(sectionId).classList.add('active');
    };

    // Add event listener for form submission
    document.getElementById('contactForm').addEventListener('submit', saveData);

    // Save data function
    function saveData(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name && email && message) {
            let tbody = document.getElementById('data-table-body');
            let newRow = tbody.insertRow();

            let nameCell = newRow.insertCell(0);
            nameCell.innerText = name;

            let emailCell = newRow.insertCell(1);
            emailCell.innerText = email;

            let messageCell = newRow.insertCell(2);
            messageCell.innerText = message;

            // Clear the form
            document.getElementById('contactForm').reset();
        }
    }
});
