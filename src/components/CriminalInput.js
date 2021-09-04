import React from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import { FaSchool } from 'react-icons/fa';
import fire from '../fire'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Display.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { IconContext } from 'react-icons';
import AddRecord from '../AddRecord';
import Pdf from './Pdf';
import UpdateForm from './UpdateForm';

export const CriminalInput = ({criminal_data}) => {
    const [FirstName, setFirstName] = React.useState(criminal_data.FirstName);
    
    const onUpdate = () => {
       const db = fire.firestore()
       db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, FirstName})
       //doc("0") means the document with id 0 
    }

    const onDelete = () => {
        const db = fire.firestore()
       db.collection('criminals_data').doc(criminal_data.id).delete()
     



       /*

       const [todos, setTodos] = useState([])

       const newTodos = [todo, ...todos]

       const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
        */

    

    }
  
 /*
    const ref = fire.firestore().collection('criminals_data');
    function onDelete(criminal) {
        ref
            .doc(criminal.id)
            .delete()
            .then(()=> {
                setFirstName((prev) => 
                prev.filter((element) => element.id !== criminal.id)
                );
            })
            .catch((err) => {
                console.error(err);
            });
    }
*/

    return (
        <div>
        {/* <input
        value={FirstName}
        onChange={e => {
            setFirstName(e.target.value);
        }} /> */}
        <table><tr>
        <td className="siz"><Link to= "/Pdf"  target="_blank"><FcIcons.FcList /></Link></td>    
        <td className="siz"><Link to= "/UpdateForm"><FcIcons.FcSupport /></Link></td>
        <td className="siz"><Link onClick={onDelete}><FcIcons.FcCancel /></Link></td>
        </tr>
        </table>
        </div>
    )
}