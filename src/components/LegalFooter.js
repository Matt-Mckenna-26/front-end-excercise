import React from 'react'
import { Container, Row } from 'react-bootstrap'


const LegalFooter =() => {
    return(
    <Container fluid>
        <Row className='d-flex align-itmes-center justify-content-between'>
        <p className='legal-footer-text d-inline-block col-md-4 p-3'>2021 Proforce. All rights reserved.</p>
        <div className='legal-footer-text d-inline-block col-md-5'>
            <ul className='list-unstyled list-group list-group-horizontal'>
                <li className='p-2'>Terms & Conditions</li>
                <li className='p-2'>Privacy</li>
                <li className='p-2'>Code of Ethics</li>
            </ul>
        </div>
        </Row>
    </Container>
    )
}

export default LegalFooter