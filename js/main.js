var allImages = Array.from(document.querySelectorAll('img'))
var lightcontainer = document.querySelector(".lightcontainer")
var box = document.querySelector('.box-item')
var leftBtn = document.querySelector(".fa-circle-left")
var rightBtn = document.querySelector(".fa-circle-right")
var closeBtn = document.querySelector(".fa-circle-xmark")
var currentIndex=0


for  (i=0 ; i<allImages.length ; i++) {
    allImages[i].addEventListener("click" , function(e){
        
        currentIndex = allImages.indexOf(e.target)
        lightcontainer.classList.remove('d-none')
        lightcontainer.classList.add('d-flex')
        // console.log(e.target.getAttribute('src'))
        box.style.backgroundImage= `url(${e.target.getAttribute('src')})`
        
    })
}


 rightBtn.addEventListener("click" , getNext)
 leftBtn.addEventListener("click" , getPrev)
 closeBtn.addEventListener("click" , hideLayer)
 

 window.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.key === 'ArrowLeft')
        getPrev()
    else if (e.key == 'ArrowRight')
        getNext()
    else if (e.key =="Escape")
        hideLayer()
})



 function hideLayer() {
    
    lightcontainer.classList.add('d-none')
    
 }

 function getNext(){
   currentIndex++;

   if(currentIndex==allImages.length){
    currentIndex=0
   }
//    
   box.style.backgroundImage= `url(${allImages[currentIndex].getAttribute('src')})`

 }
 function getPrev(){
   

   if(currentIndex==0){
        currentIndex=5
        
   }
   else if (currentIndex>0) {
    currentIndex--;
   }else {
    currentIndex=0
   }
   box.style.backgroundImage= `url(${allImages[currentIndex].getAttribute('src')})`
  
   

 }

