import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  margin: 100px auto;
  border-radius: 20px;
  width: 800px;
  align-self: center;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const StyledCard = styled.div`
  width: 33%;
  background-color: ${(props) => props.theme.colors.brightOrange};
  display: flex;
  flex-direction: column;
  padding: 40px 60px 40px 40px;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const StyledOrangeCard = styled(StyledCard)`
  background-color: ${(props) => props.theme.colors.brightOrange};
`;
export const StyledDarkCyanCard = styled(StyledCard)`
  background-color: ${(props) => props.theme.colors.darkCyan};
`;
export const StyledVeryDarkCyanCard = styled(StyledCard)`
  background-color: ${(props) => props.theme.colors.veryDarkCyan};
`;

export const StyledCardHeading = styled.h2`
  font-family: 'Big Shoulders Display', cursive;
  font-size: 40px;
  color: ${(props) => props.theme.colors.veryLightGray};
  margin: 30px 0;
`;

export const StyledCardParagraph = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  color: #fff;
  font-size: 15px;
  font-weight: 200;
  color: ${(props) => props.theme.colors.veryLightGray};
`;

export const StyledCardButton = styled.button`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 15px;
  border: none;
  background-color: ${(props) => props.theme.colors.veryLightGray};

  border-radius: 25px;
  padding: 15px 0;
  width: 80%;
  margin-top: 65px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.veryLightGray};
    padding: 13px 0;
    color: ${(props) => props.theme.colors.veryLightGray};
  }
`;

export const StyledOrangeButton = styled(StyledCardButton)`
  color: ${(props) => props.theme.colors.brightOrange};

  &:hover {
    background-color: ${(props) => props.theme.colors.brightOrange};
  }
`;

export const StyledDarkCyanButton = styled(StyledCardButton)`
  color: ${(props) => props.theme.colors.darkCyan};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkCyan};
  }
`;

export const StyledVerDarkCyanButton = styled(StyledCardButton)`
  color: ${(props) => props.theme.colors.veryDarkCyan};

  &:hover {
    background-color: ${(props) => props.theme.colors.veryDarkCyan};
  }
`;
