import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Notes from './pages/Notes'
import Papers from './pages/Papers'
import Resources from './pages/Resources'
import Upload from './pages/Upload'
import Community from './pages/Community'
import BranchNotes from './pages/BranchNotes'
import BranchPapers from './pages/BranchPapers'
import BranchResources from './pages/BranchResources'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Navbar/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/notes",
        element:<Notes/>
      },
      {
        path:"/notes/:branchName",
        element:<BranchNotes/>
      },
      {
        path:"/papers",
        element:<Papers/>
      },
      {
        path:"/papers/:branchName",
        element:<BranchPapers/>
      },
      {
        path:"/resources",
        element:<Resources/>
      },
      {
        path:"/resources/:branchName",
        element:<BranchResources/>
      },
      {
        path:"/upload",
        element:<Upload/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/community",
    element:<Community/>
  },
])

const App = () => {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
