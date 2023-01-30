import { Link } from "react-router-dom";
import React from "react";
import { Component, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <main className="fixed-top navTop px-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className=" text-decoration-none">
            <h5 className="colorTextForm">MyBLog</h5>
          </Link>
          <button
            className="navbar-toggler toggleDesign "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon toggleStyle"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between "
            id="navbarSupportedContent"
          >
            <div className=" ms-4">
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Explore
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Latest News
                    </a>
                  </li>
                  <li>
                    <Dropdown className="dropStyle">
                      <Dropdown.Toggle
                        className="btnLog1  text-white"
                        variant="transparent"
                        id="dropdown-basic"
                      >
                        About Us
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Contact Us
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Places</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Experience
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" navRight ">
              <form className="d-flex" role="search">
                <Link
                  to={"/login"}
                  className="btn btn-link link-dark text-decoration-none text-warning"
                >
                  <button className="btnLog" type="submit">
                    <span>
                      <i className="bi bi-box-arrow-in-right me-2"></i>{" "}
                    </span>
                    Log In
                  </button>{" "}
                </Link>
                <Link
                  to={"/signup"}
                  className="btn btn-link link-dark text-decoration-none text-warning"
                >
                  <button className="btnLog" type="submit">
                    <span>
                      <i className="bi bi-person-check me-2"></i>
                    </span>
                    Sign Up
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
