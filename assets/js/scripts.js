document.addEventListener("DOMContentLoaded", () => {
    console.log("Vile.so website loaded successfully.");
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease-in-out';

    window.onload = () => {
        document.body.style.opacity = 1;
    };

    const botOrderButton = document.querySelector('.order-button.bot');
    const apiOrderButton = document.querySelector('.order-button.api');

    if (botOrderButton) {
        botOrderButton.addEventListener('click', () => {
            window.location.href = 'https://discord.gg/vileapi';
        });
    }

    if (apiOrderButton) {
        apiOrderButton.addEventListener('click', () => {
            window.location.href = 'https://discord.gg/vileapi';
        });
    }
});
