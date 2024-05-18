import { Button,Row,Col, Container, Input } from "reactstrap";
// import banner from '../Images/banner.png';
 
export const SharePost = ()=>{
    return(
        <>
        {/* Take 3 rows */}
        <Container>
            <Row>
                {/* <img src={banner} /> */}
            </Row>
            <Row>
                <h3>Share.Connect.</h3>
            </Row>
            <Row>
                <Col md="9">
                <Input type="textarea" />
                </Col>
 
                <Col>
                <Button>Post</Button>
                </Col>
            </Row>
        </Container>
        </>
    );
}