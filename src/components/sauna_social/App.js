import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"
import Form from "./Form"

export default function App() {
    // const cards = data.map(item => {
    //     return (
    //         <Card
    //             key={item.id}
    //             {...item}
                
    //         />
    //     )
    // })        
    
    return (
        <div>
            <Navbar />
            <Form />
            {/* <Hero />
            <section className="cards-list">
                {cards}
            </section> */}
        </div>
    )
}