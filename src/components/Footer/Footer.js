import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer text-white  bg-dark font-small blue pt-4">
    <div className="container-fluid container text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <img src='./ai.png' alt="" />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a className="nav-link text-white" href="#!">About Online service</a></li>
                    <li><a className="nav-link text-white" href="#!">Read our Blog</a></li>
                    <li><a className="nav-link text-white" href="#!">Signup to Deliver</a></li>
                    <li><a className="nav-link text-white" href="#!">Add your list</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a className="nav-link text-white" href="#!">Get Helps</a></li>
                    <li><a className="nav-link text-white" href="#!">Read FAQs</a></li>
                    <li><a className="nav-link text-white" href="#!">View All cities</a></li>
                    <li><a className="nav-link text-white" href="#!">Branches near me</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="d-flex container">
        <p className="text-muted">Copyright © {new Date().getFullYear()}  Online service</p>
        <div className="ms-auto footer-a">
        <a className="text-white ps-5" href="/">Privacy Policy.</a>
        <a className="text-white ps-5" href="/">Terms of Use</a>
        <a className="text-white ps-5" href="/">Pricing</a>
        </div>
    </div>

</footer>
    );
};

export default Footer;