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
    sliderArrow[1].addEventListener('pointerdown', sliderNext);
    sliderArrow[0].addEventListener('pointerdown', sliderPrev);



    const introDiv = (document.querySelector('.Intro') as HTMLDivElement);
    const bg = (document.querySelector('.bg') as HTMLImageElement);
    const boy = (document.querySelector('.boy') as HTMLImageElement); 
    const freya = (document.querySelector('.freya') as HTMLImageElement);
    const kratos = (document.querySelector('.kratos') as HTMLImageElement);
    const trineo = (document.querySelector('.trineo') as HTMLImageElement);
    const polvo1 = (document.querySelector('.polvo1') as HTMLImageElement);
    const polvo2 = (document.querySelector('.polvo2') as HTMLImageElement);
    const polvo3 = (document.querySelector('.polvo3') as HTMLImageElement);
    const ruido = (document.querySelector('.ruido') as HTMLImageElement);
    const snow1 = (document.querySelector('.snow1') as HTMLImageElement);
    const snow2 = (document.querySelector('.snow2') as HTMLImageElement);


    let efectoScrollFreya = ( elemento , velocidad ) =>{

        window.addEventListener('scroll', ( e )=>{

            let {scrollY, innerHeight}= window;
            let {offsetTop} = introDiv;
            let {height} = introDiv.getBoundingClientRect();
            let operacion = offsetTop - innerHeight - 1.5; 
            let valorTransform = ((scrollY - operacion) / velocidad) / 10;  
             
            
            let tipoTransform = `translateX(-${valorTransform}%) translateY(${valorTransform}%)`;
            elemento.style.transform = (scrollY >= operacion)  
            ? tipoTransform     
            :  `translate(0px)`     
        } ); 
          
    }
    let efectoScrollBoy = ( elemento , velocidad ) =>{

        window.addEventListener('scroll', ( e )=>{

            let {scrollY, innerHeight}= window;
            let {offsetTop} = introDiv;
            let operacion = offsetTop - innerHeight - 1.5; 
            let valorTransform = ((scrollY - operacion) / velocidad) / 10;   
             

            let tipoTransform = `translateX(-${valorTransform}%) translateY(${valorTransform}%) rotate(-${valorTransform /2}deg) `
 
            elemento.style.transform = (scrollY >= operacion)  
            ? tipoTransform  
            :  `translate(0px)`        
        } ); 
          
    }
    let efectoScrollKratos = ( elemento , velocidad ) =>{

        window.addEventListener('scroll', ( e )=>{

            let {scrollY, innerHeight}= window;
            let {offsetTop} = introDiv;
            let operacion = offsetTop - innerHeight - 1.5; 
            let valorTransform = ((scrollY - operacion) / velocidad) / 10;  
               

            let tipoTransform = `translate(${valorTransform}%)` 
 
            elemento.style.transform = (scrollY >= operacion)  
            ? tipoTransform  
            :  `translate(0px)`          
        } ); 
          
    }

    efectoScrollFreya(freya , 4);  
    efectoScrollBoy(boy , 7); 
    efectoScrollKratos(kratos , 7);  

    







})()
    