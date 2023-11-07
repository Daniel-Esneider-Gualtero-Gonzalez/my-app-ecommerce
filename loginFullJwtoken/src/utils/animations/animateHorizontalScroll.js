export function animateHorizontalScroll(elementContainer,isScrollingRight) {
    
    if(!elementContainer) return null
  
    // if(!elementContainer) return null
    console.log("ejecutando animacion de scroll")
    
    if (isScrollingRight) {
          
    elementContainer.scrollLeft += 0.50; // Ajusta la velocidad de scroll
      if (elementContainer.scrollLeft >= elementContainer.scrollWidth - elementContainer.clientWidth) {
        isScrollingRight = false;
      }
    } else {
        elementContainer.scrollLeft -= 0.50; // Ajusta la velocidad de retroceso
      if (elementContainer.scrollLeft <= 0) {
        isScrollingRight = true;
      }
    }

    const idAnimationFrame = requestAnimationFrame(animateHorizontalScroll)
    const clearAnimation = ()=> cancelAnimationFrame(idAnimationFrame)
    return clearAnimation
    
  }