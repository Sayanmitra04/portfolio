import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  background: linear-gradient(90deg, #00f0ff, #ff00e0, #00ffb2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  background: linear-gradient(90deg, #00ffd5, #ff9aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const CardOuter = styled.div`
  background: linear-gradient(135deg, #ff00cc, #3333ff, #00ffff);
  padding: 5px;
  border-radius: 20px;
  width: 320px;
  height: 420px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 0 10px #0ff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px 8px rgba(0, 255, 255, 0.4);
  }
`;

const CardInner = styled.div`
  background-color: #0a0a0a;
  border-radius: 18px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const CertImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid #333;
`;

const CertImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CertTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-top: 14px;
 background: linear-gradient(90deg, #00ffd5, #ff9aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CertDate = styled.p`
  font-size: 14px;
  text-align: right;
  color: #888;
`;

const certifications = [
  {
    title: 'Smart Bengal Hackathon',
    date: 'May 2025',
    image: 'https://i.ibb.co/tPKbPpHb/P5.png',
  },
  {
    title: 'Smart India Hackathon',
    date: 'Nov 2024',
    image: 'https://i.ibb.co/vxXMhjJ4/P4.png',
  },
  {
    title: 'SAP Hackfest',
    date: 'Apr 2025',
    image: 'https://i.ibb.co/7tBRxgw5/P6.png',
  },
  {
    title: 'Javascript Essentials',
    date: 'July 2023',
    image: 'https://i.ibb.co/wN1ZmQZD/P7.png',
  },
  {
    title: 'Javascript Advanced',
    date: 'April 2024',
    image: 'https://i.ibb.co/hGxrj5K/P8.png',
  },
  {
    title: 'Data Visualization',
    date: 'Jun 2023',
    image: 'https://i.ibb.co/GQRTcZ0k/P9.png',
  },
];

const Certification = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>My certifications reflect dedication to continuous learning and highlight key milestones in my journey.</Desc>
        <CardContainer>
          {certifications.map((cert, index) => (
            <CardOuter key={index}>
              <CardInner>
                <div>
                  <CertImageWrapper>
                    <CertImage src={cert.image} alt={cert.title} />
                  </CertImageWrapper>
                  <CertTitle>{cert.title}</CertTitle>
                </div>
                <CertDate>{cert.date}</CertDate>
              </CardInner>
            </CardOuter>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certification;
