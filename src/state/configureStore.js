import { createStore } from "@reduxjs/toolkit";
import dataState from "./reducer";

export const store = createStore(dataState);

export const getStateData = (applicationNumber) => (state) => state[applicationNumber]
