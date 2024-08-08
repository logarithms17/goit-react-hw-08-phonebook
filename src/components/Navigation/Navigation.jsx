import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
      <nav>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Log In</NavLink>
    </nav>
  )
}

export default Navigation