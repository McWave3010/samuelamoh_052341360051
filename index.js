
var  i = 0;

images = [];
 
time =3000;

images[0] = './images/image1.jpeg';
images[1] = './images/image2.jpeg';
images[2] = './images/image3.jpeg';
images[3] = './images/image4.jpeg';




function changeme(){
  document.slider.src = images[i];

  if(i < images.length -1){
    i++;
  }else{
    i = 0;
  }
  setTimeout("changeme()", time);

}
window.onload = changeme;
document.addEventListener("DOMContentLoaded", function(){

  document.querySelector("#bars").onclick = function(){
    if (document.querySelector('.dropdown-menu').style.display === 'none' ){
      document.querySelector('.dropdown-menu').style.display = 'flex';
      document.querySelector(".second-section").style.display = 'none';
    }
    else{
      document.querySelector('.dropdown-menu').style.display = 'none';
      document.querySelector(".second-section").style.display = 'flex';
    }
  }


  //local and continental dishes event handlers
  const locally = document.querySelector("#local");
  locally.addEventListener("click", ()=>{
    if (document.querySelector(".local-dishes").style.display === "none"){
      document.querySelector("#changer").innerHTML = "Local";
          document.querySelector(".local-dishes").style.display = "grid";
          document.querySelector(".continental-dishes").style.display = "none";

    }
    else{
      document.querySelector(".local-dishes").style.display = "grid";
    }
  })


  
  const continental = document.querySelector("#continental")
  continental.addEventListener("click",()=>{
    if (document.querySelector(".local-dishes").style.display === "grid"){
          document.querySelector(".continental-dishes").style.display = "grid";
          document.querySelector(".local-dishes").style.display = "none";
          document.querySelector("#changer").innerHTML = "Continental";

       
    }else if (document.querySelector(".local-dishes").style.display === "none"){
      document.querySelector(".continental-dishes").style.display = "grid";
          document.querySelector(".local-dishes").style.display = "none";
          document.querySelector("#changer").innerHTML = "Continental";
    }
    else{
      document.querySelector(".local-dishes").style.display = "grid";

    }
  });
})

