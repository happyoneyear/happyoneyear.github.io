import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

export class Meeps extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="meepTitle">A str8meep for when you're...</h1>
                    <div className="meeps">
                    <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=0fTUj9mfnUk" target="_blank">Happy</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=B0VNkQR1wGU" target="_blank">Frustrated</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=dvgZkm1xWPE" target="_blank">Nostalgic</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=h_m-BjrxmgI" target="_blank">Sad</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=D439MPwfLT0" target="_blank">Lonely</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=wJGcwEv7838" target="_blank">Angry</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=ox7RsX1Ee34" target="_blank">In love</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=qYDO0_7TR7w" target="_blank">Wistful</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=HpixdTlYlKU" target="_blank">Scared</Button>{'  '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=cZ0BEJricd8" target="_blank">Pensive</Button>{'  '}
                    </div>
                <div className="meeps">
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=ZigwGPcsdr0" target="_blank">Satisfied</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=QYh6mYIJG2Y" target="_blank">Prideful</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=l4Fpxll8sDI" target="_blank">Grateful</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=VuNIsY6JdUw" target="_blank">Jealous</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=jz_01KVkOBI" target="_blank">Annoyed</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=3oUPGbRazaA" target="_blank">Confused</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=LH4Y1ZUUx2g" target="_blank">Bored</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=YwNL2vRfm0A" target="_blank">Hype</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=6Os-CACRwM8" target="_blank">Silly</Button>{' '}
                <Button style={{fontSize:"25px"}} href="https://www.youtube.com/watch?v=lYoWuaw5nSk" target="_blank">Calm</Button>{' '}
                </div>
                
                </Container>
            </div>
        )
    }
}

export default Meeps
