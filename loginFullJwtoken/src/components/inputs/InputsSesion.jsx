
import {useForm} from 'react-hook-form'
// recibe el nombre del registro, 
function InputsSesion({namereg,validoptions}) {
    const {register} = useForm()
  return (
    <input {...register(namereg,validoptions)}  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  )
}

export default InputsSesion