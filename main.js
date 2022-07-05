let heart = document.querySelector(".heart");
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
     
console.dir(heart);
      let n=1;
      let status = false;
      heart.onclick = () =>{
          alert("爱你"+n+"遍")
          n=n+1
        }  
     start.onclick = () =>{
        status = true;
        heart.style.animation = "heart 0.5s infinite alternate"
     }
     stop.onclick = () =>{
         status = false;
         heart.style.animation = "stop 0.5s infinite alternate"
     }
