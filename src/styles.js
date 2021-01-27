import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledSkills = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const StyledContact = styled(StyledAbout)`
  min-height: 30vh;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledDescriptionSkills = styled(StyledDescription)`
  flex: 2;
`;

export const StyledDescriptionContact = styled(StyledDescription)`
  flex: 2;
  align-items: right;
  text-align: right;
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export const StyledImageContact = styled(StyledImage)`
  img {
    width: 100%;
    height: 40vh;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  flex-basis: 20rem;
  .top {
    display: flex;
    align-items: center;

    h3 {
      background: white;
      padding: 0.3rem;
      color: #1b1b1b;
      border-radius: 0.2rem;
    }

    .icon {
      color: #23d997;
      margin-right: 1rem;
    }
  }
`;

export const StyledContactButton = styled.a`
  background: transparent;
  transition: 0.4s;
  padding: 0.7rem;
  margin: 1rem 0rem 1rem 1rem;
  border: 3px solid #23d997;
  color: #23d997;
  text-decoration: none;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

export const StyledContactButtons = styled.div`
  display: block;
`;
