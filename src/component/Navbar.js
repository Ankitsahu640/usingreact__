
import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { BsEye, BsPower, BsFillQuestionCircleFill } from "react-icons/bs";
import Modal from './Modal'

export default function Navbar(props) {
    return (
        <div>
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid flex-d">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><CiCirclePlus/> Create User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><BsEye/> Preview home page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><BsEye/> Preview after login page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><BsPower/> View welcome screen</a>
                            </li>
                        </ul>
                    </div>
                    <div><Modal/></div>
                    <div className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/"><BsFillQuestionCircleFill size="25px" color="#1ddeba"/> Help</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}