import React from 'react';
import Button from 'react-bootstrap/Button';
import { Scrollbars } from 'rc-scrollbars';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Profile_user(props) {

    const closed_model = () => {

        console.log(props.Profile_user_show);
        props.setProfile_user_show('hide-right-sidebar');
    }

    return (

        <div className={`right-sidebar right_sidebar_profile ${props.Profile_user_show}`} id="middle1" >
            <div className="right-sidebar-wrap ">
                <Scrollbars autoHide>
                    <div className="left-chat-title d-flex justify-content-between align-items-center p-3">
                        <div className="chat-title">
                            <h4>PROFILE</h4>
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
                                    <img src="assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
                                </figure>
                                <h5 className="profile-name">Scott Albright</h5>
                                <div className="online-profile">
                                    <span>online</span>
                                </div>
                            </div>
                            <div>

                                <div className="about-media-tabs">
                                    <Tabs
                                        defaultActiveKey="About"
                                        id="justify-tab-example"
                                        className="mb-3"
                                        justify
                                    >
                                        <Tab eventKey="About" title="About">
                                            <div className="about-section">
                                                <p>If several languages coalesce, the grammar of the resulting language
                                                    is more simple and regular than that of the individual.</p>
                                                <div className="member-details">
                                                    <ul>
                                                        <li>
                                                            <h6>Phone</h6>
                                                            <span>555-555-21541</span>
                                                        </li>
                                                        <li>
                                                            <h6>Nick Name</h6>
                                                            <span>Alberywo</span>
                                                        </li>
                                                        <li>
                                                            <h6>Email</h6>
                                                            <span><a href="https://dreamschat.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                className="__cf_email__"
                                                                data-cfemail="d697bab4b3a4afa1b996b1bbb7bfbaf8b5b9bb">[email&#160;protected]</a></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="social-media-col">
                                                    <h6>Social media accounts</h6>
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
                                                </div>
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
                                                                <span>Get notification</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="" title="Media">

                                            <div className="tab-pane fade active show">
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
                                        </Tab>

                                    </Tabs>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="report-col">
                        <ul>
                            <li><a href="#"><span className="material-icons">report_problem</span> Report Chat</a></li>
                            <li><a href="#"><span><i className="far fa-trash-alt"></i></span> Delete Chat</a></li>
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        </div>
    )

};

