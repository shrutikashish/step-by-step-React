import carImage from './assets/cars.jpg'; // Adjust path as needed

function Todo(){
    return(
        <div>
            <h1>Todos list</h1>
            <img src={carImage} class="image"></img>
            <h1>
            <ul>
                
                <li>Write new functionality in car</li>
                <li>change colour of car</li>
                <li> Assign New Model in Factory</li>
            </ul>
            </h1>
        </div>

        
    )
}
export default Todo