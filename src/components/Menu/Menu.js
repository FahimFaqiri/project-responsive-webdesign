import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

// function Menu({ open }) {
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="menu-block-links">
        <div className="link-1">
          <a href="/">
            <i class="fa fa-automobile"></i>
            {/* <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span> */}
            About us
          </a>
        </div>
        <div className="link-1">
          <a href="/">
            {/* <span role="img" aria-label="price">
          &#x1f4b8;
        </span> */}
            <i class="fa fa-tags"></i>
            Pricing
          </a>
        </div>
        <div className="link-1">
          <a href="/">
            {/* <span role="img" aria-label="contact">
          &#x1f4e9;
        </span> */}
            <i class="fa fa-comments"></i>
            Contact
          </a>
        </div>
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
