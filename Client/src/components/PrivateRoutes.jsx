import {useSelector} from 'react-redux'
import {Outlet} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
export default function PrivateRoutes() {
    const {currentUser} = useSelector(state => state.user)
  return currentUser ? <Outlet /> : <Navigate  to ='/sign-in' /> 
}
