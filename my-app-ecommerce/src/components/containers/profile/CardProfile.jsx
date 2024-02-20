
import { animationBurbuja } from "../../../utils/animations/burbuja"

function CardProfile(props) {


  // useEffect(() => {

  //   const { cleanAnimation } = animationBurbuja(refCardProfile.current)
  //   refCardProfile.current.style.animationDirection= "alternate"
  //   // if (animationPause) cleanAnimation.cleanAnimations()

  //   return cleanAnimation

  // }, [])



  return (
    <>
      <div  {...props} >

        {props.children}

      </div>

    </>
  )
}

export default CardProfile