import React, { useState } from 'react'
import Header from '../include/header';
import { Scrollbars } from 'rc-scrollbars';
import SideChatname from '../include/sidechatname'
import { Link } from 'react-router-dom';
import Voicecall from '../model/voicecall'
import Profile_user from '../model/profileuser'; 
import Videocall from '../model/videocall'
import Fancybox from '../imgupload/fancybox'

function Customer_chat() {

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

    const [Profile_user_show, setProfile_user_show] = useState(false);
    const profile_user_Show = (e) => {
      setProfile_user_show('show-right-sidebar');
    }
    return (
        <div>
            <div  className="main-wrapper">

                <div className="content main_content">

                    <Header />
                    <SideChatname />
                    <div className="chat" id="middle">
                 

                    <Scrollbars  autoHide>
                            <div className="slimscroll" >
                            <div className="chat-header">
                                <div className="user-details">
                                    <div className="d-lg-none ms-2">
                                        <ul className="list-inline mt-2 me-2">
                                            <li className="list-inline-item">
                                                <a className="text-muted px-0 left_side" href="#" data-chat="open">
                                                    <i className="fas fa-arrow-left"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <figure className="avatar ms-1">
                                        <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <div className="mt-1">
                                        <h5>Doris Brown</h5>
                                        <small className="online">
                                            Online
                                        </small>
                                    </div>
                                </div>
                                <div className="chat-options">
                                    <ul className="list-inline">
                                       
                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Voice call">
                                            <Link  className="btn btn-outline-light" onClick={voicecall_Show}>
                                                <i className="fas fa-phone voice_chat_phone"></i>
                                            </Link>
                                            <Voicecall Voicecall_show={Voicecall_show} setVoicecall_show={setVoicecall_show} />
                                        </li>
                                        <li className="list-inline-item"  >
                                            <Link onClick={Video_call_Show} className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#video_call">
                                                <i className="fas fa-video"></i>
                                            </Link>
                                            <Videocall Videocall_show={Videocall_show} setVideocall_show={setVideocall_show} />
                                        </li>
                                        <li className="list-inline-item dream_profile_menu" >
                                            <Link onClick={profile_user_Show} className="btn btn-outline-light">
                                                <i className="fas fa-user"></i>
                                            </Link>
                                            <Profile_user Profile_user_show={Profile_user_show} setProfile_user_show={setProfile_user_show} />
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="btn btn-outline-light no-bg" onClick={archiveButton}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </Link>
                                            <div  className={`dropdown-menu dropdown-menu-end bottom-end ${hide}`}>
                                                <Link href="#" className="dropdown-item dream_profile_menu">Archive <span><i className="fas fa-archive"></i></span></Link>
                                                <Link href="#" className="dropdown-item">Muted <span className="material-icons">volume_off</span></Link>
                                                <Link href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                              

                            </div>
                            <div className="chat-body">
                                <div className="messages">
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle dreams_chat" alt="image" />
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
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
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
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat" alt="image" />
                                        </div>
                                        <div className="chat-action-btns me-2">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="chat-read-col">
                                                <span className="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle dreams_chat" alt="image" />
                                        </div>
                                        <div className="chat-content">
                                            <div className="message-content">
                                                &amp; Next meeting tomorrow 10.00AM
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
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
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
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat" alt="image" />
                                        </div>
                                        <div className="chat-action-btns me-2">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="chat-read-col">
                                                <span className="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/img/avatar/avatar-8.jpg" className="rounded-circle dreams_chat" alt="image" />
                                        </div>
                                        
                                        <div className="chat-content">
                                            <div className="message-content">
                                                <div className="download-col">
                                                <Fancybox options={{ infinite: true}}>
                                                    <ul>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                                    <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col image-not-download">
                                                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                                    <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col image-not-download">
                                                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                                    <img src="assets/img/chat-download.jpg" alt="" />
                                                                </a>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
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
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chats chats-right">
                                        <div className="chat-content">
                                            <div className="message-content">
                                                <div className="file-download d-flex align-items-center">
                                                    <div className="file-type d-flex align-items-center justify-content-center me-2">
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
                                            <img src="assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat" alt="image" />
                                        </div>
                                        <div className="chat-action-btns me-2">
                                            <div className="chat-action-col">
                                                <a className="#" href="#" data-bs-toggle="dropdown">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item dream_profile_menu">Copy <span><i className="far fa-copy"></i></span></a>
                                                    <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                    <a href="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></a>
                                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="chat-read-col">
                                                <span className="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </Scrollbars>
                        <div className="chat-footer">
                            <form>
                                <div className="smile-col">
                                    <Link href="#"><i className="far fa-smile"></i></Link>
                                </div>
                                <div className="attach-col">
                                    <Link href="#"><i className="fas fa-paperclip"></i></Link>
                                </div>
                                <input type="text" className="form-control chat_form" placeholder="Enter Message....." />
                                <div className="form-buttons">
                                    <button className="btn send-btn" type="submit">
                                        <span className="material-icons">send</span>
                                    </button>
                                </div>
                                <div className="specker-col">
                                    <Link  href="#"><span className="material-icons">settings_voice</span></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer_chat;
