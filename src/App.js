import { useState, useEffect, useRef, useLayoutEffect, useCallback, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { wait } from '@testing-library/user-event/dist/utils';
/*import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

 const Compteur = () => {

  Use useState
  const [count, setCount] = useState(0)

   Use useEffect
  useEffect(()=>{
    window.setInterval(()=>{
      increment()
    }, 1000)

    return function(){

    }

  }, [count])

  useEffect(()=>{
    document.title = "Compteur " + count
  }, [count])

  const increment = () => {
    setCount(count => count + 1)
  }

  return <button onClick={increment}>Increment {count} </button>
}


 Use useRef
const Ref = () => {
  const input = useRef()

  const handleButtonClick = () => {
    console.log(input.current.value)
  }

  return <div>
    <input type="text" ref={input}/>
    <button onClick={handleButtonClick}>Recuperer la valeur</button>
    <p>{input.current.value}</p>  false}
  </div>
}


wait method
useEffect(()=>{
  wait(1000)
  console.log(count)
})


wait method
const Layout = () => {

  const button = useRef(null)
  const [ct, setCt] = useState(0)

  useLayoutEffect(()=>{
    if(ct % 2 == 0){
      button.current.style.color = 'green'
    } else {
      button.current.style.color = 'red'
    }
  })

  const incrment = useCallback(() =>{
    setCt(c=>c+1)
  }, [])

  return <div>
    <button ref={button} onClick={incrment}>Incrmenter</button>
  </div>
}


use useReducer
function reducer(state, action) {
  switch(action.type){
    case 'increment':
      return state + 1
    case 'decrement':
      if(state <= 0) {
        return state
      }
      return state -1
    default:
      throw new Error("L'action " + action.type + " est inconnue")
  }
}

function Reducer(){
  const [ct, dispatch] = useReducer(reducer, 0)

  return <div>
    Compteur: {ct}
    <button onClick={()=>dispatch({type: 'increment'})}> Increment </button>
    <button onClick={()=>dispatch({type: 'decrement'})}> Decrement</button>
  </div>
} */

 /* Output */
function App() {

  const [formValues, setFormValues] = useState([{name: "", email: ""}])

  const handleChange = (index, e) => {
    const {name, value} = e.target
    let newformValues = [...formValues]
    newformValues[index][e.target.name] = e.target.value
    setFormValues(newformValues)
  }

  let removeFields = (index) => {
    let newformValues = [...formValues]
    newformValues.splice(index, 1)
    setFormValues(newformValues)
  }

  let addFormFields = () => {
    setFormValues([...formValues, {name:"", email: ""}])
  }

  let handleSubmit = (e) => {
    // e.preventDefault()
    alert(JSON.stringify(formValues))
  }

  return (
    <form action="" onSubmit={(e)=>handleSubmit}>
      {formValues.map((item, index)=> (
        <div className="inline" key={index}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" value={item.name || ""} onChange={(e)=>handleChange(index, e)}/>
          <label htmlFor="">Email</label>
          <input type="text" name="email" value={item.email || ""} onChange={(e)=>handleChange(index, e)} />
        {
          index ? 
          // formValues.length !== 1 ?
            <button type="button" className="button remove" onClick={()=>removeFields(index)}>Remove</button>
          : null
        }
        </div>
      ))}
      <div className='button-section'>
        <button className='button add' type="button" onClick={()=> addFormFields()}>Add</button>
        <button className='button submit' type="button">Submit</button>
      </div>
      <div> {JSON.stringify(formValues)} </div>
    </form>
  )
}

export default App