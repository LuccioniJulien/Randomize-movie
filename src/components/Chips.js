import * as React from "react";
import { Badge } from "react-native-paper";
import { StyleSheet } from "react-native";
import { white, red } from "../constant/color";

const Badges = ({ genres = [] }) => {
  return genres.slice(0, 4).map(({ name }, index) => (
    <Badge key={index} size={23} style={styles.chip}>
      {name}
    </Badge>
  ));
};

export default Badges;

const styles = StyleSheet.create({
  chip: {
    color: white,
    backgroundColor: red,
    fontSize: 17,
    marginLeft: 4
  }
});
