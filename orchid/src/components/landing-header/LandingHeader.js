import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./LandingHeader.module.css";

const LandingHeader = (props) => {
  return (
    <div>
      {/* Landing Header Start */}
      <div class="main-wrapper">
        <div class={classes.main_slider_style_1}>
          <Container class="container">
            <Row class="row aling_items_center">
              <Col class="col-lg-5 col-sm-6">
                <div class={classes.main_slider_content}>
                  <div>
                    <div
                      class={classes.single_slide}
                      data-sal="slide-up"
                      data-sal-delay="400"
                      data-sal-duration="800"
                    >
                      <span class={classes.subtitle}>
                        <i class="fas fa-fire"></i> Hot Deal In This Week
                      </span>
                      <h1 class={classes.title}>Roco Wireless Headphone</h1>
                      <div class="slide-action">
                        <Button class="btn">
                          <a href="shop.html" class="axil-btn btn-bg-white">
                            <i class="fal fa-shopping-cart"></i>Shop Now
                          </a>
                        </Button>
                        <div class="item-rating">
                          <div class="thumb">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/others/author1.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author2.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author3.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author4.png"
                                  alt="Author"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class={classes.content}>
                            <span class="rating-icon">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fal fa-star"></i>
                            </span>
                            <span class="review-text">
                              <span>100+</span> Reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="single-slide slick-slide">
                      <span class="subtitle">
                        <i class="fas fa-fire"></i> Hot Deal In This Week
                      </span>
                      <h1 class="title">Smart Digital Watch</h1>
                      <div class="slide-action">
                        <div class="shop-btn">
                          <a href="shop.html" class="axil-btn btn-bg-white">
                            <i class="fal fa-shopping-cart"></i>Shop Now
                          </a>
                        </div>
                        <div class="item-rating">
                          <div class="thumb">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/others/author1.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author2.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author3.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author4.png"
                                  alt="Author"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="content">
                            <span class="rating-icon">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fal fa-star"></i>
                            </span>
                            <span class="review-text">
                              <span>100+</span> Reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div class="single-slide slick-slide">
                      <span class="subtitle">
                        <i class="fas fa-fire"></i> Hot Deal In This Week
                      </span>
                      <h1 class="title">Roco Wireless Headphone</h1>
                      <div class="slide-action">
                        <div class="shop-btn">
                          <a href="shop.html" class="axil-btn btn-bg-white">
                            <i class="fal fa-shopping-cart"></i>Shop Now
                          </a>
                        </div>
                        <div class="item-rating">
                          <div class="thumb">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/others/author1.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author2.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author3.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author4.png"
                                  alt="Author"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="content">
                            <span class="rating-icon">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fal fa-star"></i>
                            </span>
                            <span class="review-text">
                              <span>100+</span> Reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div class="single-slide slick-slide">
                      <span class="subtitle">
                        <i class="fas fa-fire"></i> Hot Deal In This Week
                      </span>
                      <h1 class="title">Smart Digital Watch</h1>
                      <div class="slide-action">
                        <div class="shop-btn">
                          <a href="shop.html" class="axil-btn btn-bg-white">
                            <i class="fal fa-shopping-cart"></i>Shop Now
                          </a>
                        </div>
                        <div class="item-rating">
                          <div class="thumb">
                            <ul>
                              <li>
                                <img
                                  src="assets/images/others/author1.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author2.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author3.png"
                                  alt="Author"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/others/author4.png"
                                  alt="Author"
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="content">
                            <span class="rating-icon">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fal fa-star"></i>
                            </span>
                            <span class="review-text">
                              <span>100+</span> Reviews
                            </span>
                          </div>
                        </div>
                      </div> */}
                  </div>
                </div>
              </Col>
              <Col lg={7} class="col-lg-7 col-sm-6">
                <div class="main-slider-large-thumb">
                  <div class="slider-thumb-activation-one axil-slick-dots">
                    <div
                      class={classes.single_slide}
                      data-sal="slide-up"
                      data-sal-delay="600"
                      data-sal-duration="1500"
                    >
                      <img
                        src="assets/images/product/product-38.png"
                        alt="Product"
                      />
                      <div class="product-price">
                        <span class="text">From</span>
                        <span class="price-amount">$49.00</span>
                      </div>
                    </div>
                    <div
                      class={classes.single_slide}
                      data-sal="slide-up"
                      data-sal-delay="600"
                      data-sal-duration="1500"
                    >
                      <img
                        src="assets/images/product/product-39.png"
                        alt="Product"
                      />
                      <div class="product-price">
                        <span class="text">From</span>
                        <span class="price-amount">$49.00</span>
                      </div>
                    </div>
                    <div class={classes.single_slide}>
                      <img
                        src="assets/images/product/product-38.png"
                        alt="Product"
                      />
                      <div class="product-price">
                        <span class="text">From</span>
                        <span class="price-amount">$49.00</span>
                      </div>
                    </div>
                    <div class={classes.single_slide}>
                      <img
                        src="assets/images/product/product-39.png"
                        alt="Product"
                      />
                      <div class="product-price">
                        <span class="text">From</span>
                        <span class="price-amount">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <ul class="shape-group">
            <li class="shape-1">
              <img src="assets/images/others/shape-1.png" alt="Shape" />
            </li>
            <li class="shape-2">
              <img src="assets/images/others/shape-2.png" alt="Shape" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
