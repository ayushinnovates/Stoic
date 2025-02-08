import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(181, 141, 106, 0.5); }
  50% { box-shadow: 0 0 30px rgba(181, 141, 106, 0.9); }
  100% { box-shadow: 0 0 10px rgba(181, 141, 106, 0.5); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff, #f9f6f1, #e8e2d3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #b58d6a;
  font-family: 'Cormorant Garamond', serif;
  overflow: hidden;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #b58d6a;
`;

const ProfileInfo = styled.div`
  font-size: 1.2rem;
  color: #000;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: rgb(0, 0, 0);
  text-align: center;
  animation: ${fadeInUp} 1.5s ease forwards;
  opacity: 0;
  letter-spacing: 1.5px;
`;

const CarouselContainer = styled.div`
  width: 80%;
  .slick-prev, .slick-next {
    color: #b58d6a;
    font-size: 2rem;
  }
  .slick-slide img {
    border: 4px solid rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #b58d6a;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  color: #fff;
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #b58d6a;
  color: #fff;
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 10px;
`;

const ItemName = styled.h2`
  font-size: 1.8rem;
  margin-top: 15px;
  color: #b58d6a;
`;

const PriceContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #b58d6a;
  font-size: 1.5rem;
  color: #000;
  display: inline-block;
  margin-top: 10px;
`;

const CryptoContainer = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #e0cf97;
`;

const GrowthMetric = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #4caf50;
`;

const FancyButton = styled.button`
  background: linear-gradient(135deg, #b58d6a, #d4a984);
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 3s infinite ease-in-out;
  margin-top: 50px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(181, 141, 106, 0.8);
  }
`;

// Mock Data
const ownedItems = [
  { id: 1, name: 'Stoic Womens Apsara Guipure Lace Dress', image: '/item1.png', price: '$1,200', cryptoPrice: '700 XRP', growth: '+15%' },
  { id: 2, name: 'Stoic Old Money Sweater', image: '/item2.png', price: '$900', cryptoPrice: '520 XRP', growth: '+12%' },
  { id: 3, name: 'Stoic Perennial Mens Bracelet', image: '/item3.png', price: '$36,750', cryptoPrice: '15,347 XRP', growth: '+10%' },
  { id: 4, name: 'Stoic Selene Etoil', image: '/item4.png', price: '$41,500', cryptoPrice: '17,329 XRP', growth: '+20%' },
];

// Main Component
const VaultPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(ownedItems);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
  };

  const handleRedirect = () => {
    navigate('/marketplace');
  };

  return (
    <Container>
      <ProfileSection>
        <ProfileImage src="/profile-pic.jpg" alt="User Profile" />
        <ProfileInfo>
          <div><strong>Welcome:</strong> Ayush Malik</div>
          <div><strong>Membership Level:</strong> Emperor</div>
        </ProfileInfo>
      </ProfileSection>
      <Title>The Vault of Winners! - Your Collection</Title>
      <CarouselContainer>
        <Slider {...settings}>
          {items.map((item) => (
            <Card key={item.id}>
              <Badge>NFT Owned</Badge>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
              <ItemName>{item.name}</ItemName>
              <PriceContainer>{item.price}</PriceContainer>
              <CryptoContainer>or {item.cryptoPrice}</CryptoContainer>
              <GrowthMetric>Projected Growth: {item.growth}</GrowthMetric>
            </Card>
          ))}
        </Slider>
      </CarouselContainer>
      <FancyButton onClick={handleRedirect}>
        Explore Stoic Verse →
      </FancyButton>
    </Container>
  );
};

export default VaultPage;
