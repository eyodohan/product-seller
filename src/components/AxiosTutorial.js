import React,{useState} from 'react'
import axios from "axios"


const AxiosTutorial = () => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(result=>result.data)
    .then(result=>console.log(result))

    // const [data,setData]=useState(result)
    // console.log(data)

    return (
        <div>
            hey
        </div>
    )
}

export default AxiosTutorial
