let heart = document.querySelector(".heart");
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
     
console.dir(heart);
      let n=0;
      let status = false;
      heart.onclick = () =>{
          n=n+1;
          alert("爱你"+n+"遍")
        }  
     start.onclick = () =>{
        status = true;
        heart.style.animation = "heart 0.5s infinite alternate"
     }
     stop.onclick = () =>{
         status = false;
         heart.style.animation = "stop 0.5s infinite alternate"
     }
