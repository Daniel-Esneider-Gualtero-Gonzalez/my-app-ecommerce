
const imgLogo = "https://res.cloudinary.com/dqqw1bfwf/image/upload/v1708032644/aqwvdyyhceoqxl4ghaze.png"

function Logo({...props}) {
    
  return (
        <img {...props}  src={imgLogo} alt="Logo del proyecto My-ecommerce" />
  )
}

export default Logo