import { React } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div>
      {/* <!-- Start Mainmenu Area  --> */}
      <div class={classes.container}>
        <div class={classes.header_navbar}>
          <div class="header-main-nav">
            {/* <!-- Start Mainmanu Nav --> */}
            <Row>
              <Container class="mainmenu-nav">
                <Row>
                  <Col md={3} class="mobile-nav-brand">
                    <a href="index.html" class="logo">
                      <img
                        src={require("../../images/logo-placeholder.png")}
                        alt="Site Logo"
                        width={"200px"}
                      />
                    </a>
                  </Col>
                  <Col md={9}>
                    <ul class={classes.mainmenu}>
                      <li class="menu-item-has-children">
                        <a className={classes.link_underline} href="#">
                          Home
                        </a>
                        {/* <ul class="axil-submenu">
                      <li>
                        <a href="index-1.html">Home - Electronics</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home - NFT</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home - Fashion</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home - Jewellery</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home - Furniture</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home - Multipurpose</a>
                      </li>
                    </ul> */}
                      </li>
                      <li class="menu-item-has-children">
                        <a className={classes.link_underline} href="#">
                          Shop
                        </a>
                        {/* <ul class="axil-submenu">
                      <li>
                        <a href="shop-sidebar.html">Shop With Sidebar</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop no Sidebar</a>
                      </li>
                      <li>
                        <a href="single-product.html">Product Variation 1</a>
                      </li>
                      <li>
                        <a href="single-product-2.html">Product Variation 2</a>
                      </li>
                      <li>
                        <a href="single-product-3.html">Product Variation 3</a>
                      </li>
                      <li>
                        <a href="single-product-4.html">Product Variation 4</a>
                      </li>
                      <li>
                        <a href="single-product-5.html">Product Variation 5</a>
                      </li>
                      <li>
                        <a href="single-product-6.html">Product Variation 6</a>
                      </li>
                      <li>
                        <a href="single-product-7.html">Product Variation 7</a>
                      </li>
                    </ul> */}
                      </li>
                      <li class="menu-item-has-children">
                        <a className={classes.link_underline} href="#">
                          Pages
                        </a>
                        {/* <ul class="axil-submenu">
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="my-account.html">Account</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign In</a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                    </ul> */}
                      </li>
                      <li>
                        <a
                          className={classes.link_underline}
                          href="about-us.html"
                        >
                          About
                        </a>
                      </li>
                      <li class="menu-item-has-children">
                        <a className={classes.link_underline} href="#">
                          Blog
                        </a>
                        {/* <ul class="axil-submenu">
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Standard Post</a>
                      </li>
                      <li>
                        <a href="blog-gallery.html">Gallery Post</a>
                      </li>
                      <li>
                        <a href="blog-video.html">Video Post</a>
                      </li>
                      <li>
                        <a href="blog-audio.html">Audio Post</a>
                      </li>
                      <li>
                        <a href="blog-quote.html">Quote Post</a>
                      </li>
                    </ul> */}
                      </li>
                      <li>
                        <a
                          className={classes.link_underline}
                          href="contact.html"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Row>
            {/* <!-- End Mainmanu Nav --> */}
          </div>
          {/* <div class="header-action">
              <ul class="action-list">
                <li class="axil-search">
                  <a
                    href="javascript:void(0)"
                    class="header-search-icon"
                    title="Search"
                  >
                    <i class="flaticon-magnifying-glass"></i>
                  </a>
                </li>
                <li class="wishlist">
                  <a href="wishlist.html">
                    <i class="flaticon-heart"></i>
                  </a>
                </li>
                <li class="shopping-cart">
                  <a href="#" class="cart-dropdown-btn">
                    <span class="cart-count">3</span>
                    <i class="flaticon-shopping-cart"></i>
                  </a>
                </li>
                <li class="my-account">
                  <a href="javascript:void(0)">
                    <i class="flaticon-person"></i>
                  </a>
                  <div class="my-account-dropdown">
                    <span class="title">QUICKLINKS</span>
                    <ul>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="#">Initiate return</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Language</a>
                      </li>
                    </ul>
                    <div class="login-btn">
                      <a href="sign-in.html" class="axil-btn btn-bg-primary">
                        Login
                      </a>
                    </div>
                    <div class="reg-footer text-center">
                      No account yet?{" "}
                      <a href="sign-up.html" class="btn-link">
                        REGISTER HERE.
                      </a>
                    </div>
                  </div>
                </li>
                <li class="axil-mobile-toggle">
                  <button class="menu-btn mobile-nav-toggler">
                    <i class="flaticon-menu-2"></i>
                  </button>
                </li>
              </ul>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
