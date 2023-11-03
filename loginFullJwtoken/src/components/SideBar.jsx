

function SideBar( {absolute = false , screenFull = true ,children}) {

  const personality = ` ${absolute ? 'absolute' : '' } ${screenFull ? 'h-screen' : null}`
  console.log("Personality sidebar", personality)
  return (
    <div className={`${personality} border border-black overflow-auto`}>
        
    </div>
  )
}

export default SideBar