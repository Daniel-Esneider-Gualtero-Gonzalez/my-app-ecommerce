

export function animationBurbuja(element) {
    const propsAnimate = ['borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius']
    let idCleanAnimation = []
    const options = {
        iterations: Infinity,
        duration: 0,     // Duración de la animación en milisegundos.
        easing: "ease-out", // Función de temporización.
    }
    

    for (let i = 0; i < 4; i++) {
        //  numero ramdom entre 30 y 50
        const randomPorcent = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

        const randomDuration = Math.floor(Math.random() * (9 - 2 + 1)) + 3
        
        options.duration =  Number(`${randomDuration}000`)  //`${randomDuration}000`
        
        
        const keyFrame = [{ [propsAnimate[i]] : '0'} ,  {[propsAnimate[i]] :  `${randomPorcent}%`} , { [propsAnimate[i]] : '0'} ,]

        //  console.log(`${propsAnimate[i]}` , keyFrame, options)
        idCleanAnimation = [...idCleanAnimation,element.animate(keyFrame,options)]
        

        
    }

    const cleanAnimations = ()=>{
        for (let i = 0; i < idCleanAnimation.length; i++) {
            
            idCleanAnimation[i].cancel()
            
        }
    }

    return {cleanAnimations}

}

