import React, { useState } from 'react'
import Header from '../include/header';
import Callname from '../include/callname';



function Audio_call() {




    return (
        <div>
            <div className="main-wrapper">

                <div className="content main_content">

                    <Header />
                    <Callname />
                    <div className="chat d-flex align-items-center justify-content-center">
                        <div className="status-right">
                            <div className="audio-chat">
                                <img src="assets/img/avatar/avatar-9.jpg" alt="" className="rounded-circle" height="60" width="60" />
                                <p>Hey, <span className="text-highlight">Scott Albright!</span></p>
                                <p className="m-0">Please select a chat to start messaging.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Audio_call;
