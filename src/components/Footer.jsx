import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
// import { Link } from 'react-router-dom'


function Footer() {


  return (
    <>


      <footer className=" indexFooter  bg-blue-300 rounded-tr-[300px] ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-2 md:mb-0">

              <Logo className="w-[180px] rounded" />

            </div>
            <div className="grid grid-cols-2 gap-5  sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">En esta pagina</h2>
                <ul className="">
                  <li className="mb-4">
                    <Link to={"/products"}>Productos</Link>
                  </li>
                  <li>
                  <Link to={"/aboutas"}>Acerca de esta página</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                <ul className="">
                  <li className="mb-6">
                    <span>Privacidad - Política</span>
                  </li>
                  <li>
                    <span>Términos &amp; Condiciones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-600 sm:mx-auto  lg:my-8" />
          
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="flex flex-col gap-2 sm:flex sm:flex-row sm:justify-between items-center">© 2024 <a href="https://flowbite.com/" className="font-semibold">MyEcommerce</a>. Casi todos los derechos reservados.</span>

            <a href="#" className="w-fit mx-auto sm:mx-0  ">
              <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
              <a  href='https://github.com/Daniel-Esneider-Gualtero-Gonzalez/my-app-ecommerce' aria-label='ir al repositorio del codigo fuente de esta página' className="sr-only">GitHub account</a>
            </a>

          </div>
        </div>

      </footer>


    </>
  )
}

export default Footer