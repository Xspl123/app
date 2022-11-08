import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Input } from '@mui/material';

function login() {





    return (
        <div>
            <div className="main-wrapper">

                <div className="content main_content">
                    <div className="w-100 ">
                        <div className="login-left">

                            <div className="account-content">
                                <div className="login-header">
                                    <a href="/">
                                        <img src="assets/img/logo-full.png" alt="" />
                                    </a>
                                </div>
                                <div className="form-col">
                                    <div className="login-text-details">
                                        <h3>Log in</h3>
                                        <p>Login with your Data that you entered during your Registration</p>
                                    </div>
                                    <Form>
                                        <div className="form-group">
                                            <label>Your Email</label>
                                            <Input className="form-control form-control-lg group_formcontrol" name="email"
                                                type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Input className="form-control form-control-lg group_formcontrol" name="password"
                                                type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label className="custom-check d-flex">
                                                <input type="checkbox" />Keep me logged in
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="pt-1">
                                            <div className="text-center">
                                                <button className="btn newgroup_create btn-block d-block w-100"
                                                    type="submit">Login</button>
                                            </div>
                                        </div>

                                        <div className="text-center mt-3">
                                            <span className="forgot-link">
                                                <Link to="/forgotpassword" className="text-end">Forgot Password ?</Link>
                                            </span>
                                        </div>
                                    </Form>
                                </div>
                                <div className="back-btn-col text-center">
                                    <Link to="/Customer_chat"><span><i className="fas fa-caret-left"></i></span> Back</Link>
                                </div>
                            </div>

                        </div>
                        <div className="login-right">
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default login;
