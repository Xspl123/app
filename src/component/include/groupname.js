import React, { useState } from 'react'
import './sidechatname.css'
import { Scrollbars } from 'rc-scrollbars';
import { Link } from 'react-router-dom';
import Createnewgroup from '../model/createnewgroup';

function Groupname() {

    const [Createnewgroup_show, setCreatenewgroup_show] = useState(false);
    const Createnewgroup_model_Show = (e) => {
        setCreatenewgroup_show(true);
    }
  
    return (
        <div className="sidebar-group left-sidebar chat_sidebar">

            <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <Scrollbars autoHide>

                    <div className="left-chat-title d-flex justify-content-between align-items-center">
                        <div className="chat-title">
                            <h4>GROUP CHAT</h4>
                        </div>
                        <div className="add-section">
                            <ul>
                                <li><Link onClick={Createnewgroup_model_Show}><span
                                    className="material-icons group-add-btn">group_add</span></Link></li>
                                <Createnewgroup Createnewgroup_show={Createnewgroup_show} setCreatenewgroup_show={setCreatenewgroup_show} />
                            </ul>
                        </div>
                    </div>

                    <div className="search_chat has-search mb-0">
                        <span className="fas fa-search form-control-feedback"></span>
                        <input className="form-control chat_input" id="search-contact1" type="text"
                            placeholder="Search Contacts" />
                    </div>
                    <div className="sidebar-body" id="chatsidebar">

                        <div className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                            <div className="chat-title">
                                <h4>Recent Chats</h4>
                            </div>
                        </div>

                        <ul className="user-list mt-2">
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-away">
                                        <img src="assets/img/group-4.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Fashion Plus <span className="ms-1"><span
                                            className="material-icons lock-icon">lock</span></span></h5>
                                        <p><strong>Moein</strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 Min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Tech Support</h5>
                                        <p><strong>Haidar</strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/group-3.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Home Decor </h5>
                                        <p><strong>Jonathan</strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-3.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Interior Design </h5>
                                        <p><strong>Judy </strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/group-1.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Photography </h5>
                                        <p><strong>Degregorio</strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/group-5.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Interiors </h5>
                                        <p><strong>Jean </strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-6.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Inspiration </h5>
                                        <p><strong>Burns</strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/group-2.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Artwork </h5>
                                        <p><strong>Josh </strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Handmade </h5>
                                        <p><strong>Susan </strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-9.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>#Design Inspiration</h5>
                                        <p><strong>Johnson</strong> : Hi!!!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">20 min</small>
                                        <div className="new-message-count">11</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </Scrollbars>
                </div>
          

        </div>
    )


}

export default Groupname;