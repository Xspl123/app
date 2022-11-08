import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Forgot_Password() {





    return (
        <div>
            <div className="main-wrapper">

                <div className="content main_content">
                    <div class="w-100 ">
                        <div class="login-left">

                            <div class="account-content">
                                <div class="login-header">
                                    <a href="index.html">
                                        <img src="assets/img/logo-full.png" alt="" />
                                    </a>
                                </div>
                                <div class="form-col">
                                    <div class="login-text-details">
                                        <h3>Forgot Password</h3>
                                        <p>Confirm your email and enter the OTP to send to your Registered Email id.</p>
                                    </div>
                                    <Form >
                                        <div class="form-group">
                                            <label>Your Email</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="email" type="email" />
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-check d-flex flex-wrap ps-0 mt-3">
                                                Didnt recieve OTP ? <a href="#" class="ms-1" data-bs-toggle="modal" data-bs-target="#otp-success"> Resend OTP.</a>
                                            </label>
                                        </div>
                                        <div class="pt-3">
                                            <div class="text-center">
                                                <button class="btn newgroup_create btn-block d-block w-100" type="submit">Reset Password</button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                                <div class="back-btn-col text-center">
                                <Link to="/Customer_chat"><span><i className="fas fa-caret-left"></i></span> Back</Link>
                                </div>
                            </div>

                        </div>
                        <div class="login-right pwd-bg">
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Forgot_Password;
