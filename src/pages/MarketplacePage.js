import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Corrected path
import { Link } from 'react-router-dom';

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff, #f7f4ee, #e8e2d3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #b58d6a;
  font-family: 'Cormorant Garamond', serif;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #b58d6a;
`;

const Logo = styled.img`
  width: 150px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1.2rem;
  a {
    color: #b58d6a;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 50px 20px;
  animation: ${fadeInUp} 1.5s ease forwards;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  color: rgb(0, 0, 0);
  font-weight: bold;
`;

const ProductSlider = styled.div`
  width: 80%;
  margin: 50px auto;
`;

const ProductCard = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #b58d6a;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  color: #fff;
  position: relative;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ProductName = styled.h2`
  font-size: 1.8rem;
  margin-top: 15px;
  color: #b58d6a;
`;

const PriceTag = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #b58d6a;
  font-size: 1.5rem;
  color: #000;
  display: inline-block;
  margin-top: 10px;
`;

const CryptoTag = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #e0cf97;
`;

const BuyButton = styled.button`
  background: linear-gradient(135deg, #b58d6a, #d4a984);
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(181, 141, 106, 0.8);
  }
`;

// Mock Data
const products = [
  { id: 1, name: 'Stoic Silk Jacket', image: '/item1.png', price: '$2,500', cryptoPrice: '1,100 XRP' },
  { id: 2, name: 'Luxury Golden Sneakers', image: '/item2.png', price: '$1,800', cryptoPrice: '800 XRP' },
  { id: 3, name: 'Elite Leather Bag', image: '/item3.png', price: '$4,200', cryptoPrice: '2,000 XRP' },
  { id: 4, name: 'Stoic Monogram Hat', image: '/item4.png', price: '$950', cryptoPrice: '420 XRP' },
];

// Main Component
const MarketplacePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <Container>
      <Header>
        <Logo src="/stoic-logo.png" alt="Stoic Logo" />
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/vault">Vault</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/stoic-club">Stoic Club</Link>
        </NavLinks>
      </Header>
      <HeroSection>
        <HeroTitle>Stoic Verse – The Marketplace of Exclusivity</HeroTitle>
        <p>Explore and own the most exclusive fashion items, authenticated as NFTs.</p>
      </HeroSection>
      <ProductSlider>
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <PriceTag>{product.price}</PriceTag>
              <CryptoTag>or {product.cryptoPrice}</CryptoTag>
              <BuyButton>Buy Now</BuyButton>
            </ProductCard>
          ))}
        </Slider>
      </ProductSlider>
    </Container>
  );
};

export default MarketplacePage;
