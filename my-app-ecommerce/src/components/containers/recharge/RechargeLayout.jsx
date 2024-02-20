
import useRecharge from "../../../hooks/useRecharge"
import Input from "../../Input"
import RechargeForm from "../../forms/RechargeForm"


function RechargeLayout() {
    const { loading, error, successRecharge, rechargeBalance } = useRecharge()

    if (loading) {
        return <h1>Realizando recarga porfavor espere....</h1>
    }
    return (
        <>

            {error ? console.log("error de intentar recargar", error) : null}
            {successRecharge === true ? console.log("recarga existosa", successRecharge) : null}


            <section className="border flex flex-col  place-content-center p-1 min-h-screen rounded-lg  ">


                <div className="border gap-1 md:w-[700px] md:mx-auto grid grid-cols-2">
                    <img className="" src="https://img.freepik.com/vector-gratis/mujer-comprando-zapatos-ropa-perfumes-telefono_74855-11203.jpg?w=826&t=st=1700843505~exp=1700844105~hmac=732a1b893bff8b579273089f16ccba65ccbfb28de8e7c02aa072fb9a6834b673" alt="" />

                    <article className="p-1 border rounded-lg">
                        <RechargeForm handleRecharge={rechargeBalance} />
                    </article>
                </div>

            </section>
        </>
    )
}

export default RechargeLayout