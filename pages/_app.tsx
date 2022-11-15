import type { AppProps } from "next/app";
import colors from "../public/colors.json";
import { createGlobalStyle } from "styled-components";
import Layout from "../src/components/layout/layout";
import store from "../src/redux/store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  p {
    margin: 0;
    display: flex;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: ${colors.neutrals.light_gray};
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default MyApp;
