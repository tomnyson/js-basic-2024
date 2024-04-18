document.addEventListener("DOMContentLoaded", (event) => {
    // code trong nay


    /**
     * playButton.addEventListener('click', () => {
 video.play();
});
     */
    const btnStart = document.getElementById("btn_start");
    btnStart.addEventListener("click", () => {
        function displayTime(time) {
            const elTime = document.getElementById("time");
            // var audio = document.getElementById("myAudio"); 
           
            function updateTime() {
              console.log(time);
              elTime.innerHTML = "demo " + time;
          
              if (time > 0) {
                time--;
              } else {
             
                clearInterval(interval);
                var audio = new Audio('https://nhacchuongviet.com/wp-content/uploads/2023/03/Day-Di-Hai-Le-Duong-Bao-Lam.mp3');
                audio.play().catch((error => console.error(error)));
              }
            }
          
            const interval = setInterval(updateTime, 1000); 
          }
    
          displayTime(5) 
    })
   



  });