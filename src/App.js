import React , {useState,useEffect} from 'react'
import data from './data.json'
import { Card } from './components/Card'
import {SearchBar} from './components/SearchBar'

import Product from './components/Product'



function App() {
  const [search,setSearch]=useState("")
  const [searchData,setSearchData]=useState(data)
  console.log(search)
  const handleChange=(e)=>{
    setSearch(e)
  }
const handleSubmit=(e)=>{
  e.preventDefault()

  const filteredData=data.filter(data=>{
    const text=data.title.toLowerCase()
    const input=search.toLowerCase()

    return text.includes(input)
  })
  setSearchData(filteredData)

}

useEffect(() => {
  const filteredData=data.filter(data=>{
    const text=data.title.toLowerCase()
    const input=search.toLowerCase()

    return text.includes(input)
  })
  setSearchData(filteredData)
},[search])


  return (
    <div>      
      <div className="row justify-content-center">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
      {
      searchData.map((data, index) => (
        <div className="col" key={index}>
          <Card  data={data} />
        </div>
      ))
      }
    </div>
    </div>
    
  )
}

export default App
