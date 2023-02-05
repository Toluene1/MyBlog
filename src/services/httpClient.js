import React, { Component, useRef, useState } from "react";
import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:9000/api",
    headers : {
        'Content-Type': 'application/json'
    }
})

export default httpClient;