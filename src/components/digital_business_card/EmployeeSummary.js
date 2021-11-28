import { HiOutlineMail, IoLogoLinkedin } from 'react-icons/fa';
import React from "react"

export default function EmployeeSummary() {
    return (
        <div className="employeeSummary">
            <h1 className="name">Karanvir (K.V) Ghumaan</h1>
            <h3 className="title">Software Engineer</h3>
            <h5 className="email">kv.s.ghumaan@gmail.com</h5>
            <div className="buttonGroup">
                <button className="emailButton">
                <HiOutlineMail /> Email
                </button>
                <button className="linkedInButton">
                <IoLogoLinkedin /> LinkedIn
                </button>
            </div>
        </div>
    )
}