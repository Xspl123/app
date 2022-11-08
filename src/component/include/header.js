import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../include/header.css';
import Addfriends from '../model/addfriends';
import Createnewgroup from '../model/createnewgroup';

function Header() {

    const [hide, setHide] = useState('hide');
    const hideButton = () => {
        if (hide === 'show') {
            setHide('hide');
        } else {
            setHide('show');
        }

    };
    const [Addfriends_show, setAddfriends_show] = useState(false);
    const Addfriends_model_Show = (e) => {
      setAddfriends_show(true);
    }

    const [Createnewgroup_show, setCreatenewgroup_show] = useState(false);
    const Createnewgroup_model_Show = (e) => {
        setCreatenewgroup_show(true);
    }
  
    return (
       <div className="sidebar-menu">
                <div className="logo-col">
                    <a href="index.html"><img src={process.env.PUBLIC_URL+"assets/img/logo.png"} alt="" /></a>
                </div>
                <div className="menus-col">
                    <div className="chat-menus">
                        <ul>
                            <li>
                                <Link to="/Customer_chat" className="chat-unread blue">
                                    <span className="material-icons">message</span>
                                    <span>Chats</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/groupchat" className="chat-unread pink">
                                    <span className="material-icons">group</span>
                                    <span>Groups</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/audiocall" className="chat-unread">
                                    <span className="material-icons">call</span>
                                    <span>Calls</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" className="chat-unread">
                                    <span className="material-icons">settings</span>
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-menus">
                        <ul>
                            <li>
                                <Link onClick={Createnewgroup_model_Show}>
                                    <span className="material-icons group-add-btn">group_add</span>
                                    <span>Add Groups</span>
                                </Link>
                                <Createnewgroup Createnewgroup_show={Createnewgroup_show} setCreatenewgroup_show={setCreatenewgroup_show} />
                            </li>
                            <li>
                                <Link onClick={Addfriends_model_Show}>
                                    <i className="fas fa-plus"></i>
                                    <span>Add Contacts</span>
                                </Link>
                                <Addfriends Addfriends_show={Addfriends_show} setAddfriends_show={setAddfriends_show} />
                            </li>
                                                   <li>
                                <Link  className="chat-profile-icon" onClick={hideButton}>
                                    <img src="assets/img/avatar/avatar-13.jpg" alt="" />
                                </Link>
                               
                            </li>
                        </ul>
                        <div className={`dropdown-menu dropdown-menu-end ${hide}`} >
                                    <Link href="#" className="dropdown-item dream_profile_menu">Edit Profile <span
                                            className="edit-profile-icon"><i className="fas fa-edit"></i></span></Link>
                                    <Link href="#" className="dropdown-item">Profile <span className="profile-icon-col"><i
                                                className="fas fa-id-card-alt"></i></span></Link>
                                    <Link href="settings.html" className="dropdown-item">Settings <span
                                            className="material-icons">settings</span></Link>
                                    <Link href="archived.html" className="dropdown-item">Archived <span
                                            className="material-icons">flag</span></Link>
                                    <Link href="login-email.html" className="dropdown-item">Logout <span
                                            className="material-icons">power_settings_new</span></Link>
                                </div>
                      
                    </div>
                </div>
            </div>
    )


}

export default Header;