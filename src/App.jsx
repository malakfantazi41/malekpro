import './App.css'

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
  
  

export default App */

//import Animals from "./composants/Tableu"
import Produit from './composants/objet'

/*function App()
{
  return (
    <div>
      <Produit information ={{nom:"sucre",prix:15.45}}/>
    </div>
  )
}*/

/*function App()
{
  const animaux =["chien","chat","lapin"]
  return (
    <div>
      <Animals items ={animaux}/>
    </div>
  )
}
export default App */
import Button from './composants/Butn'
function App()
{
  const Style={
    color:'red',
    fontSize:'40px'
  }
 return ( 
 <div>
  <Button click={()=>alert("bein")}/>
 <Produit information ={{nom:"sucre",prix:15.45}} nomstyle={Style}/>
 <Button click={()=>alert("beinffff")}/>
 </div>
 )
}
export default App