import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import authService from "./services/authService";
import { useDispatch } from "react-redux";
import { setCurrentUserState } from "./store/action/userActions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let user = authService.getCurrentUser()

    dispatch(setCurrentUserState(user))
  })

  return (
    <>
      <ToastContainer />
      
      <Outlet />      
    </>
  )
}

export default App
