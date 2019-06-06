import * as React from "react";
import { Image } from "react-native";
import { width } from "../constant/layout";

export default () => (
  <Image
    style={{ width, height: width }}
    source={require("../assets/loading.gif")}
  />
);
