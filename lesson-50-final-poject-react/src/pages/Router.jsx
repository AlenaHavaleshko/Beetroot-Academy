import { Routes, Route, Navigate  } from 'react-router-dom'
import LogIn from '../container/AuthForm/LogIn/LogIn';
import SignUp from '../container/AuthForm/SignUp/SignUp';

//routs
import AuthRoute from './routes/AuthRoute';
import PublicRoute from './routes/PublicRoute';


//layouts
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

//page
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import Calendar from './Calendar';

function Router () {

 return(
<Routes>
  <Route path="/" Component={() => <div>33333333333</div> }/> 
  <Route path="/login" element= {<AuthRoute element={LogIn}/>}/>
  <Route path="/signup" element= {<AuthRoute element={SignUp}/>}/>

  <Route path="/account" element= {<PublicRoute element={AccountPage}/>}/>  
  <Route path="/home" element= {<PublicRoute element={HomePage}/>}/>  

  <Route path='/calendar' element={<PublicRoute element={Calendar}/>}/>
  <Route path='/account' element={<PublicRoute element={AccountPage}/>}/>
</Routes>
 );
}

export default Router;