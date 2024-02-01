import axios from "axios"
import { useState } from "react";
function App(){

    const [deg,setdeg] = useState("0")
    const [city,setcity] = useState("  ")
    const [desc,setdesc] = useState("")
    const [enteredvalue,setenteredvalue] = useState("")

    function handleinput(event)
    {
        console.log(event.target.value);
        setenteredvalue(event.target.value)
    }


    function getData()
    {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=ee949cc184264765ad2f53c854eb1a81`)

        weather.then(function(dalta){
            
            setdeg(dalta.data.main.temp)
            setdesc(dalta.data.weather[0].main)
            setcity(dalta.data.name)
            
        })

    }
    return(
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-md shadow"> 
                <h1 className="font-medium">Hey!🌥️</h1>
                <p className="mt-2">Do you want to know the weather Report :)</p>
                <input onChange={handleinput} type="text" className="rounded-md h-6 mt-2 p-3 text-sm outline-none" placeholder="City Name?"></input>
                <br/>
                <button onClick={getData} className="bg-black mt-4 text-white p-2 text-xs rounded-md">Get Report ⚡</button>
                <p className="mt-1 p-2">Degree: {deg}    | City:       {city}    |      Weather: {desc}</p>
            </div>
        </div>
    )
}

export default App