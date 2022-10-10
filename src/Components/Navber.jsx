import React from "react";
import {Div} from "../stayled";

const Navbar = ({students}) => {
    return(
        <Div>
            <h1>Name</h1>
            <h1>Age</h1>
            <h1>Delet</h1>
            <h1>Totil: {students.length}</h1>
        </Div>
    )
}
export default Navbar;
