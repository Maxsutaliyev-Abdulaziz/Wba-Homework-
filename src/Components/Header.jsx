import React from "react";
import {H1, H2, H3, Box, H4, H5} from '../stayled'

const Header = ({ students, deleteUser }) => {

    return (
        <div  >
            <H1>Students List - {students.length}</H1>
            <H2>
            {
                students.map(v => {
                    return <Box className="box" key={v.id}>
                        <H3 className="h3">{v.name}</H3>
                        <H4 className="h4">{v.age}</H4>
                        <H5 className="del" onClick={() => deleteUser(v.id)} >Delete</H5>
                    </Box>
                })
            }
            </H2>
        </div>
    )
}
export default Header;
