import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #35426d;
`;

const Link = styled.a`
  text-decoration: none;
  color: #35426d;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
  justify-content: space-between;
`;

const CategoryCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  flex: 1 1 22%; /* Default width (approximately 4 items per row) */
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex: 1 1 30%; /* 3 items per row */
  }

  @media (max-width: 900px) {
    flex: 1 1 45%; /* 2 items per row */
  }

  @media (max-width: 600px) {
    flex: 1 1 100%; /* 1 item per row */
  }
`;

const CategoryName = styled.h3`
  font-size: 18px;
  color: #393939;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Experts = styled.p`
  font-size: 14px;
`;

const SkillSection = () => {
  const categories = [
    { name: 'Development & IT', rating: '4.85 / 5', Experts: '1853 Experts' },
    { name: 'AI Services', rating: '4.8 / 5', Experts: '294 Experts' },
    { name: 'Design & Creative', rating: '4.91 / 5', Experts: '968 Experts' },
    { name: 'Sales & Marketing', rating: '4.77 / 5', Experts: '392 Experts' },
    {
      name: 'Writing & Translation',
      rating: '4.92 / 5',
      Experts: '505 Experts',
    },
    {
      name: 'Admin & Customer Support',
      rating: '4.77 / 5',
      Experts: '508 Experts',
    },
    {
      name: 'Finance & Accounting',
      rating: '4.79 / 5',
      Experts: '214 Experts',
    },
    {
      name: 'Engineering & Architecture',
      rating: '4.85 / 5',
      Experts: '650 Experts',
    },
  ];

  return (
    <Container>
      <ContainerBox>
        <CategoryContainer>
          <Title className="manrope-semibold">Browse talent by category</Title>
          <p className="manrope-regular">
            Looking for work? <Link href="#">Browse experts</Link>
          </p>
          <FlexContainer className="manrope-regular">
            {categories.map((category, index) => (
              <CategoryCard key={index}>
                <CategoryName className="manrope-semibold">
                  {category.name}
                </CategoryName>
                <Rating>★ {category.rating}</Rating>
                <Experts>{category.Experts}</Experts>
              </CategoryCard>
            ))}
          </FlexContainer>
        </CategoryContainer>
      </ContainerBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2.25px;
  display: flex;
  flex-wrap: wrap;
`;

export default SkillSection;
