import React, { useState } from 'react'
import './sidechatname.css'
import { Scrollbars } from 'rc-scrollbars';

function Callname() {

 
    return (
       
        <div className="sidebar-group left-sidebar chat_sidebar">

        <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <div className="slimscroll">

                <div className="left-chat-title d-flex justify-content-between align-items-center">
                    <div className="chat-title">
                        <h4>CALLS</h4>
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
                            <h4>RECENT CALLS</h4>
                        </div>
                        <div className="add-section">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add-group-call"><i
                                    className="fas fa-phone"></i></a>
                        </div>
                    </div>

                    <nav>
                        <div className="nav nav-tabs chat-scroll side_bar" id="nav-tab">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                href="#allcalls">All Calls</a>
                            <a className="nav-item nav-link" id="nav-profile-tab1" data-bs-toggle="tab"
                                href="#receivedcalls">Recieved Calls</a>
                            <a className="nav-item nav-link" id="nav-profile-tab2" data-bs-toggle="tab"
                                href="#incomingcalls">Incoming Calls</a>
                            <a className="nav-item nav-link" id="nav-profile-tab3" data-bs-toggle="tab"
                                href="#missedcalls">Missed Calls</a>
                        </div>
                    </nav>
                    <div className="tab-content settings-form">

                        <div className="tab-pane fade show active" id="allcalls">
                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>Just now</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="videocall-group.html"><span
                                                    className="material-icons videocall-icon">videocam</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-9.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Forest Kroch</h5>
                                            <p>9 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item item-typing">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-10.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                M
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Townsend Seary</h5>
                                            <p>3 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-11.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Margaretta Worvell</h5>
                                            <p>4 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-2.jpg" className="rounded-circle"
                                                alt="image" /> 
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>#Tech Support</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Harald Kowalski</h5>
                                            <p>3 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Alexandr Donnelly</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="videocall-group.html"><span
                                                    className="material-icons videocall-icon">videocam</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-4.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>8 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="videocall-group.html"><span
                                                    className="material-icons videocall-icon">videocam</span></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="tab-pane fade" id="receivedcalls">
                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>Just now</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="videocall-group.html"><span
                                                    className="material-icons videocall-icon">videocam</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-11.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Margaretta Worvell</h5>
                                            <p>4 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-2.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>#Tech Support</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-9.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Forest Kroch</h5>
                                            <p>9 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                M
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Townsend Seary</h5>
                                            <p>3 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Alexandr Donnelly</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_made</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="tab-pane fade" id="incomingcalls">
                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-9.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Forest Kroch</h5>
                                            <p>9 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                M
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Townsend Seary</h5>
                                            <p>3 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Alexandr Donnelly</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="videocall-group.html"><span
                                                    className="material-icons videocall-icon">videocam</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item item-typing">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-10.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Harald Kowalski</h5>
                                            <p>3 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-4.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>8 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 incoming-icon">call_received</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="tab-pane fade" id="missedcalls">
                            <ul className="user-list mt-2">
                                <li className="user-list-item item-typing">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-10.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Harald Kowalski</h5>
                                            <p>3 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-4.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>8 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="videocall-group.html"><span
                                                    className="material-icons videocall-icon">videocam</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle"
                                            alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>Just now</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatar/avatar-11.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Margaretta Worvell</h5>
                                            <p>4 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src="assets/img/avatar/avatar-2.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>#Tech Support</h5>
                                            <p>5 Min Ago</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <span className="material-icons me-3 callmissed-icon">call_missed</span>
                                            <a href="audiocall-single.html"><span
                                                    className="material-icons calling-icon">call</span></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
    )


}

export default Callname;