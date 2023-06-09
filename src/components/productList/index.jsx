import React, { useEffect } from "react";
import { API_URL } from "../../shared/urls";
import { useCart } from "../../hooks/useCart";
import Product from "../product/index";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductsList() {
  const { products, fetchProducts, isLoading, hasError } = useCart();

  useEffect(() => {
    fetchProducts(API_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (hasError) {
    return <p>There was an error fetching the products.</p>;
  }

  return (
    <Container>
      <Row
        xs={1}
        md={2}
        className="g-4 d-flex justify-content-center"
        style={{ gap: "1rem", marginTop: "20px" }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default ProductsList;
