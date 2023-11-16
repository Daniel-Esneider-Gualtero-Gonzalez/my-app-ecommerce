import Logo from "./Logo"

function Header() {
  
  return (
    <header className=" border flex items-center justify-between py-3 px-3 ">
      <Logo className={"w-[60px] h-[60px] rounded"} />
      <nav className="border border-black list-none ">
        <ul className=" flex mx-3">
          <li>example 1</li>
          <li>example 2</li>
          <li>example 3</li>
          <li>example 4</li>
          <li>example 5</li>
        </ul>
      </nav>
      <div className="">
      <button className="mr-1 border">Sing Up</button>
      <button className=" border">Sing In</button>  
      </div>
    </header>
  )
}

export default Header