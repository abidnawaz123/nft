import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Create from './components/createAccount/create';
import "./fonts/WorkSans/font.scss";
import "./fonts/SpaceMono/style.scss"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Create />
  },
  {
    path: "/dashboard",
    element: < Dashboard />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
