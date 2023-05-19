import React from 'react'
import CountUp from 'react-countup';

import { Container } from 'reactstrap'

import '../css/Cards.css'

function Cards() {

    return (
        <div className="cards-page">
            <Container>
                <div className="cards">
                    <div className="card">
                        <h3>
                            <CountUp
                                end={223}
                                duration={10}
                            />
                            +
                        </h3>
                        <h4>Mijozlarimiz</h4>
                    </div>
                    <div className="card">
                        <h3>
                            <CountUp
                                end={184}
                                duration={8}
                            />
                            +
                        </h3>
                        <h4>Tugallangan ishlar</h4>
                    </div>
                    <div className="card">
                        <h3>
                            <CountUp
                                end={5}
                                duration={10}
                            />
                            +
                        </h3>
                        <h4>Tajriba</h4>
                    </div>
                    <div className="card card-2">
                        <h3>
                            <CountUp
                                end={124}
                                duration={7}
                            />
                            +
                        </h3>
                        <h4>Hamkorlar</h4>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cards