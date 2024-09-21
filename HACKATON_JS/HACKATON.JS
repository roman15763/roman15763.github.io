document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо посилання на елементи
    const click_tekst = document.getElementById("click_tekst");
    const pointsElement = document.getElementById("points");
    const HACKATON = document.getElementById("HACKATON");
    const all_bor_1 = document.getElementById("all_bor_1");
    const all_bor_2 = document.getElementById("all_bor_2");
    const all_bor_3 = document.getElementById("all_bor_3");
    const all_bor_4 = document.getElementById("all_bor_4");
    
    // Відновлення прогресу з localStorage, якщо він є
    let currentPoints = parseInt(localStorage.getItem("points"), 10) || 0;
    pointsElement.textContent = currentPoints;

    // Додаємо подію на кнопку
    document.getElementById("click-btn").addEventListener("click", function() {
        // Збільшуємо кількість поінтів
        currentPoints += 1;
        pointsElement.textContent = currentPoints;

        // Зберігаємо прогрес у localStorage
        localStorage.setItem("points", currentPoints);

        // Змінюємо колір тексту на червоний
        click_tekst.style.color = "red";
        pointsElement.style.color = "red";
        HACKATON.style.color = "red";
        all_bor_1.style.color = "red";
        all_bor_2.style.color = "red";
        all_bor_3.style.color = "red";
        all_bor_4.style.color = "red";
        
        // Через 5 секунд повертаємо початковий колір
        setTimeout(function() {
            click_tekst.style.color = "#00ff00";
            pointsElement.style.color = "#00ff00";
            HACKATON.style.color = "#00ff00";
            all_bor_1.style.color = "#00ff00";
            all_bor_2.style.color = "#00ff00";
            all_bor_3.style.color = "#00ff00";
            all_bor_4.style.color = "#00ff00";
        }, 5000); // 5000 мілісекунд = 5 секунд
    });
});
