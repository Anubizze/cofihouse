document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const title = product.querySelector('.product-title').textContent;
        const price = product.querySelector('.product-price').textContent;
        
        // Создаем всплывающее уведомление
        const notification = document.createElement('div');
        notification.classList.add('cart-notification');
        notification.textContent = `Товар "${title}" за ${price} добавлен в корзину!`;
        
        // Добавляем уведомление на страницу
        document.body.appendChild(notification);
        
        // Показываем уведомление
        setTimeout(() => {
            notification.classList.add('show');
        }, 10); // Маленькая задержка, чтобы анимация сработала

        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
            notification.classList.add('hide');
            // Удаляем уведомление из DOM после анимации
            setTimeout(() => {
                notification.remove();
            }, 500); // Удаляем после завершения анимации
        }, 3000);
    });
});

        // Функция обновления корзины
function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.title} — ${item.price} ₸`;

        // Добавляем кнопку удаления
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete-item');
        deleteButton.addEventListener('click', () => removeItem(index));

        li.appendChild(deleteButton);
        cartItemsList.appendChild(li);
    });
    cartTotal.textContent = `${total} ₸`;
    cartCount.textContent = cart.length;

    
    const cartModalContent = document.querySelector('.cart-modal');
    cartModalContent.style.height = 'auto';  // Сброс высоты для плавного изменения
}
    const cards = document.querySelectorAll('.card');

    const options = {
    threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
        }
    });
    }, options);

    cards.forEach(card => {
    observer.observe(card);
    });
    
    function scrollToCatalogAndOpenModal(event) {
        event.preventDefault(); // Отменяем стандартный переход по якорю
        const catalogSection = document.getElementById('catalog');
        
        // Плавный скролл к каталогу
        catalogSection.scrollIntoView({ behavior: 'smooth' });
        
        // Открываем модальное окно через 800 мс (после завершения скролла)
        setTimeout(() => {
            document.getElementById('contentDialog').showModal();
        }, 800);
    }

    // Анимация для вакансий
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.vacancy-card, .school-container').forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease-out';
                observer.observe(el);
            });
        });
        

        // Добавим плавную прокрутку для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Прокручиваем к соответствующему элементу с плавной анимацией
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.getElementById('addReviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Получение данных из формы
    const name = document.getElementById('name').value.trim();
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();

    // Создание нового отзыва
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-card');

    const stars = '<div class="stars">' + '★'.repeat(rating) + '☆'.repeat(5 - rating) + '</div>';
    const reviewContent = `
        ${stars}
        <p>"${comment}"</p>
        <div class="review-author">
            <i class="fas fa-user"></i> ${name}
        </div>
    `;

    reviewContainer.innerHTML = reviewContent;

    // Добавление отзыва в контейнер отзывов
    document.querySelector('.reviews-container').appendChild(reviewContainer);

    // Очистка формы
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const overlay = document.querySelector('.overlay');
            
            // Открытие/закрытие меню
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                overlay.classList.toggle('active');
                
                // Блокировка скролла при открытом меню
                if (navMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });
            
            // Закрытие меню при клике на оверлей
            overlay.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                this.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            // Закрытие меню при клике на ссылку (для одностраничных приложений)
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
    // Инициализация звезд рейтинга
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('reviewRating');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Загрузка отзывов при загрузке страницы
    loadReviews();
    
    // Обработка формы
    document.getElementById('addReviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addReview();
    });
});

// Загрузка отзывов из localStorage
function loadReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const savedReviews = localStorage.getItem('coffeeShopReviews');
    
    if (savedReviews) {
        const reviews = JSON.parse(savedReviews);
        
        reviews.forEach(review => {
            reviewsContainer.appendChild(createReviewElement(review));
        });
    } else {
        // Примеры отзывов при первом посещении
        const defaultReviews = [
            {
                name: "Алия Н.",
                rating: 5,
                text: "Лучший кофе в городе! Особенно люблю их ванильный латте.",
                date: new Date().toISOString()
            },
            {
                name: "Дамир С.",
                rating: 4,
                text: "Имбирный капучино - это нечто! Персонал очень дружелюбный.",
                date: new Date().toISOString()
            }
        ];
        
        defaultReviews.forEach(review => {
            reviewsContainer.appendChild(createReviewElement(review));
        });
        
        localStorage.setItem('coffeeShopReviews', JSON.stringify(defaultReviews));
    }
}

// Создание элемента отзыва
function createReviewElement(review) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    
    // Создаем звезды рейтинга
    const starsDiv = document.createElement('div');
    starsDiv.className = 'stars';
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = i <= review.rating ? 'fas fa-star' : 'far fa-star';
        starsDiv.appendChild(star);
    }
    
    // Текст отзыва
    const reviewText = document.createElement('p');
    reviewText.textContent = review.text;
    
    // Автор и дата
    const authorDiv = document.createElement('div');
    authorDiv.className = 'review-author';
    
    const date = new Date(review.date);
    const formattedDate = date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    authorDiv.innerHTML = `<i class="fas fa-user"></i> ${review.name} · ${formattedDate}`;
    
    // Собираем все вместе
    reviewCard.appendChild(starsDiv);
    reviewCard.appendChild(reviewText);
    reviewCard.appendChild(authorDiv);
    
    return reviewCard;
}

// Добавление нового отзыва
function addReview() {
    const name = document.getElementById('reviewName').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value);
    const text = document.getElementById('reviewText').value.trim();
    
    if (!name || rating === 0 || !text) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    const newReview = {
        name: name,
        rating: rating,
        text: text,
        date: new Date().toISOString()
    };
    
    // Получаем текущие отзывы
    const savedReviews = localStorage.getItem('coffeeShopReviews');
    const reviews = savedReviews ? JSON.parse(savedReviews) : [];
    
    // Добавляем новый отзыв
    reviews.push(newReview);
    
    // Сохраняем обновленный список
    localStorage.setItem('coffeeShopReviews', JSON.stringify(reviews));
    
    // Добавляем на страницу
    document.getElementById('reviewsContainer').prepend(createReviewElement(newReview));
    
    // Очищаем форму
    document.getElementById('addReviewForm').reset();
    document.querySelectorAll('.rating-stars i').forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
    });
    document.getElementById('reviewRating').value = '0';
    
    // Показываем уведомление
    showNotification('Спасибо за ваш отзыв!');
}

// Показ уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}




