import styled from "styled-components";

const red = "#be0f34";

// Wrappers

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.padding ? props.padding : "95px 40px 80px")};
  margin: auto;
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ""});
  background-size: initial;
  background-position: center top;
  background-repeat: no-repeat;

  @media (max-width: 1048px) {
    padding: ${props => (props.padding ? props.padding : "60px 40px 80px")};
  }

  @media (max-width: 480px) {
    background-image: url(/static/img/theme/BG_1_mobile.png);
    background-size: 100%;
    background-position: center -50px;
    padding: ${props => (props.padding ? props.padding : "50px 20px")};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : "")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  width: ${props => (props.width ? props.width : "100%")};
  min-width: ${props => (props.minWidth ? props.minWidth : "")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : "")};
  position: ${props => (props.position ? props.position : "")};
  flex-wrap: ${props => props.flexWrap || ""};
  height: ${props => (props.height ? props.height : "")};
  margin: ${props => (props.margin ? props.margin : "")};
  padding: ${props => (props.padding ? props.padding : "")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`;

const BigTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Gotham, Arial, sans-serif;
  font-size: 38px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: 0.38px;
  color: black;
  max-width: ${props => (props.width ? props.width : "")};
  margin: auto;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-family: Gotham, Arial, sans-serif;
  font-size: 38px;
  line-height: 1.21;
  color: black;
  font-weight: 500;
`;

const Subtitle = styled.h3`
  margin: ${props => (props.margin ? props.margin : "30px 0 0 0")};
  font-family: Gotham, Arial, sans-serif;
  font-size: 22px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: ${props => (props.red ? red : "black")};
`;

// Buttons

const Button = styled.button`
  font-family: Gotham, Arial, sans-serif;
  background-color: #be0f34;
  color: #ffffff;
  font-weight: normal;
  line-height: 1.83;
  letter-spacing: 1.2px;
  font-size: 12px;
  padding: 14px 30px;
  border: none;
  margin: ${props => (props.margin ? props.margin : "20px 0")};
  line-height: 1.1;
  width: ${props => (props.width ? props.width : "")};
  text-transform: uppercase;
  :hover {
    background-color: #ffced8;
    color: #be0f34;
    cursor: pointer;
  }
  :disabled {
    background-color: #e0e0e0;
    color: #919191;
    cursor: initial;
  }
`;

const ButtonSecondary = styled.button`
  font-family: Gotham, Arial, sans-serif;
  background-color: transparent;
  border: solid 2px #be0f34;
  color: #be0f34;
  font-weight: 600;
  font-size: 11px;
  padding: 8px 30px;
  margin: ${props => (props.margin ? props.margin : "20px 0")};
  line-height: 1.83;
  letter-spacing: 1.2px;
  width: ${props => (props.width ? props.width : "")};
  text-transform: uppercase;
  :hover {
    color: #ffced8;
    cursor: pointer;
    border: solid 2px #ffced8;
  }
  :disabled {
    color: #e0e0e0;
    border: solid 2px #e0e0e0;
  }
`;

// Texts

const Paragraph = styled.p`
  font-family: ${props =>
    props.font
      ? "ClarinsUnlimited, Satisfy, sans-serif"
      : "Gotham-Book, Arial, sans-serif"};
  font-size: 15px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;

  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
  margin-top: ${props => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
  margin-right: ${props => (props.marginRight ? props.marginRight : "")};
  margin: ${props => (props.margin ? props.margin : "")};

  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.red ? red : "black")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
`;

const SmallParagraph = styled.p`
  font-family: Gotham-Book, Arial, sans-serif;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.55;
  letter-spacing: normal;
  margin-top: ${props => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
  text-align: ${props => props.textAlign || "left"};
  min-width: ${props => props.minWidth || "0"};
  color: ${props => (props.red ? red : "black")};
  width: ${props => props.width || "auto"};
`;

export {
  SmallParagraph,
  Paragraph,
  ButtonSecondary,
  Button,
  Subtitle,
  Title,
  BigTitle,
  Container,
  MainContainer
};
