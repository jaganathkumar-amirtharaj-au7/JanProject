import {NavLink} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import './css/nav_bar.css'

import {Fragment} from 'react';
const Navigation=()=>{
    return(
        <Fragment>

<Nav className="Nav d-inline-block  "> 
<NavLink  id="nav_link_1"  to="/signup">Siginup</NavLink>
    <NavLink  id="nav_link_2"   to="/login">Login</NavLink> 
</Nav>
            </Fragment>
    )
}
export default Navigation;