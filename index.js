document.addEventListener('DOMContentLoaded', () => {
    const hours = document.querySelector('.box-hours');
    const minutes = document.querySelector('.box-minutes');
    const seconds = document.querySelector('.box-seconds');

    setInterval(() => {
        const date = new Date();
        hours.innerHTML = date.getHours();
        minutes.innerHTML = date.getMinutes();
        confirmSeconds = date.getSeconds();

        if (confirmSeconds < 10) {
            seconds.innerHTML = '0' + confirmSeconds;
        } else {
            seconds.innerHTML = confirmSeconds;
        }
    }, 1000);
});
