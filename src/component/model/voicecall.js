import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function Voicecall(props) {

    const closed_model = () => {
        props.setVoicecall_show(false);
    }


    return (

        <Modal className="modal-dialog-centered"
            show={props.Voicecall_show}

        >

            <Modal.Body>
                <div className="p-0 modal-body">
                    <div className="text-center p-4 pb-0">
                        <div className="avatar-xl mx-auto mb-4"><img src="assets/img/avatar/avatar-8.jpg" alt="" className="img-thumbnail rounded-circle" /></div>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="avatar-md h-auto">
                                <button type="button" className="avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-microphone-alt-slash"></i></span></button>
                                <h5 className="font-size-11 text-uppercase text-muted mt-2">Mute</h5>
                            </div>
                            <div className="avatar-md h-auto">
                                <button type="button" className=" avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-volume-up"></i></span></button>
                                <h5 className="font-size-11 text-uppercase text-muted mt-2">Speaker</h5>
                            </div>
                            <div className="avatar-md h-auto">
                                <button type="button" className="avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-user-plus"></i></span></button>
                                <h5 className="font-size-11 text-uppercase text-muted mt-2">Add New</h5>
                            </div>
                        </div>
                        <div className="mt-4"><button type="button" onClick={closed_model} className="btn btn-danger avatar-md call-close-btn rounded-circle btn btn-danger"><span className="avatar-title bg-transparent font-size-24"><span className="material-icons">close</span></span></button></div>
                    </div>
                    <div className="p-4 bg-soft-primary mt-n4">
                        <div className="mt-4 text-center">
                            <h5 className="font-size-18 mb-0 text-truncate">Miranda Valentine</h5>
                        </div>
                    </div>
                </div>
            </Modal.Body>
           
        </Modal>
    )

};

