

export function animationBurbuja(element,maxBorder = 10,minBorder=8) {
    const propsAnimate = ['borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius']
    let idAnimation = null
    const options = {
        iterations: Infinity,
        duration: 3000, 
        direction: 'alternate',    // Duración de la animación en milisegundos.
        easing: "linear", // Función de temporización.
    }

    const genObjet = (nameProperty,value)=>{
        const objet = {}
        objet[nameProperty] = value
        return objet
    }
    
    const genRandomNum = ()=>{
        return  Math.floor(Math.random() * (maxBorder - minBorder)) + minBorder;
    }
    
    let keyFrames = []
    for (let i = 0; i < 3; i++) {
        // propiedades para redondear
        const [topLeft,topRight,bottomRight,bottomLeft] = propsAnimate

        const currentKeyframe = {...genObjet(topLeft,`${genRandomNum() + "%"}`), ...genObjet(topRight,`${genRandomNum() + "%"}`) , ...genObjet(bottomRight,`${genRandomNum() + "%"}`) , ...genObjet(bottomLeft,`${genRandomNum() + "%"}`)}
        
        keyFrames = [ ...keyFrames,currentKeyframe ]

        //  console.log(`${propsAnimate[i]}` , keyFrame, options)
        
        
    }

    idAnimation = element.animate(keyFrames,options)
    const cleanAnimation = ()=>{
        idAnimation.cancel()
    }

    return {cleanAnimation}

}

