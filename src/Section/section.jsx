import React from "react";
import Navbar from '../Components/Navber'
import Body from '../Components/Header'
import { useState } from "react";


const Section = () => {
    const [students, setStudents] = useState(
        [
            { id: 1, name: 'Abdulaziz', age: 17 },
            { id: 2, name: 'Hojiakbar', age: 15 },
            { id: 3, name: 'Azizbek', age: 17 },
        ]
    )
    const deleteUser = (id) => {
        let res = students.filter(v => v.id !== id)
        setStudents(res)
        console.log(students);
    }
    return (
        <div>
            <Navbar students={students} />
            <Body students={students} deleteUser={deleteUser} />
        </div>
    )
}
export default Section;
