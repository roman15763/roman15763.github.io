<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо дані з форми
    $wallet = htmlspecialchars(trim($_POST['wallet']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Перевірка чи поле не порожнє
    if (!empty($wallet) && !empty($message)) {
        // Тут можна зберігати дані в базі або відправити на email
        
        // Наприклад, відправлення даних на email
        $to = "your-email@example.com"; // Замість цього використовуйте свою пошту
        $subject = "Повідомлення від користувача з криптогаманцем";
        $body = "Криптогаманець: $wallet\n\nПовідомлення:\n$message";
        $headers = "From: no-reply@yourwebsite.com";

        if (mail($to, $subject, $body, $headers)) {
            echo "Повідомлення успішно надіслане!";
        } else {
            echo "Помилка при відправці повідомлення.";
        }
    } else {
        echo "Всі поля повинні бути заповнені!";
    }
} else {
    echo "Неправильний метод запиту.";
}
?>
