document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.getElementById('filterToggle');
    const filterContent = document.getElementById('filterContent');

    if (filterToggle && filterContent) {
        // Додаємо обробник подій по кліку на заголовок "Фільтри"
        filterToggle.addEventListener('click', () => {
            // Перемикаємо клас 'visible' для плавного розкриття/згортання
            filterContent.classList.toggle('visible'); 
        });
    }
});