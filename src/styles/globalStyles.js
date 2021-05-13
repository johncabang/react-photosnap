import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 25px;
}

h1 {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17;
  font-weight: bold;

}

h2 {
  font-size: 24px;
  line-height: 25px;
  font-weight: bold;

}

h3 {
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
}

h4 {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2;
  font-weight: bold;
}
`;
export default GlobalStyles;
