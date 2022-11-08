import React, { useState } from 'react'
import Header from '../include/header';
import { Scrollbars } from 'rc-scrollbars';
import Groupname from '../include/groupname'
import { Link } from 'react-router-dom';
import Voicecall from '../model/voicecall'
import Groupsprofile from '../model/groupsprofile'; 
import Videocall from '../model/videocall'
import Fancybox from '../imgupload/fancybox'

function Group_chat() {
    
    const [hide, setHide] = useState('hide');
    const archiveButton = () => {
        if (hide == 'show') {
            setHide('hide');
        } else {
            setHide('show');
        }

    };
    const [Voicecall_show, setVoicecall_show] = useState(false);
    const voicecall_Show = (e) => {
      setVoicecall_show(true);
    }

    const [Videocall_show, setVideocall_show] = useState(false);
    const Video_call_Show = (e) => {
      setVideocall_show(true);
    }

    const [Groupsprofile_show, setGroupsprofile_show] = useState(false);
    const Groupsprofile_Show = (e) => {
      setGroupsprofile_show('show-right-sidebar');
    }



    return (
        <div>
            <div className="main-wrapper">

                <div className="content main_content">

                    <Header />
                    <Groupname />
                    <div className="chat" id="middle">
                    <Scrollbars autoHide>
                            <div className="chat-header">
                                <div className="user-details">
                                    <div className="d-lg-none ms-2">
                                        <ul className="list-inline mt-2 me-2">
                                            <li className="list-inline-item">
                                                <Link className="text-muted px-0 left_side" href="#" data-chat="open">
                                                    <i className="fas fa-arrow-left"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <figure className="avatar ms-1 avatar-main">
                                        <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <div className="mt-1">
                                        <h5>#Tech Support</h5>
                                        <small className="online">
                                            View Group Info
                                        </small>
                                    </div>
                                </div>
                                <div className="avatar-group">
                                    <div className="avatar avatar-xs group_img group_header">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                            src="assets/img/avatar/avatar-6.jpg" />
                                    </div>
                                    <div className="avatar avatar-xs group_img group_header">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                            src="assets/img/avatar/avatar-1.jpg" />
                                    </div>
                                    <div className="avatar avatar-xs group_img group_header">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                            src="assets/img/avatar/avatar-2.jpg" />
                                    </div>
                                    <div className="avatar avatar-xs group_img group_header">
                                        <span className="avatar-title rounded-circle">+35</span>
                                    </div>
                                </div>
                                <div className="chat-options">
                                    <ul className="list-inline">
                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                            title="Voice call">
                                             <Link  className="btn btn-outline-light" onClick={voicecall_Show}>
                                                <i className="fas fa-phone voice_chat_phone"></i>
                                            </Link>
                                            <Voicecall Voicecall_show={Voicecall_show} setVoicecall_show={setVoicecall_show} />
                                        </li>
                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                            title="Video call">
                                             <Link onClick={Video_call_Show} className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#video_call">
                                                <i className="fas fa-video"></i>
                                            </Link>
                                            <Videocall Videocall_show={Videocall_show} setVideocall_show={setVideocall_show} />
                                        </li>
                                        <li className="list-inline-item dream_profile_menu" data-bs-toggle="tooltip"
                                            data-bs-placement="bottom" title="Profile">
                                             <Link onClick={Groupsprofile_Show} className="btn btn-outline-light">
                                                <i className="fas fa-user"></i>
                                            </Link>
                                            <Groupsprofile Groupsprofile_show={Groupsprofile_show} setGroupsprofile_show={setGroupsprofile_show} />
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="btn btn-outline-light no-bg" onClick={archiveButton}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </Link>
                                            <div className={`dropdown-menu dropdown-menu-end bottom-end ${hide}`}>
                                                <Link to="#"className="dropdown-item dream_profile_menu">Archive <span><i
                                                    className="fas fa-archive"></i></span></Link>
                                                <Link to="#" className="dropdown-item">Muted <span
                                                    className="material-icons">volume_off</span></Link>
                                                <Link to="#" className="dropdown-item">Delete <span><i
                                                    className="far fa-trash-alt"></i></span></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>



                            </div>
                            <div className="chat-body">
                                <div className="messages">
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat"
                                                alt="image" />
                                        </div>
                                        <div className="chat-content">
                                            <div className="message-content">
                                                Hi James! What’s Up?
                                                <div className="chat-time">
                                                    <div>
                                                        <div className="time"><i className="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-profile-name">
                                                <h6>Doris Brown</h6>
                                            </div>
                                        </div>
                                        <div className="chat-action-btns ms-3">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i
                                                        className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span
                                                        className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i
                                                        className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i
                                                        className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats chats-right">
                                        <div className="chat-content">
                                            <div className="message-content">
                                                Good morning, How are you? What about our next meeting?
                                                <div className="chat-time">
                                                    <div>
                                                        <div className="time"><i className="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-profile-name text-end">
                                                <h6>Alexandr</h6>
                                            </div>
                                        </div>
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-7.jpg" className="rounded-circle dreams_chat"
                                                alt="image" />
                                        </div>
                                        <div className="chat-action-btns me-2">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i
                                                        className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span
                                                        className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i
                                                        className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i
                                                        className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="chat-read-col">
                                                <span className="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat"
                                                alt="image" />
                                        </div>
                                        <div className="chat-content">
                                            <div className="message-content">
                                                & Next meeting tomorrow 10.00AM
                                                <div className="chat-time">
                                                    <div>
                                                        <div className="time"><i className="fas fa-clock"></i> 10:06</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-profile-name">
                                                <h6>Doris Brown</h6>
                                            </div>
                                        </div>
                                        <div className="chat-action-btns ms-3">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i
                                                        className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span
                                                        className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i
                                                        className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i
                                                        className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-line">
                                        <span className="chat-date">Today</span>
                                    </div>
                                    <div className="chats chats-right">
                                        <div className="chat-content">
                                            <div className="message-content">
                                                Wow Thats Great
                                                <div className="chat-time">
                                                    <div>
                                                        <div className="time"><i className="fas fa-clock"></i> 10:02</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-profile-name text-end">
                                                <h6>Alexandr</h6>
                                            </div>
                                        </div>
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-7.jpg" className="rounded-circle dreams_chat"
                                                alt="image" />
                                        </div>
                                        <div className="chat-action-btns me-2">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i
                                                        className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span
                                                        className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i
                                                        className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i
                                                        className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="chat-read-col">
                                                <span className="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat"
                                                alt="image" />
                                        </div>
                                        <div className="chat-content">
                                            <div className="message-content">
                                                <div className="download-col">
                                                <Fancybox options={{ infinite: true}}>
                                                    <ul>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery"
                                                                    className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                        className="fas fa-cloud-download-alt"></i></a></div>
                                                                    <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col image-not-download">
                                                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery"
                                                                    className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                        className="fas fa-cloud-download-alt"></i></a></div>
                                                                    <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col image-not-download">
                                                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery"
                                                                    className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i
                                                                        className="fas fa-cloud-download-alt"></i></a></div>
                                                                    <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    </Fancybox>
                                                </div>
                                                <div className="chat-time">
                                                    <div>
                                                        <div className="time"><i className="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-profile-name">
                                                <h6>Doris Brown</h6>
                                            </div>
                                        </div>
                                        <div className="chat-action-btns ms-3">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i
                                                        className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span
                                                        className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i
                                                        className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i
                                                        className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats chats-right">
                                        <div className="chat-content">
                                            <div className="message-content">
                                                <div className="file-download d-flex align-items-center">
                                                    <div
                                                        className="file-type d-flex align-items-center justify-content-center me-2">
                                                        <i className="far fa-file-archive"></i>
                                                    </div>
                                                    <div className="file-details">
                                                        <span className="file-name">filename.zip</span>
                                                        <span className="file-size">10.6MB</span>
                                                    </div>
                                                    <div className="download-action d-flex align-items-center">
                                                        <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                        <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                    </div>
                                                </div>
                                                <div className="chat-time">
                                                    <div>
                                                        <div className="time"><i className="fas fa-clock"></i> 10:02</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-profile-name text-end">
                                                <h6>Alexandr</h6>
                                            </div>
                                        </div>
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-7.jpg" className="rounded-circle dreams_chat"
                                                alt="image" />
                                        </div>
                                        <div className="chat-action-btns me-2">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i
                                                        className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span
                                                        className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i
                                                        className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i
                                                        className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="chat-read-col">
                                                <span className="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Scrollbars >
                        <div className="chat-footer">
                            <form>
                                <div className="smile-col">
                                    <a href="#"><i className="far fa-smile"></i></a>
                                </div>
                                <div className="attach-col">
                                    <a href="#"><i className="fas fa-paperclip"></i></a>
                                </div>
                                <input type="text" className="form-control chat_form" placeholder="Enter Message....." />
                                <div className="form-buttons">
                                    <button className="btn send-btn" type="submit">
                                        <span className="material-icons">send</span>
                                    </button>
                                </div>
                                <div className="specker-col">
                                    <a href="#"><span className="material-icons">settings_voice</span></a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Group_chat;
