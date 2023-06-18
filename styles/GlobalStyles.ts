import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    font-family: "SUIT";
    word-break: keep-all;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust : none;
    -ms-text-size-adjust : none;
    -moz-text-size-adjust : none;
    -o-text-size-adjust : none;
  }
  body {
    overflow-x:hidden;
  }
  input {
    font-family: "SUIT";
  }
  textarea {
    font-family: "SUIT";
  }
  /* 큐레이터 음향기기 추천 페이지 드롭다운 */
  a.active {
    text-decoration: none;
  }


`;
