

function SideBar( {className="",...props}) {
  
  return (
    <aside className={className}>
        {props.children}
    </aside>
  )
}

export default SideBar