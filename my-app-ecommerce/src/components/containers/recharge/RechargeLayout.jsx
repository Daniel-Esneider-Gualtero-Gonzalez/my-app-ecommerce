import Input from "../../Input"
import RechargeForm from "../../forms/RechargeForm"


function RechargeLayout() {
    return (
        <>
            
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-bold text-xl text-gray-800">Recarga tu saldo</h2>
                        

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                
                                <img src="https://img.freepik.com/vector-gratis/mujer-comprando-zapatos-ropa-perfumes-telefono_74855-11203.jpg?w=826&t=st=1700843505~exp=1700844105~hmac=732a1b893bff8b579273089f16ccba65ccbfb28de8e7c02aa072fb9a6834b673" alt="" />

                                <div className="lg:col-span-2">
                                    <RechargeForm />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default RechargeLayout