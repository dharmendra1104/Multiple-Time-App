let hours=document.querySelector('.input-1')
let minutes=document.querySelector('.input-2')
let seconds = document.querySelector('.input-3')

let timer1 = document.querySelector('.timer-1')
// let timer2=document.querySelector('.timer-2')

let second = 0
let button = document.querySelector('.btn')
let repeat;

button.addEventListener('click', () => {
    let mvalue = minutes.value;
    let hvalue = hours.value;
    let svalue = seconds.value;
    let totalSeconds = hvalue * 3600 + mvalue * 60 + svalue;

    timer1.style.display = 'block'; // Show the timer initially
    repeat = setInterval(() => {
        // svalue--;
        totalSeconds--
        // if (svalue >= 0) {
            if (totalSeconds >= 0) {
            // timer1.innerText = `Time left: 0h 0m ${svalue}`;
            let h = Math.floor(totalSeconds / 3600);
            let m = Math.floor((totalSeconds % 3600) / 60);
            let s = totalSeconds % 60;

            timer1.innerText = `Time left: ${h}h ${m}m ${s}s`;

            let btn1 = document.createElement('button');
            btn1.className = 'timer';
            timer1.appendChild(btn1);
            btn1.innerText = 'Stop Timer';

            btn1.addEventListener('click', () => {
                second = 0;
                clearInterval(repeat);
                timer1.style.display = 'none';
            });
        } else {
            clearInterval(repeat);
            timer1.style.display = 'none';
        }
    }, 1000);

});

hours.addEventListener('input', () => {
    let hValue = (hours.value);
    if (hValue == 0) {
        clearInterval(repeat);
        timer1.style.display = 'none';
    }
});

minutes.addEventListener('input', () => {
    let mValue = (minutes.value);
    if (mValue == 0) {
        clearInterval(repeat);
        timer1.style.display = 'none';
    }
});

seconds.addEventListener('input', () => {
    let sValue = (seconds.value);
    if (sValue == 0) {
        clearInterval(repeat);
        timer1.style.display = 'none';
    }
});






