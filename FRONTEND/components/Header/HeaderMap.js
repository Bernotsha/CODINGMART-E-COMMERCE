import React from 'react'

function HeaderMap({values}){
        return(
            <li class="nav-item active">
                  <a class="nav-link" href="#" onClick={()=>values.func()}>{values.text}</a>
            </li>
        )
}
export default HeaderMap