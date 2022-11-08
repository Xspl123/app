import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes }
  from 'react-router-dom';
import Customer_chat from './component/page/customer_chat';
import Login from './component/page/login';
import Group_chat from './component/page/groupchat';
import Forgot_Password from './component/page/forgotPassword';
import Audio_call from './component/page/audiocall';
import Settings from './component/page/settings';


function App() {

  return (

    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/forgotpassword' element={< Forgot_Password />} />
          <Route path='/Customer_chat' element={<Customer_chat />} />
          <Route path='/groupchat' element={<Group_chat />} />
          <Route path='/audiocall' element={<Audio_call />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
