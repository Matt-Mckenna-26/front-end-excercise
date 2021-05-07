import react from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
    return(
        <Container fluid>
            <Row className='footer align-items-center'>
                <div className='p-3 d-inline-block col-md-4'>
                    <h1 className='blue-text pro-force'>PRO<span className ='orange-text'>FORCE</span></h1>
                    <h2 className='blue-text hiring-solutions'>HIRING SOLUTIONS</h2>
                </div>
                <p className='footer-text d-inline-block col-md-4 p-3 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestias similique maxime commodi eos nulla repellat incidunt esse eaque quo quidem?
                </p>
            </Row>
        </Container>
    )
}

export default Footer