document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const bodyElement = document.body;
    const headerElement = document.querySelector('header');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            bodyElement.classList.add('dark-mode');
            headerElement.classList.add('dark-mode');
        } else {
            bodyElement.classList.remove('dark-mode');
            headerElement.classList.remove('dark-mode');
        }
    });
});
