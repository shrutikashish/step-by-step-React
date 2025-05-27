
import Apps from './exp_imp'
import Header from './header'
import { Login, Profile, User, UserKey } from './UserComponent'
import { Comp,Compos } from './component'


function App() {
alert(sum())
  return (
    <div>
     <h1> First Component</h1>
     <Comp></Comp>
     <Compos></Compos>
     <Apps></Apps>
     <Login></Login>
     <Profile></Profile>
     <User></User>
     <h1>{UserKey}</h1>

     
    </div>

)
function sum(){
  return 10+60

}
}



export default App
