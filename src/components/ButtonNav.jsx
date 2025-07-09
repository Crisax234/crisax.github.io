import React from "react";

function ButtonNav(props) {
    return (
        <nav>
            <ul class="nav_links">
                <li><a>{props.little}</a></li>
                
            </ul>
        </nav>
    )

}

export default ButtonNav;