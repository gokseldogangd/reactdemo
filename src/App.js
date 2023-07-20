import './App.css';

import Home from './Pages/Home';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';

const routes = createBrowserRouter([
  {path:'/', 
   element:<MainLayout/>,
   children:[
     
    {path:'/', element:<Home/>},
  { path:'/work', element:<Work/>},
   {path:'/contact', element:<Contact/>}
    
   ]    

   
  },
  
]);


function App() {
  return (
      <RouterProvider router={routes}/>
  );
}

export default App;
