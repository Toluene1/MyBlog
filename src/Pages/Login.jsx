import React, { Component, useRef, useState } from "react";
import DefaultLayout from "../Layout/Defaultlayout";
import GlobalProvider from "../Provider/GlobalProvider";
import { GlobalContext } from "../Provider/GlobalProvider";
import { useContext } from "react";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";
// import "animate.css";

const Login = () => {
  const { Store, setStore, alert, setalert, alertMessage, setalertMessage } =
    useContext(GlobalContext);

  const createAcc = useRef({
    email: "",
    password: "",
  });

  const onlogin = (e) => {
    e.preventDefault();
    let isregisteredUser = false;
    console.log(Store);
    Store.map((Store) => {
      //conditions
      if (
        Store.email === createAcc.current.email &&
        Store.password === createAcc.current.password
      ) {
        isregisteredUser = true;
      }
    });

    if (isregisteredUser == true) {
      setalert(true);
      setalertMessage("login successful");
      let input = document.getElementsByTagName("input");
      for (let index = 0; index < input.length; index++) {
        input[index].value = "";
      }
    } else {
      setalert(true);
      setalertMessage("user does not exist, sign up instead");
    }

    if (!createAcc.current.email.includes("@")) {
      setalert(true);
      setalertMessage("email must include @");
    } else if (createAcc.current.password.length < 8) {
      setalert(true);
      setalertMessage("password must be at least 8 characters");
    }
  };

  const closeAlert = () => {
    setalert(false);
  };

  return (
    <DefaultLayout>
      <main className="mainLogin animate__animated animate__fadeIn">
        <div className="loginDiv">
          <div className="divWithin">
            <img
              src="https://codeflarelimited.com/blog/wp-content/uploads/2022/08/3266738_news_jpegfc1c848e6bfc932d46ceab3c19481f7c.jpeg.webp"
              alt=""
              className="imgLogin"
            />{" "}
          </div>
          <div className="divWithin ">
            <main>
              <main className="w-75 m-auto mt-4">
                <h5 className="text-center colorRandom ">Login Account</h5>
                <form onSubmit={onlogin} className="formColor p-3 shadow-lg">
                  <div className="text-center colorTextForm">
                    {alert && (
                      <Alert
                        closeAlert={closeAlert}
                        alertMessage={alertMessage}
                      />
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) =>
                        (createAcc.current.email = e.target.value)
                      }
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      required
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) =>
                        (createAcc.current.password = e.target.value)
                      }
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <button type="submit" className="btnForm mt-3">
                    Submit
                  </button>
                </form>
                <div>
                  <p className="text-center colorRandom fw-bold mt-2">
                    dont have an account? <br />
                    <li className="list-group-item">
                      <Link
                        to={"/signup"}
                        className="btn btn-link link-dark text-decoration-none text-warning"
                        style={{ marginTop: "-7px" }}
                      >
                        <span className="colorRandom fw-bold">
                          Create one ..
                        </span>
                      </Link>
                    </li>
                  </p>
                </div>
              </main>
            </main>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Login;
