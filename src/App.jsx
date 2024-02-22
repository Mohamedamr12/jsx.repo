
import product from './product.js';
import description from './components/description.js';
import Name from './components/Name.js';
import price from './components/price.js';
import image from './components/image.js';
import { Card } from 'react-bootstrap';
import ProductCard from './components/card.js';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
}
function ProductComponent() {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default App
