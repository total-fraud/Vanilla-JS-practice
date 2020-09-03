const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

   const now = new Date();
   const seconds = now.getSeconds();
   const minutes = now.getMinutes();
   const hours = now.getHours();

   function degrees (time) {
    return ((time / 60) * 360) + 90;
   };

   function tick() {
    const audio = document.querySelector('.tick');
    audio.currentTime = 0;
    audio.play();
   }

   secondHand.style.transform = `rotate(${degrees(seconds)}deg)`;
   minuteHand.style.transform = `rotate(${degrees(minutes)}deg)`;
   hourHand.style.transform = `rotate(${0.5 * (hours * 60 + minutes) + 90}deg)`;

   [secondHand, minuteHand, hourHand].forEach(el => el.style.transition = (seconds === 0) ? 'none' : null );
   tick();
   
   console.log(now);
}

setInterval(setDate, 1000);