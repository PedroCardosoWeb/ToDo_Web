import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import Task from '../views/Task'

export default function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/task" exact element={<Task/>}/>
                <Route path="/task/:id" exact element={<Task/>}/>
            </Routes>
        </Router>
    )
}