function ProductCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Product.image} alt={Product.name} />
        <Card.Body>
          <Card.Title>{Product.name}</Card.Title>
          <Card.Text>{Product.description}</Card.Text>
          <Card.Text>Price: ${Product.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProductCard;
  