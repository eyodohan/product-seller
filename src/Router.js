import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Product from './components/Product'
import App from './App'
import AxiosTutorial from './components/AxiosTutorial'


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={()=><App/>}/>
                    <Route path="/products/:id" component ={()=><Product/>}/>
                    <Route path="/axios" component ={()=><AxiosTutorial/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
