import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import _ from "lodash";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid gray;
  padding: 3rem;
`;

const Article = props => (
  <Container>
    <h1>{props.show.name}</h1>
    <p>{_.get(props, "show.summary", "").replace(/<[/]?p>/g, "")}</p>
    <img src={_.get(props, "show.image.medium", "")} />
  </Container>
);

Article.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Article;
