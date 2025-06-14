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
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
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
  padding: 3px;
  border-radius: 20px;
  width: 300px;
  height: 400px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px 5px rgba(255, 0, 255, 0.4);
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

const CertTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CertIssuer = styled.p`
  font-size: 16px;
  color: #aaaaaa;
`;

const CertDate = styled.p`
  font-size: 14px;
  text-align: right;
  color: #888;
`;

const certifications = [
  { title: "Full Stack Developer", issuer: "Coursera", date: "Jan 2024" },
  { title: "Machine Learning", issuer: "Stanford", date: "Feb 2024" },
  { title: "Cloud Computing", issuer: "Google Cloud", date: "Mar 2024" },
  { title: "UI/UX Design", issuer: "Adobe", date: "Apr 2024" },
  { title: "Cyber Security", issuer: "EC-Council", date: "May 2024" },
  { title: "AI Fundamentals", issuer: "IBM", date: "Jun 2024" },
];

const Certification = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Here are some of my most recent and valuable certifications.</Desc>
        <CardContainer>
          {certifications.map((cert, index) => (
            <CardOuter key={index}>
              <CardInner>
                <div>
                  <CertTitle>{cert.title}</CertTitle>
                  <CertIssuer>{cert.issuer}</CertIssuer>
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
