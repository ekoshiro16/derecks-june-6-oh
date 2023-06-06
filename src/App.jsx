// This is JavaScript to import a function called useState from the React library (which is basically just a fancy object) and grabbing the key-value pair called useState from that React library. 
  // Importing tools is like getting an ingredient from your pantry
import { useState, useEffect } from "react"
import './App.css'

function App() {
  // Step S: setting up our state
    // Using the ingredient in your actual code is the line below: 
    // Skeleton Syntax:
      // const [getter, setter] = useState(defaultValue)


  // const [state, setState] = useState(0) // [getter, setter]

  // useEffect(() => {
  //   console.log("You just ran a useEffect")
  // }, [state])

  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  
        const translatedData = await response.json(); 
  
        setMyPokemon(translatedData.results)

        console.log(translatedData.results)
      } catch (error) {
        console.log(error); 
      }
    }

    fetchPokemon();
  }, [])

  // function increaseState() {
  //   setState(state + 1)
  // }

  return (
    <>
      <h2>Dereck's June 6th Office Hours</h2>
      {/* <p>{state}</p> */}

      {/* <button onClick={() => {
        setState(state + 1)
      }}>Click Me To Add 1</button> */}

      {/* <button onClick={increaseState}>Click Me</button> */}

      {
        myPokemon.length ? myPokemon.map((singlePoke) => {
          return (
            <div>
              <p>Name: {singlePoke.name}</p>
            </div>
          )
        }) : <p>Loading...</p>
      }
    </>
  )
}

export default App
