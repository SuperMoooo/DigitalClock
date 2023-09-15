document.addEventListener('DOMContentLoaded', () => {
    const hours = document.querySelector('.box-hours');
    const minutes = document.querySelector('.box-minutes');
    const seconds = document.querySelector('.box-seconds');

    setInterval(() => {
        const date = new Date();
        confirmHours = date.getHours();
        confirmMinutes = date.getMinutes();
        confirmSeconds = date.getSeconds();

        if (confirmSeconds < 10) {
            seconds.innerHTML = '0' + confirmSeconds;
        } else {
            seconds.innerHTML = confirmSeconds;
        }

        if (confirmMinutes < 10) {
            minutes.innerHTML = '0' + confirmMinutes;
        } else {
            minutes.innerHTML = confirmMinutes;
        }

        if (confirmHours < 10) {
            hours.innerHTML = '0' + confirmHours;
        } else {
            hours.innerHTML = confirmHours;
        }
    }, 1000);
});
