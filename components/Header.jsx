import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: 2px solid black;
`;

const LinkWrapper = styled.div`
  margin: auto;
  display: flex;
`;

const NavButton = styled.div`
  color: black;
  padding: 1rem;
  border: 1px solid lightgray;
  cursor: pointer;
`;

const Header = () => (
  <Wrapper>
    <LinkWrapper>
      <Link href="/">
        <NavButton>Home</NavButton>
      </Link>
      <Link href="/about">
        <NavButton>About</NavButton>
      </Link>
    </LinkWrapper>
  </Wrapper>
);

export default Header;
