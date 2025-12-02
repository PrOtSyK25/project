document.addEventListener('DOMContentLoaded', () => {
    // --- Логіка перемикання вкладок ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetTabId = link.getAttribute('data-tab');

            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            link.classList.add('active');

            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // --- Логіка модального вікна ---
    const modal = document.getElementById('reviewModal');
    const openBtn = document.getElementById('openReviewModal');
    const closeBtn = document.querySelector('.modal-content .close-button');
    const reviewForm = document.getElementById('reviewForm');

    function closeModal() {
        modal.classList.remove('open');
    }

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('open');
            // Встановлення назви події
            // document.getElementById('eventTitle').textContent = 'Назва події 1'; 
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Обробка збереження відгуку
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const rating = reviewForm.elements.rating.value;
            const comment = reviewForm.elements.comment.value;

            console.log(`Відгук збережено! Оцінка: ${rating}, Коментар: "${comment}"`);
            
            alert("Ваш відгук успішно надіслано!");
            reviewForm.reset(); 
            closeModal(); 
        });
    }
});