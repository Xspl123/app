import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './addfriends.css'

export default function Createnewgroup(props) {

    const closed_model = () => {
        props.setCreatenewgroup_show(false);
    }


    return (

        <Modal className="modal-dialog-centered"
            show={props.Createnewgroup_show}

        >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>
                    <h5 className="modal-title">
                        <span className="material-icons">person_add</span>Create a New Group
                    </h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    
             
                            <div className="form-group">
                                <label>Group Name</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Choose profile picture</label>
                                <div className="custom-input-file form-control form-control-lg group_formcontrol">
                                    <input type="file" className="" />
                                    <span className="browse-btn">Browse File</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Topic (optional)</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control form-control-lg group_formcontrol"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="d-flex align-items-center">
                                    <label className="custom-radio me-3">Private Group
                                        <input type="radio" checked="checked" name="radio " />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="custom-radio">Public Group
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
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
                Add Participants
                </Button>

            </Modal.Footer>
        </Modal>
    )

};

