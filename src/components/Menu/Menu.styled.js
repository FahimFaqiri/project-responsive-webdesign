import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  // text-align: center;
  // padding: 2rem;
  margin-top: 25%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  .menu-block-links {
    width: 100%;
    margin-top: 10%;
  }

  .link-1 {
    width: 100%;
    text-align: left;
    padding: 15px 30px;
  }

  .link-1:hover {
    background-color: ${({ theme }) => theme.primaryBtnHover};
  }

  .link-1:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.primaryBtnHover};
  }

  i {
    margin-right: 25px;
  }

  a {
    // font-size: 2rem;
    font-size: 1rem
    text-transform: uppercase;
    // padding: 2rem 0;
    // font-weight: bold;
    text-align: left;
    font-weight: 400;
    // letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.1rem;
      // text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
