import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h3 className='text-white'>Links</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='#'>Wash</Link>
                            </li>
                            <li>
                                <Link to='#'>Victor Hi Pro Plus</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5 className='text-white'>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='https://www.instagram.com/murkdoggy/'
                            target='blank'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/murkdoggy'
                            target='blank'
                        >
                            <i className='fa fa-facebook' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+15624483804'
                        >
                            <i className='fa fa-phone' /> +1 (562) 448-3804
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:murkdoggy@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> murkdoggy@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;