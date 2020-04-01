import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Col } from 'react-bootstrap';

import theMet from './images/theMet.png'
import bench from './images/bench.png'
import boulder from './images/boulder.png'
import doll from './images/doll.png'
import dumbo from './images/dumbo.png'
import grass from './images/grass.png'
import subway from './images/subway.png'
import pret from './images/pret.png'
import car from './images/car.png'
import lego from './images/lego.png'
import facetime from './images/facetime.png'
import bryant from './images/bryant.png'
import boardwalk from './images/boardwalk.png'
import coney from './images/coney.png'
import reg from './images/reg.png'
import nowhere from './images/nowhere.png'
import nowhereAgain from './images/nowhereAgain.png'
import nyc from './images/nyc.png'
import ralphs from './images/ralphs.png'
import sephora from './images/sephora.png'



export class Spots extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="spotsHead">Date Spots: Hall of Fame</h1>
                    <Col lg={{span:8, offset: 2}} md={{span:8, offset: 2}} sm={12}>
                    <Carousel className="carouselItem" nextIcon={<span aria-hidden="true" class="glyphicon glyphicon-chevron-right"/>} 
                    prevIcon={<span aria-hidden="true" class="glyphicon glyphicon-chevron-left"/>}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={theMet}
                        alt="The Met"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The Metropolitan Museum</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bench}
                        alt="Random Bench"
                        />
                        <Carousel.Caption>
                        <h3 className="location">A random bench in Central Park</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={boulder}
                        alt="Boulder"
                        />
                        <Carousel.Caption>
                        <h3 className="location">A random boulder in Central Park</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={grass}
                        alt="Grass"
                        />
                        <Carousel.Caption>
                        <h3 className="location">A random patch of grass in Central Park</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pret}
                        alt="Pret"
                        />
                        <Carousel.Caption>
                        <h3 className="location">Pret-A-Manger</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={subway}
                        alt="Subway"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The MTA</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={dumbo}
                        alt="Dumbo"
                        />
                        <Carousel.Caption>
                        <h3 className="location">DUMBO</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={doll}
                        alt="Doll"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The American Girl Doll store</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={car}
                        alt="Car"
                        />
                        <Carousel.Caption>
                        <h3 className="location">Naomi's car (bopping str8meeps)</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={boardwalk}
                        alt="Boardwalk"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The boardwalk in the best borough</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={lego}
                        alt="lego"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The LEGO store</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bryant}
                        alt="bryant"
                        />
                        <Carousel.Caption>
                        <h3 className="location">Bryant Park while waiting for Naomi's train</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={coney}
                        alt="coney"
                        />
                        <Carousel.Caption>
                        <h3 className="location">Coney Island</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ralphs}
                        alt="ralphs"
                        />
                        <Carousel.Caption>
                        <h3 className="location">Ralph's</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sephora}
                        alt="sephora"
                        />
                        <Carousel.Caption>
                        <h3 className="location">A random Sephora store</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={nowhere}
                        alt="nowhere"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The middle of nowhere</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={nowhereAgain}
                        alt="nowhere"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The middle of nowhere part 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={reg}
                        alt="reg"
                        />
                        <Carousel.Caption>
                        <h3 className="location">The Regenstein</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={nyc}
                        alt="nyc"
                        />
                        <Carousel.Caption>
                        <h3 className="location">New York City babyy!!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={facetime}
                        alt="facetime"
                        />
                        <Carousel.Caption>
                        <h3 className="location">Last but not least, the MVP of long distance</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    </Col>
                </Container>
                
            </div>
        )
    }
}

export default Spots
