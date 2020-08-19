import React, {useState, useEffect} from "react"

const joke="Hammy"

/**
 * react component
 * because we are returning jsx
 */
const Name = ({name, age, hobby}) => {
  const [state, setState] = useState(0)
  const [joke,setJoke] = useState()

  const increment = () => {
    setState(oldState => (oldState + 1));  //pass in a lambda into oldState
  }

  useEffect(() => {
    fetch("http://localhost:5000/superSecret").then((response) => {
      response.json().then(responseJSON => {
        setJoke(responseJSON.value.joke)
      })
    }).catch((error) => {
      console.error(error)
    })
  },[state, name])

  //useEffect(callback, depArray)
  // if any of the items in depArray changes -> run effect
  // else skip

  // if button clicked -> add +1 to state
  // new state -> new render
  // new render -> check useffect if deparray has changed
  // deparray changed (state+1)
  // get new joke

  return (
    <div>
      <h1>My name is {name} and i like {hobby}</h1>
      <button onClick={increment}>Click Me</button>
      <p> My number is {state}</p>
      <p>Here's a joke</p>
      <h2>{joke}</h2>
    </div>
  )
}


export class NewName extends React.Component {
  
  render() {
    return <h1>{joke}</h1>
  }
}

export default Name
