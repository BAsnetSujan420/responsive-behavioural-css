import styled from 'styled-components';

const ProductContainer = styled.div`
  container-type: inline-size;
  width: 100%;
`;

const Product = styled.div`
  background: white;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  display: grid;
  gap: 12px;
  padding: 14px;
  text-align: center;

  @container (max-width: 220px) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-align: left;
  }

  @container (min-width: 360px) {
    grid-template-columns: 120px 1fr;
    align-items: center;
    text-align: left;
    padding: 16px;
  }

  @container (min-width: 520px) {
    grid-template-columns: 160px 1fr auto;
    align-items: center;
    padding: 20px;
    gap: 18px;
  }

  @container (min-width: 720px) {
    grid-template-columns: 180px 1fr;
    padding: 26px;
  }
`;

const Figure = styled.figure`
  margin: 0;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    max-width: 180px;
    border-radius: 12px;
    object-fit: cover;
    display: block;
  }

  @container (max-width: 220px) {
    img {
      width: 64px;
      height: 64px;
      border-radius: 10px;
    }
  }

  @container (min-width: 360px) {
    img {
      width: 120px;
      height: 120px;
    }
  }

  @container (min-width: 520px) {
    img {
      width: 160px;
      height: 160px;
    }
  }

  @container (min-width: 720px) {
    img {
      width: 180px;
      height: 180px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: gray;

  @container (max-width: 220px) {
    font-size: 0.85rem;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    letter-spacing: 0;
  }

  @container (min-width: 520px) {
    font-size: 1.25rem;
  }

  @container (min-width: 720px) {
    font-size: 1.5rem;
  }
`;

const Price = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);

  @container (max-width: 220px) {
    font-size: 0.85rem;
    margin-top: 2px;
  }

  @container (min-width: 520px) {
    font-size: 1.05rem;
  }
`;

const Desc = styled.p`
  margin: 10px 0 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.65);

  @container (max-width: 285px) {
    display: none;
  }

  @container (min-width: 360px) {
    display: block;
  }

  @container (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 55ch;
  }
`;

const BadgeRow = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

  @container (max-width: 285px) {
    display: none;
  }

  @container (min-width: 360px) {
    justify-content: flex-start;
  }
`;

const Badge = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);

  @container (min-width: 520px) {
    font-size: 0.8rem;
  }
`;

const ButtonRow = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;

  @container (max-width: 220px) {
    display: none;
  }

  @container (min-width: 360px) {
    grid-template-columns: 1fr 1fr;
  }

  @container (min-width: 520px) {
    margin-top: 0;
    grid-template-columns: 120px 140px;
    align-self: center;
  }

  @container (min-width: 720px) {
    grid-template-columns: 140px 160px;
  }
`;

const OutlineButton = styled.button`
  height: 44px;
  border-radius: 10px;
  font-weight: 800;
  border: 2px solid rgba(0, 0, 0, 0.25);
  background: white;
  color: black;
  cursor: pointer;

  @container (max-width: 20rem) {
    display: none;
  }

  @container (min-width: 720px) {
    height: 50px;
    font-size: 1rem;
  }
`;

const PrimaryButton = styled.button`
  height: 44px;
  border-radius: 10px;
  font-weight: 900;
  border: none;
  background: #1d2bff;
  color: white;
  cursor: pointer;

  @container (min-width: 720px) {
    height: 50px;
    font-size: 1rem;
  }
`;

function ProductCard({ title, price, desc, img }) {
  return (
    <ProductContainer>
      <Product>
        <Figure>
          <img src={img} alt={title} />
        </Figure>

        <Content>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <Desc>{desc}</Desc>

          <BadgeRow>
            <Badge>Indoor</Badge>
            <Badge>Low Care</Badge>
            <Badge>Trending</Badge>
          </BadgeRow>

          <ButtonRow>
            <OutlineButton>Wishlist</OutlineButton>
            <PrimaryButton>Add</PrimaryButton>
          </ButtonRow>
        </Content>
      </Product>
    </ProductContainer>
  );
}

export default ProductCard;
