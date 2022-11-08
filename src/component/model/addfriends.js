import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './addfriends.css'
export default function Addfriends(props) {

    const closed_model = () => {
        props.setAddfriends_show(false);
    }


    return (

        <Modal className="modal-dialog-centered"
            show={props.Addfriends_show}

        >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>
                    <h5 className="modal-title">
                        <span className="material-icons">person_add</span>Add Friends
                    </h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-title"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label>Nickname</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-title"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="cancel-btn me-4">
                    <Link variant="secondary" onClick={closed_model} >
                        Cancel
                    </Link>
                </div>
                <Button type="button" className="btn newgroup_create mb-0" aria-label="Close">
                    Add User
                </Button>

            </Modal.Footer>
        </Modal>
    )

};

