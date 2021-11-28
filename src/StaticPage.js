import React from "react"
import Navbar from "./components/first_static_page/Navbar"
import Main from "./components/first_static_page/Main"

export default function StaticPage() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}
