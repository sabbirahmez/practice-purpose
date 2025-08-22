
   let menu = document.querySelector("#menu-icon");
   let menu2 = document.querySelector("#menu-icon-2");
   let slidbar = document.querySelector("#slidbar");
  let main = document.querySelector("main")
  let ul = document.querySelector(".menu ul")
 let turn = true;
 let turn2 = true;
   menu.addEventListener("click",()=>{

      if(turn){
        slidbar.style.right ="0%"
        turn = false;
      }else{
       slidbar.style.right ="-65%"
       turn = true;
      }

   })
   menu2.addEventListener("click",()=>{

      if(turn){
        ul.style.top ="120px"
        turn = false;
      }else{
       ul.style.top ="-500%"
       turn = true;
      }

   })
 
 
 

  
