
import React from "react";
import styled from "styled-components";

// --- Gradient Definitions ---
// You can customize these color combinations to your heart's content!

const TitleGradient = styled.div`
  background: linear-gradient(
    90deg,
    #ff6b6b,
    #ffe66d,
    #6bccf9
  ); /* Example: Red-Yellow-Blue for Title */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const DateGradient = styled.div`
  background: linear-gradient(
    90deg,
    #a8dadc,
    #457b9d
  ); /* Example: Teal-Dark Blue for Date */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const DescriptionGradient = styled.div`
  background: linear-gradient(
    90deg,
    #e74c3c,
    #f39c12,
    #2ecc71
  ); /* Example: Red-Orange-Green for Description */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

// const TagGradient =  styled.div`
//   font-size: 12px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.primary};
//   background-color: ${({ theme }) => theme.primary + 15};
//   padding: 2px 8px;
//   border-radius: 10px;
//  `;

// --- End of Gradient Definitions ---

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
// Title now uses TitleGradient
const Title = styled(TitleGradient)`
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// Date now uses DateGradient
const Date = styled(DateGradient)`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
// Description now uses DescriptionGradient
const Description = styled(DescriptionGradient)`
  font-weight: 400;
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          // Apply the gradient to each individual tag text
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;