import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Particles from 'react-tsparticles';

// Animations
const backgroundGlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 20px rgba(181, 141, 106, 0.5); }
  50% { box-shadow: 0 0 40px rgba(181, 141, 106, 0.9); }
  100% { box-shadow: 0 0 20px rgba(181, 141, 106, 0.5); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000, #222222, #000000);
  background-size: 400% 400%;
  animation: ${backgroundGlow} 15s ease infinite;
  color: #b58d6a;
  font-family: 'Cormorant Garamond', serif;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

const GlowEffect = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glowPulse} 3s infinite ease-in-out;
  background: radial-gradient(circle, rgba(181, 141, 106, 0.2) 0%, transparent 70%);
  z-index: -1;
`;

const AnimatedCrescent = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 50px;
  animation: ${spin} 20s linear infinite;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;
  &:hover {
    transform: scale(1.1);
  }
`;

const FadeInText = styled.div`
  font-size: ${(props) => props.size || '2rem'};
  font-weight: 400;
  color: #b58d6a;
  animation: ${fadeInUp} 1s ${(props) => props.delay || '0s'} ease forwards;
  opacity: 0;
  text-align: center;
  margin-bottom: ${(props) => props.margin || '20px'};
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: rgba(181, 141, 106, 0.9);
  font-style: italic;
  animation: ${fadeInUp} 1.5s 2s ease forwards;
  opacity: 0;
  text-align: center;
`;

// Main Component
const LoginPage = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleTouch = () => {
    setUser({ rfid: 'dummyRFID', name: 'Stoic Member' });
    setAccessGranted(true);
    setTimeout(() => {
      navigate('/vault');
    }, 3000);
  };

  return (
    <Container>
      <Particles
        options={{
          fullScreen: false,
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            color: { value: '#b58d6a' },
            opacity: { value: 0.5 },
            move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'bounce' } },
          },
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <GlowEffect />
      <AnimatedCrescent src="/crescent-moon.png" alt="Tap to Access" onClick={handleTouch} />
      {!accessGranted ? (
        <>
          <FadeInText size="2rem" delay="0.5s">Enter The Realm Of Exclusivity, Ownership and High-Class Fashion</FadeInText>
          <FadeInText size="1.8rem" delay="1.5s" margin="40px">Own Your World!</FadeInText>
        </>
      ) : (
        <SubHeading delay="0s">Welcome To The Top 0.1 %...</SubHeading>
      )}
    </Container>
  );
};

export default LoginPage;
