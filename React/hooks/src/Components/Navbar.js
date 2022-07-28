import React, {useContext} from 'react'
import context from './Context'

function Navbar() {
    // console.log(context);
    const { theme } = useContext(context);
  return (
    <div className={theme?"dark":"light"}>Navbar</div>
  )
}

export default Navbar