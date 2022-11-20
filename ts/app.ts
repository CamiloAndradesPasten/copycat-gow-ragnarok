"use strinct";
 
(()=>{ 
    let sliderCounter : number = 0
    let cardVisible : number = 3
    const slider = (document.querySelector('.Slider') as  HTMLDivElement)
    const sliderMove=(document.querySelector('.Slider-move') as HTMLDivElement)
    const sliderCards= slider.querySelectorAll<HTMLDivElement>('.Slider-card')
    const sliderArrow = slider.querySelectorAll<HTMLButtonElement>('.Slider-arrow')
    const sliderLine = slider.querySelectorAll<HTMLButtonElement>('.Slider-line')
    const sliderBtn = slider.querySelectorAll<HTMLButtonElement>('.Slider-btn')
 
   let sliderMoveValue = () :void =>{
    let operacion = 100 / sliderCards.length
    sliderMove.style.transform= `translateX(-${operacion * sliderCounter}%)` 
   } 
    let sliderLineActive = ():void =>{
        sliderLine.forEach((eachLine , i)=>{
            sliderBtn[i].classList.remove('isActive')

        })
        sliderBtn[sliderCounter].classList.add('isActive') 
    }
    let sliderNext = ():void  =>{
        
        sliderCounter++ 

        if (sliderCounter >= sliderCards.length) {
            sliderCounter=0 
        }
        sliderLineActive()
        sliderMoveValue()  
          
    }
    let sliderPrev = ():void  =>{

        
        if (sliderCounter <= 0 ) {
            sliderCounter = sliderCards.length;
        }
        sliderCounter-- 
        sliderLineActive()
        sliderMoveValue() 
       
    }
     
    sliderMoveValue() 
   
    sliderBtn.forEach((eachBtn, i)=>{
        sliderBtn[i].addEventListener('click',() =>{
            sliderCounter = i 
            sliderLineActive() 
            sliderCounter === sliderCards.length -1 && sliderArrow[1].classList.remove('isActive')
            sliderCounter === 1 && sliderArrow[0].classList.remove('isActive') 
            sliderMoveValue() 
        })
    }) 
    sliderArrow[1].addEventListener('pointerdown', sliderNext)
    sliderArrow[0].addEventListener('pointerdown', sliderPrev)
     
    
 

})()
    