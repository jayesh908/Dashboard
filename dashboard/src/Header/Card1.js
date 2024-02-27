//nimport Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fb from '../fb.png'
import twt from '../twt.png'
import link from '../link.png'
import cal from '../cal.png'
function Card1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fb} />
      <Card.Body>
        <Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <div>
              <h5>89k</h5>
              <h6>FRIENDS</h6>
            </div>
            <div> 
              <h5>459</h5>
              <h6>FEEDS</h6></div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Card2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={twt} style={{ width: "286px", height: "161px" }} />
      <Card.Body>
        <Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <div><h5>973k</h5>
              <h6>FOLLOWERS</h6>
            </div>
            <div><h5>1459</h5>
              <h6>TWEETSS</h6></div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function Card3() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={link} style={{ width: "286px", height: "161px" }} />
      <Card.Body>
        <Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <div><h5>500</h5>
              <h6>CONTACTS</h6>
            </div>
            <div><h5>1.292</h5>
              <h6>FEEDS</h6></div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function Card4() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cal} style={{ width: "286px", height: "161px" }} />
      <Card.Body>
        <Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <div><h5>12+</h5>
              <h6>EVENTS</h6>
            </div>
            <div>
              <h5>4</h5>
              <h6>MEETINGS</h6></div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { Card1, Card2, Card3, Card4 };