import React from 'react'
import InvoiceTable from './InvoiceTable'

function IndexDashboardLayout() {
  return (
    <section className='border flex flex-col gap-2 col-span-10 mb-0 p-1'>
      <header className='col-span-full h-fit flex gap-1'>
        <article className='border rounded h-20 w-52'></article>
        <article className='border rounded h-20 w-52'></article>
        <article className='border rounded h-20 w-52'></article>
      </header>
      <div className='grid grid-cols-2 gap-1'>
        <article className='border rounded col  h-60'></article>
        <article className='border rounded col  h-60'></article>
      </div>

      <footer>
        <InvoiceTable />
      </footer>
    </section>
  )
}

export default IndexDashboardLayout