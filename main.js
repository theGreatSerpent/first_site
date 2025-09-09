// Основная логика приложения
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылку на кнопку
    const demoBtn = document.getElementById('demoBtn');
    
    // Добавляем обработчик события
    demoBtn.addEventListener('click', function() {
        // Создаем уведомление
        const notification = document.createElement('div');
        notification.textContent = 'Вы успешно соединили HTML, CSS и JavaScript!';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#6e8efb';
        notification.style.color = 'white';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        
        // Добавляем уведомление на страницу
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 3 секунды
        setTimeout(function() {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(function() {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
        
        // Добавляем визуальный эффект для кнопки
        demoBtn.style.transform = 'scale(0.95)';
        setTimeout(function() {
            demoBtn.style.transform = '';
        }, 300);
    });
    
    // Добавляем дополнительные эффекты при наведении на карточки
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});