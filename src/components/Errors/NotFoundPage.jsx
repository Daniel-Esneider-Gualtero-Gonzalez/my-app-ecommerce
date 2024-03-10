import {NavLink} from 'react-router-dom'

function NotFoundPage() {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold  text-blue-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina no encontrada</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Lo sentimos, no hemos podido encontrar la página que buscas.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NavLink to={"/"}  className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ">Pagina principal</NavLink>
                    <NavLink href="#" className="text-2xl font-semibold text-gray-900">Contactar con Soporte <span className='text-blue-600' aria-hidden="true">&rarr;</span></NavLink>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage
