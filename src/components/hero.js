import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh - 2 * var(--header-height));
  ${mq.gt.sm} {
    min-height: calc(100vh - var(--header-height));
  }
`;

const StyledContainer = styled.div`
  background-image: linear-gradient(to bottom right, rgba(46, 49, 49, 0.6), rgba(0, 0, 0, 0.6));
  padding: 2em;
  border-radius: 3em;
  border: 2px solid rgba(189, 195, 199, 0.3);
  backdrop-filter: blur(20px);
`

const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description } = data;

  return (
    <StyledHeroSection>
      <StyledContainer>
        <StyledIntroduction>{introduction}</StyledIntroduction>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledTagline>{tagline}</StyledTagline>
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
      </StyledContainer>
      <ScrollIndicator />
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
