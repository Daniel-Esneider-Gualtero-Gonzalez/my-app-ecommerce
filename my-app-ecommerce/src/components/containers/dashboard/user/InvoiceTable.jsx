

function InvoiceTable() {
    return (

        <div className="rounded border ">
            <table className="w-full rounded-lg">
                <thead className="">
                    <tr className="border-b">
                        <th scope="col" className="">
                            Product name
                        </th>
                        <th scope="col" className="">
                            Color
                        </th>
                        <th scope="col" className="">
                            Category
                        </th>
                        <th scope="col" className="">
                            Price
                        </th>
                        <th scope="col" className="">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="">
                            Apple MacBook Pro 17"
                        </td>
                        <td className="">
                            Silver
                        </td>
                        <td className="">
                            Laptop
                        </td>
                        <td className="">
                            $2999
                        </td>
                        <td className="">
                            <a href="#" className="">Descargar</a>
                        </td>
                    </tr>

                    <tr className="">
                        <td className="">
                            Apple MacBook Pro 17"
                        </td>
                        <td className="">
                            Silver
                        </td>
                        <td className="">
                            Laptop
                        </td>
                        <td className="">
                            $2999
                        </td>
                        <td className="">
                            <a href="#" className="">Descargar</a>
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>


    )
}

export default InvoiceTable