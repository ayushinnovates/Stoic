import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ForceGraph2D } from 'react-force-graph';

// Background Animation
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff, #f7f4ee, #e8e2d3);
  background-size: 400% 400%;
  animation: ${gradientMove} 20s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  font-family: 'Cormorant Garamond', serif;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 2px;
  animation: ${keyframes`
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  `} 1.2s ease forwards;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 600px;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid #b58d6a;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const NodeDetails = styled.div`
  margin-top: 20px;
  padding: 30px;
  background: linear-gradient(135deg, #000000, #222222);
  color: #fff;
  border-radius: 15px;
  border: 2px solid #b58d6a;
  font-size: 1.5rem;
  text-align: center;
  animation: ${keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `} 0.5s ease forwards;
  box-shadow: 0 0 20px rgba(181, 141, 106, 0.8);
`;

const NodeHighlight = styled.span`
  color: #e0cf97;
  font-weight: bold;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #b58d6a, #d4a984);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Mock Data for the Network Graph
const mockData = {
  nodes: [
    { id: 1, name: 'Ayush Malik', membership: 'Emperor', ownedApparel: '3 Items' },
    { id: 2, name: 'Sophia Reed', membership: 'Elite', ownedApparel: '5 Items' },
    { id: 3, name: 'Alexander Grey', membership: 'Prestige', ownedApparel: '2 Items' },
    { id: 4, name: 'Olivia Clark', membership: 'Emperor', ownedApparel: '7 Items' },
    { id: 5, name: 'Liam Knight', membership: 'Elite', ownedApparel: '4 Items' }
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 5 },
    { source: 4, target: 5 }
  ]
};

const StoicClubPage = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <Container>
      <Title>The Stoic Club – Your <GradientText>Exclusive</GradientText> Network</Title>
      <GraphContainer>
        <ForceGraph2D
          graphData={mockData}
          nodeAutoColorBy="membership"
          nodeLabel={(node) => `${node.name} - ${node.membership}`}
          onNodeHover={(node) => setHoveredNode(node)}
          nodeCanvasObject={(node, ctx) => {
            const label = node.name;
            const fontSize = 14;
            ctx.font = `${fontSize}px Cormorant Garamond`;
            ctx.fillStyle = node === hoveredNode ? '#e0cf97' : '#b58d6a';
            ctx.beginPath();
            ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText(label, node.x + 15, node.y + 5);
          }}
        />
      </GraphContainer>
      {hoveredNode && (
        <NodeDetails>
          <strong><NodeHighlight>{hoveredNode.name}</NodeHighlight></strong> <br />
          Membership Level: <NodeHighlight>{hoveredNode.membership}</NodeHighlight> <br />
          Owned Apparel: <NodeHighlight>{hoveredNode.ownedApparel}</NodeHighlight>
        </NodeDetails>
      )}
    </Container>
  );
};

export default StoicClubPage;
