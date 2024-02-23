let hours=document.querySelector('.input-1')
let minutes=document.querySelector('.input-2')
let seconds=document.querySelector('.input-3')

let timer1=document.querySelector('.timer-1')
let timer2=document.querySelector('.timer-2')

let second=0

let button=document.querySelector('.btn')
// console.log(buttons)
let reapet;
button.addEventListener('click',()=>{
    // console.log('hello')
    reapet=setInterval(() => {
        second++
        // console.log('second',second)
        if(second<=20){
            timer1.innerText = `Time left: 0h 0m ${second}s`
            let btn1=document.createElement('button')
            btn1.className=`timer`
            timer1.append(btn1)
            btn1.innerText=`Stop Timer`
            console.log(timer1)

            let tbtn=document.querySelector('.timer')
            tbtn.addEventListener('click',()=>{
                second=0
                timer1.style.display = 'none';
                clearInterval(reapet)
            })
        
        }
     


    },1000)

   

  
})

