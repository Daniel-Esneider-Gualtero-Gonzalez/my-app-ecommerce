import { useContextAuth } from "../contexts/contextAuth"

function ConditionalLinkIsUser( {classNameList="",...props}) {
    const {user} = useContextAuth()
    if(!user) return

  return (
    <ul className={classNameList}>
        {props.children}
    </ul>
  )
}

export default ConditionalLinkIsUser