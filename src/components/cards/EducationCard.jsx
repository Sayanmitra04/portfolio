// import React from "react";
// import styled from "styled-components";
// import { VerticalTimelineElement } from "react-vertical-timeline-component";

// const Top = styled.div`
//   width: 100%;
//   display: flex;
//   max-width: 100%;
//   gap: 12px;
// `;
// const Image = styled.img`
//   height: 50px;
//   border-radius: 10px;
//   margin-top: 4px;

//   @media only screen and (max-width: 768px) {
//     height: 40px;
//   }
// `;
// const Body = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const Name = styled.div`
//   font-size: 18px;
//   font-weight: 600px;
//   color: ${({ theme }) => theme.text_primary + 99};

//   @media only screen and (max-width: 768px) {
//     font-size: 14px;
//   }
// `;
// const Degree = styled.div`
//   font-size: 14px;
//   font-weight: 500px;
//   color: ${({ theme }) => theme.text_secondary + 99};

//   @media only screen and (max-width: 768px) {
//     font-size: 12px;
//   }
// `;
// const Date = styled.div`
//   font-size: 12px;
//   font-weight: 400px;
//   color: ${({ theme }) => theme.text_secondary + 80};

//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;
// const Grade = styled.div`
//   font-size: 14px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   @media only screen and (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Description = styled.div`
//   width: 100%;
//   font-size: 15px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary + 99};
//   margin-bottom: 10px;
//   @media only screen and (max-width: 768px) {
//     font-size: 12px;
//   }
// `;
// const Span = styled.div``;

// const EducationCard = ({ education }) => {
//   return (
//     <VerticalTimelineElement
  
//       contentStyle={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "12px",
//         background: "#1d1836",
//         color: "#fff",
//         boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
//         // backdropFilter: "blur(3px) saturate(106%)",
//         backgroundColor: "rgba(17, 25, 40, 0.83)",
//         border: "1px solid rgba(255, 255, 255, 0.125)",
//         borderRadius: "6px",
//       }}
//       contentArrowStyle={{
//         borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
//       }}
//       date={education.date}
//     >
//       <Top>
//         <Image src={education.img} />
//         <Body>
//           <Name>{education.school}</Name>
//           <Degree>{education.degree}</Degree>
//           <Date>{education.date}</Date>
//         </Body>
//       </Top>
//       <Grade>
//         <b>Grade :</b>
//         {education.grade}
//       </Grade>
//       <Description>
//         <Span>{education.desc}</Span>
//       </Description>
//     </VerticalTimelineElement>
//   );
// };

// export default EducationCard;

import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// --- Different Gradient Definitions ---

const NameGradient = styled.div`
  background: linear-gradient(
    45deg,
rgb(204, 115, 115),
    #ffe66d
  ); /* Red to Yellow gradient for Name */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const DegreeGradient = styled.div`
  background: linear-gradient(
    45deg,
rgb(202, 249, 107),
    #a8dadc
  ); /* Light Blue to Teal gradient for Degree */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

// const DateGradient = styled.div`
//   background: linear-gradient(
//     45deg,
//     #9b59b6,
//     #3498db
//   ); /* Purple to Blue gradient for Date */
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
// `;

const GradeGradient = styled.div`
  background: linear-gradient(
    45deg,
rgb(233, 195, 224),
    #f1c40f
  ); /* Green to Yellow gradient for Grade */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const DescriptionGradient = styled.div`
  background: linear-gradient(
    45deg,
    #fd7272,
    #f8a5c2,
    #ffd32a
  ); /* Multiple color gradient for Description */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
// --- End of Different Gradient Definitions ---

const Name = styled(NameGradient)`
  font-size: 18px;
  font-weight: 600px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled(DegreeGradient)`
  font-size: 14px;
  font-weight: 500px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
// const Date = styled(DateGradient)`
//   font-size: 12px;
//   font-weight: 400px;

//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;
const Grade = styled(GradeGradient)`
  font-size: 14px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled(DescriptionGradient)`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div``;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={education.date}
    >
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          {/* <Date>{education.date}</Date> */}
        </Body>
      </Top>
      <Grade>
        <b>Grade : </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;