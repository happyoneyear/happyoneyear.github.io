import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export class Timeline extends Component {
    render() {
        return (
            <div>
                <Container>
                <h4 className="timelineHead">Our Timeline</h4>
	                <Row>
		            <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} sm={{ span: 12 }}>
			        <ul class="timeline">
                            <li >
                                <div className="timeBox"><div className="date">June 9th, 2018</div>
                                <div className="dateDesc">The night we met</div></div>
                                
                            </li>
                            <li >
                                <div className="timeBox"><div className="date">December 28th, 2018</div>
                                <div className="dateDesc">Naomi dms Chris</div></div>
                                
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">December 31st, 2018</div>
                                <div className="dateDesc">Email correspondence established</div>
                            </div>
                            </li>
                            <li>
                                <div className="timeBox">
                                <div className="date">January 13th, 2019</div>
                                <div className="dateDesc">Our first date</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">February 5th, 2019</div>
                                <div className="dateDesc">Aquaman</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">..., 2019</div>
                                <div className="dateDesc">Ice-skating (i forget the date pls don't be mad)</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">March 3rd, 2019</div>
                                <div className="dateDesc">Naomi asks Chris to prom</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">March 18th, 2019</div>
                                <div className="dateDesc">Naomi is confused</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">April 7th, 2019</div>
                                <div className="dateDesc">Chris officially asks Naomi out. Naomi is less confused</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">April 28th, 2019</div>
                                <div className="dateDesc">Naomi commits to Cornell</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">May 3rd, 2019</div>
                                <div className="dateDesc">Naomi's prom. Naomi meets Chris's parents</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">June 1st, 2019</div>
                                <div className="dateDesc">Chris's prom. Naomi goes to Chris's house</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">June 2nd, 2019</div>
                                <div className="dateDesc">Chris says "I love you"</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">June 3rd, 2019</div>
                                <div className="dateDesc">Agree to try long distance</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">June 27th, 2019</div>
                                <div className="dateDesc">Coney Island</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">July 20th, 2019</div>
                                <div className="dateDesc">Chris meets Naomi's dad</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">July 27th, 2019</div>
                                <div className="dateDesc">DUMBO</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">August 7th, 2019</div>
                                <div className="dateDesc">Naomi's birthday</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">August 10th, 2019</div>
                                <div className="dateDesc">Chris's birthday</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">August 22nd, 2019</div>
                                <div className="dateDesc">Naomi leaves for college</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">August 31st, 2019</div>
                                <div className="dateDesc">Chris visits Cornell</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">September 20th, 2019</div>
                                <div className="dateDesc">Chris leaves for college</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">November 26th, 2019</div>
                                <div className="dateDesc">Reunited after 12 weeks</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">December 18th, 2019</div>
                                <div className="dateDesc">Christmas break</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">January 4th, 2020</div>
                                <div className="dateDesc">Chris leaves for college again</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">February 21st, 2020</div>
                                <div className="dateDesc">Naomi visits UChicago</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">March 17th, 2020</div>
                                <div className="dateDesc">Quarantine begins</div>
                                </div>
                            </li>
                            <li>
                            <div className="timeBox">
                                <div className="date">April 7th, 2020</div>
                                <div className="dateDesc">One year :)</div>
                                </div>
                            </li>
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Timeline

