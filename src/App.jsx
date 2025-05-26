
import Header from './header'



function App() {
  alert(sum())
  return (
    <div>
     <h1> First Component</h1>
     <Comp></Comp>
     <Compos/>
     
    </div>
  )
}

function Comp(){
  return (
    <>
    <h2> Second Component</h2>
    </>
  )
}
function Compos(){
  return (
    <>
    <h3> Third Component </h3>
    </>
  )
}
function sum(){
  return 10+60
}

export default App
