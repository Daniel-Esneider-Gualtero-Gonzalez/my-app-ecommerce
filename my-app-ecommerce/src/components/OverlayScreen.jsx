

function OverlayScreen({absolute=true,zIndex="1"}) {
    const styleAbsolute = `${zIndex}`
  return (
    <div className='w-full h-screen fixed bg-slate-100 opacity-60  top-0 left-0  overflow-hidden'>
        
    </div>
  )
}

export default OverlayScreen