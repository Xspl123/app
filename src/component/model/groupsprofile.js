import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Scrollbars } from 'rc-scrollbars';


export default function Groupsprofile(props) {

    const closed_model = () => {
        
        console.log(props.Groupsprofile_show);
        props.setGroupsprofile_show('hide-right-sidebar');
    }

    return (

        <div className={`right-sidebar right_sidebar_profile ${props.Groupsprofile_show}`} id="middle1" >
            <div className="right-sidebar-wrap ">
                <Scrollbars autoHide>
                <div className="left-chat-title d-flex justify-content-between align-items-center p-3">
                            <div className="chat-title">
                                <h4>Group Details</h4>
                            </div>
                            <div className="contact-close_call text-end">
                            <Button onClick={closed_model} className="close_profile close_profile4" >
                                <span className="material-icons">close</span>
                            </Button>
                            </div>
                        </div>
                        <div className="sidebar-body">
                            <div className="mt-0 right_sidebar_logo">
                                <div className="text-center mb-2 right-sidebar-profile">
                                    <figure className="avatar avatar-xl mb-3">
                                        <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <h5 className="profile-name">#Fashion Plus</h5>
                                    <div className="create-group-date">Created on 25/02/2020</div>
                                    <div className="edit-group">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit-new-group"><span><i
                                                    className="fas fa-edit"></i></span> Edit Group</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="about-media-tabs">
                                        <nav>
                                            <div className="nav nav-tabs justify-content-center" id="nav-tab">
                                                <a className="nav-item nav-link active" id="nav-home-tab"
                                                    data-bs-toggle="tab" href="#info">Info</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab1" data-bs-toggle="tab"
                                                    href="#Participants">participants(63)</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab2" data-bs-toggle="tab"
                                                    href="#media">Media</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="info">
                                                <p>If several languages coalesce, the grammar of the resulting language
                                                    is more simple and regular than that of the individual.</p>
                                                <div className="settings-col">
                                                    <h6>Settings</h6>
                                                    <ul>
                                                        <li className="d-flex align-items-center">
                                                            <label className="switch">
                                                                <input type="checkbox" checked />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Block</span>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Mute</span>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Notification</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Participants">
                                                <div className="participants-list">
                                                    <ul className="user-list mt-2">
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-8.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Regina</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div>
                                                                    <span className="admin-profiles">admin</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-9.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Kroch</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div>
                                                                    <span className="admin-profiles">admin</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-10.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Seary</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div className="grp-delete">
                                                                    <div className="chat-action-col">
                                                                        <a className="#" href="#" data-bs-toggle="dropdown">
                                                                            <i className="fas fa-ellipsis-h"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="#" className="dropdown-item">Delete
                                                                                <span><i
                                                                                        className="far fa-trash-alt"></i></span></a>
                                                                            <a href="#" className="dropdown-item">Mute <span
                                                                                    className="material-icons">volume_off</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-11.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Margaretta</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div className="grp-delete">
                                                                    <div className="chat-action-col">
                                                                        <a className="#" href="#" data-bs-toggle="dropdown">
                                                                            <i className="fas fa-ellipsis-h"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="#" className="dropdown-item">Delete
                                                                                <span><i
                                                                                        className="far fa-trash-alt"></i></span></a>
                                                                            <a href="#" className="dropdown-item">Mute <span
                                                                                    className="material-icons">volume_off</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-2.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Kowalski</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div className="grp-delete">
                                                                    <div className="chat-action-col">
                                                                        <a className="#" href="#" data-bs-toggle="dropdown">
                                                                            <i className="fas fa-ellipsis-h"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="#" className="dropdown-item">Delete
                                                                                <span><i
                                                                                        className="far fa-trash-alt"></i></span></a>
                                                                            <a href="#" className="dropdown-item">Mute <span
                                                                                    className="material-icons">volume_off</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-12.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Alexandr</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div className="grp-delete">
                                                                    <div className="chat-action-col">
                                                                        <a className="#" href="#" data-bs-toggle="dropdown">
                                                                            <i className="fas fa-ellipsis-h"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="#" className="dropdown-item">Delete
                                                                                <span><i
                                                                                        className="far fa-trash-alt"></i></span></a>
                                                                            <a href="#" className="dropdown-item">Mute <span
                                                                                    className="material-icons">volume_off</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex">
                                                            <div>
                                                                <div className="avatar avatar-online">
                                                                    <img src="assets/img/avatar/avatar-4.jpg"
                                                                        className="rounded-circle" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="users-list-body d-flex justify-content-between">
                                                                <div>
                                                                    <h5>Dickerson</h5>
                                                                    <p>At work</p>
                                                                </div>
                                                                <div className="grp-delete">
                                                                    <div className="chat-action-col">
                                                                        <a className="#" href="#" data-bs-toggle="dropdown">
                                                                            <i className="fas fa-ellipsis-h"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="#" className="dropdown-item">Delete
                                                                                <span><i
                                                                                        className="far fa-trash-alt"></i></span></a>
                                                                            <a href="#" className="dropdown-item">Mute <span
                                                                                    className="material-icons">volume_off</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="text-center">
                                                        <a href="#" className="load-more-btn">More 54 <i
                                                                className="fas fa-sort-down"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="media">
                                                <div className="file-download-col">
                                                    <ul>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg"
                                                                    data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                                className="fas fa-cloud-download-alt"></i></a>
                                                                    </div>
                                                                    <div><a href="#"><i
                                                                                className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg"
                                                                    data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                                className="fas fa-cloud-download-alt"></i></a>
                                                                    </div>
                                                                    <div><a href="#"><i
                                                                                className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg"
                                                                    data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                                className="fas fa-cloud-download-alt"></i></a>
                                                                    </div>
                                                                    <div><a href="#"><i
                                                                                className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg"
                                                                    data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                                className="fas fa-cloud-download-alt"></i></a>
                                                                    </div>
                                                                    <div><a href="#"><i
                                                                                className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg"
                                                                    data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                                className="fas fa-cloud-download-alt"></i></a>
                                                                    </div>
                                                                    <div><a href="#"><i
                                                                                className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg"
                                                                    data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                                className="fas fa-cloud-download-alt"></i></a>
                                                                    </div>
                                                                    <div><a href="#"><i
                                                                                className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="full-width text-center">
                                                            <a href="#" className="load-more-btn">More 154 Files <i
                                                                    className="fas fa-sort-down"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="report-col">
                            <ul>
                                <li><a href="#"><span><i className="fas fa-sign-out-alt"></i></span> Exit Group</a></li>
                                <li><a href="#"><span className="material-icons">report_problem</span> Report Chat</a></li>
                                <li><a href="#"><span><i className="far fa-trash-alt"></i></span> Delete Chat</a></li>
                            </ul>
                        </div>
                </Scrollbars>
            </div>
        </div>
    )

};

