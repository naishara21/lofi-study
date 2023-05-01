import {React,useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import ToDo from './ToDo'
import './styles/todo.css'



const ToDobtn = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='btn-todo'>
         <FontAwesomeIcon
	        className="todobtn"
	        size="xl"
	        icon={faCheck}
            onClick={() => setToggle(!toggle)}
	      />
          {toggle && (
        <ToDo/>
      )}
    </div>
  )
}

export default ToDobtn