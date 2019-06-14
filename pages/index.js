import { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import Header from "../components/Header";
import Link from "next/link";
import styled from "styled-components";

import fetch from "isomorphic-unfetch";

const Button = styled.div`
  background: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

const newsArticles = [
  { title: "Trump wants to build a wall", id: 1 },
  { title: "SpaceX launches their 100th rocket", id: 2 },
  {
    title:
      "Red meat has officially been labeled as the equivalent of smoking as risk of diseases",
    id: 3
  }
];

const Index = props => {
  return (
    <html>
      <Head>
        <title>My Page Title</title>
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
        <div>
          <Header />
          <p>Hello Next.js</p>
          {props.shows.map(a => (
            <Link as={`/article/${a.id}`} href={`/article?title=${a.name}`}>
              <Button>{a.name}</Button>
            </Link>
          ))}
        </div>
      </body>
    </html>
  );
};

Index.getInitialProps = async function({ renderPage }) {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  const sheet = new ServerStyleSheet();
  const page = renderPage(App => props =>
    sheet.collectStyles(<App {...props} />)
  );
  console.log(page);
  const styleTags = sheet.getStyleElement();
  return { ...page, styleTags, shows: data.map(entry => entry.show) };
};

export default Index;
