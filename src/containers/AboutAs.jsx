

function AboutAs() {
  return (
    <>
      <section className="w-[90%] flex flex-col  gap-10 mx-auto h-screen rounded-lg p-2">

        <article className="w-[50%] flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Acerca de esta Aplicación web</h1>
          <p>
            Aplicacion creada para fines didacticos y de aprendizaje, esta aplicación simula un sitio web e-commerce real ,
            creado con  las siguientes tecnologias de desarrollo de software.
          </p>

          <ul className=" grid grid-cols-2 w-fit gap-x-8 gap-y-2 text-white ">
            <li className="border rounded w-fit px-2 border-orange-700 bg-orange-400 font-semibold">Html</li>
            <li className="border rounded w-fit px-2 border-blue-600 bg-blue-600 font-semibold">Css</li>
            <li className="border rounded w-fit px-2 border-yellow-600 bg-yellow-400 font-semibold">Javascript</li>
            <li className="border rounded w-fit px-2 border-blue-600 bg-blue-900 font-semibold">React</li>
            <li className="border rounded w-fit px-2 border-blue-900 bg-blue-700 font-semibold">Tailwind</li>
          </ul>
        </article>

        <article className="grid grid-cols-2 ">
          <h2 className="text-xl font-semibold border-b-2 border-blue-600 col-span-full w-fit">Qué puede hacer en esta aplicación?</h2>

          <div className=" w-[80%] flex flex-col gap-2 mt-2 ">
            <p>
              Estas son las caracteristicas que he creado. Hay caracteristicas finalizadas y  en desarrollo. Podemos distinguir
              entre las finalizadas y las que estan en desarrollo con un estado
              representado de la siguiente manera:
            </p>
            <ul>
                <li className="flex items-center gap-2"><span className="w-2 h-2 flex rounded-full bg-green-600"></span>Finalizada</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 flex rounded-full bg-red-600"></span>En desarrollo</li>
              </ul>
          </div>

          <article className="grid grid-cols-2 gap-3">

            <div className="rounded border p-1 ">
              <h3 className="gap-4 font-semibold">Registro <span className="w-2 h-2 flex rounded-full bg-green-600"></span></h3>
              <p>Puedes crearte una cuenta para poder obtener mas acciones en esta app</p>
            </div>
            <div className="rounded border p-1">
              <h3 className="gap-4 font-semibold">Seleccionar productos <span className="w-2 h-2 flex rounded-full bg-green-600"></span></h3>
              <p>Podras añadir los productos y cantidad de estos  a tu carrito de compras </p>
            </div>

            <div className="rounded border h-fit p-1">
              <h3 className="gap-4 font-semibold">Filtros productos <span className="w-2 h-2 flex rounded-full bg-green-600"></span></h3>
              <p>Podras seleccionar filtros para facilitar la busqueda de los productos que te interesan</p>
            </div>

            <div className="rounded border p-1 h-fit">
              <h3 className="gap-4 font-semibold">Recargar saldo <span className="w-2 h-2 flex rounded-full bg-green-600"></span></h3>
              <p>Podras recargar tu saldo para poder comprar los productos que escogiste.
                Para poder hacerlo debes estar <span className="font-semibold">registrado</span> </p>
            </div>

            <div className="rounded border p-1">
              <h3 className="gap-4 font-semibold">Tablero (dashboard) <span className="w-2 h-2 flex rounded-full bg-red-600"></span></h3>
              <p>Tendras todos los resumenes de tus gastos, compras, facturas.</p>
            </div>

          

          </article>
        </article>

      </section>
    </>
  )
}

export default AboutAs