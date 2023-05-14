import React from 'react'
import '../css/Cards.css'
import { Container } from 'reactstrap'
function Cards() {

    return (
        <div className="cards-page">
            <Container>
                <div className="cards">
                    <div className="card">
                        <h3>100+</h3>
                        <h4>Mijozlarimiz</h4>
                    </div>
                    <div className="card">
                        <h3>25+</h3>
                        <h4>Tugallangan ishlar</h4>
                    </div>
                    <div className="card">
                        <h3>12+</h3>
                        <h4>Tajriba</h4>
                    </div>
                    <div className="card card-2">
                        <h3>65+</h3>
                        <h4>Hamkorlar</h4>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cards