document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо всі посилання меню
    const tabLinks = document.querySelectorAll('.tab-link');
    // Отримуємо всі блоки контенту
    const tabContents = document.querySelectorAll('.tab-content');

    // Налаштування початкового стану (Статистика - активна)
    const initialActiveLink = document.querySelector('.tab-link.active');
    if (initialActiveLink) {
        const defaultContentId = initialActiveLink.getAttribute('data-tab');
        const defaultContent = document.getElementById(defaultContentId);
        if (defaultContent) {
            defaultContent.classList.add('active');
        }
    }


    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetTabId = link.getAttribute('data-tab');

            // 1. Видаляємо клас 'active' з усіх посилань і контенту
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. Додаємо клас 'active' до обраного посилання
            link.classList.add('active');

            // 3. Додаємо клас 'active' до відповідного контенту
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Обробка форми 'Створити подію'
    const createForm = document.querySelector('.create-event-form');
    if (createForm) {
        createForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Форма створення події відправлена!');
            alert('Подія успішно створена (імітація)');
            createForm.reset();
        });
    }
    
    // ----------------------------------------------------
    // --- Логіка модального вікна Заявок (ФІКС) ---
    // ----------------------------------------------------
    const appModal = document.getElementById('applicationsModal');
    // Кнопка "Керувати"
    const openAppBtn = document.getElementById('openManagerModal'); 
    const closeAppBtn = document.querySelector('.modal-content-applications .close-button-applications');
    
    function openAppModal() {
        if (appModal) {
            appModal.classList.add('open');
        }
    }

    function closeAppModal() {
        if (appModal) {
            appModal.classList.remove('open');
        }
    }

    // Прив'язка кліку до кнопки "Керувати"
    if (openAppBtn) {
        openAppBtn.addEventListener('click', openAppModal);
    } 

    if (closeAppBtn) {
        closeAppBtn.addEventListener('click', closeAppModal);
    }
    
    // Закриття по кліку за межами вікна
    window.addEventListener('click', (event) => {
        if (event.target === appModal) {
            closeAppModal();
        }
    });
});