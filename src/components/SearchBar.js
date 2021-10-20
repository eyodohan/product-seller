import { Search } from '@material-ui/icons'
import React from 'react'
import "../Style.css"


export const SearchBar = ({handleChange,handleSubmit}) => {

    const search=document.querySelector(".search")
    const input=document.querySelector(".input")
    return (

        

        
       <form className="col-6" onSubmit={handleSubmit}>
       {/* <div className="input-group mb-3">
            <input
                onChange={(e)=>handleChange(e.target.value)}
                type="text"
                className="form-control" 
                placeholder="Enter Products Name" 
                />
            <button
                className="btn btn-outline-secondary"
                type="submit" 
                id="button-addon2">Button</button>
        </div> */}
            <div class="search">
                <input onChange={(e)=>handleChange(e.target.value)} type="text" class="input" placeholder="Search..."/>
                <button className="btn1" onClick={()=>{
                    search.classList.toggle("active")
                    input.focus()
                    }}>
                <Search style={{backgroundColor:"white"}}/>
                </button>
            </div>

        </form>
       
    )
}



