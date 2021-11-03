import {
  StyledContainer,
  StyledCardHeading,
  StyledCardParagraph,
  StyledOrangeCard,
  StyledDarkCyanCard,
  StyledVeryDarkCyanCard,
  StyledOrangeButton,
  StyledDarkCyanButton,
  StyledVerDarkCyanButton,
} from './Card.styled';
import CarIcon from '../Icons/CarIcon';
import SuvIcon from '../Icons/SuvIcon';
import LuxIcon from '../Icons/LuxIcon';

const Card = () => {
  return (
    <StyledContainer>
      <StyledOrangeCard>
        <CarIcon />
        <StyledCardHeading>SEDANS</StyledCardHeading>
        <StyledCardParagraph>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </StyledCardParagraph>
        <StyledOrangeButton>Learn More</StyledOrangeButton>
      </StyledOrangeCard>
      <StyledDarkCyanCard>
        <SuvIcon />
        <StyledCardHeading>SUVS</StyledCardHeading>
        <StyledCardParagraph>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </StyledCardParagraph>
        <StyledDarkCyanButton>Learn More</StyledDarkCyanButton>
      </StyledDarkCyanCard>
      <StyledVeryDarkCyanCard>
        <LuxIcon />
        <StyledCardHeading>LUXURY</StyledCardHeading>
        <StyledCardParagraph>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </StyledCardParagraph>
        <StyledVerDarkCyanButton>Learn More</StyledVerDarkCyanButton>
      </StyledVeryDarkCyanCard>
    </StyledContainer>
  );
};

export default Card;
