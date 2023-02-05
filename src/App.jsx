import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DefaultLayout from "./Layout/Defaultlayout";
import httpClient from "./services/httpClient";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const serverstate = useRef({ fn: "", sn: "", calc: "" });

  const [Loading, setLoading] = useState(false);

  const TestBackend = async () => {
    try {
      const response = await httpClient.post("/test");
      console.log(response.data.result);
      setResult(response.data.result);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const solve = (e) => {
    e.preventDefault();
    console.log(serverstate.current);

    fetch("http://localhost:9000/calc", {
      method: "post",
      body: JSON.stringify(serverstate.current),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

    // useEffect(() => {
    //   fetch("http://localhost:9000/calc", {
    //     method: "post",
    //     body: JSON.stringify(serverstate.current),
    //     headers: {
    //       "content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    //   // console.log(data);
    // }, []);
  };

  return (
    <DefaultLayout>
      <br />
      <br />
      <br />
      <main className="w-50 mx-auto py-1 ">
        <form onSubmit={solve} className="bg-success p-3 shadow-lg">
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">first number</label>
            <input
              required
              type="text"
              onChange={(e) => (serverstate.current.fn = e.target.value)}
              className={`form-control outline-warning border-0`}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">operator</label>
            <input
              required
              type="text"
              onChange={(e) => (serverstate.current.calc = e.target.value)}
              className={`form-control outline-warning border-0 border-none`}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">
              Second number
            </label>
            <input
              required
              type="text"
              onChange={(e) => (serverstate.current.sn = e.target.value)}
              className={`form-control outline-warning border-0 border-none`}
            />
          </div>
          <button type="submit" className="btn btn-dark text-warning">
            Submit
          </button>
        </form>
      </main>
      <h1 className="text-center">{message}</h1>

      <button className="p bg-primary" onClick={TestBackend}>
        {Loading && <i className="spinner-border spinner-border-sm"></i>}
        <span>Test Border</span>
      </button>
      <h3>{result}</h3>
    </DefaultLayout>
  );
}

export default App;
