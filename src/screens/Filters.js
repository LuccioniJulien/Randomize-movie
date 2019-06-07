import React from "react";
import { white, red, black } from "../constant/color";
import { StyleSheet, Picker, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { width, height } from "../constant/layout";
import { getMovieGenre } from "../repository";

export default class RandomMovie extends React.Component {
  static navigationOptions = {
    title: "Filter",
    headerStyle: {
      backgroundColor: red
    },
    headerTitleStyle: {
      color: white
    },
    headerTintColor: white
  };

  state = {
    genres: [],
    selectedGenre: null,
    index: null,
    year: null
  };

  async componentDidMount() {
    try {
      const {
        data: { genres }
      } = await getMovieGenre();
      this.setState({ genres });
    } catch (error) {}
    const { navigation } = this.props;
    const getFilterParams = navigation.getParam("getFilterParams");
    const { genre, year } = getFilterParams();
    this.setState({ selectedGenre: genre, year });
  }

  setParams = () => {
    const { navigation } = this.props;
    const { goBack } = navigation;
    const setFilterParams = navigation.getParam("setFilterParams");
    const { selectedGenre, year } = this.state;
    setFilterParams(selectedGenre, year);
    goBack();
  };

  resetParams = () => {
    const { navigation } = this.props;
    const { goBack } = navigation;
    const setFilterParams = navigation.getParam("setFilterParams");
    this.setState({ selectedGenre: null, year: null });
    setFilterParams(null, null);
  };

  resetFilter = () => {
    setFilterParams(selectedGenre);
    goBack();
  };

  setDate = year => {
    if (parseInt(year) == parseInt("NaN")) return;
    this.setState({ year });
  };

  render() {
    const { selectedGenre, year } = this.state;
    console.log("yeaaaar ===>" + year);
    return (
      <View style={{ backgroundColor: black, width, height }}>
        <Picker
          selectedValue={selectedGenre}
          style={{ height: 20, width }}
          onValueChange={(selectedGenre, index) =>
            this.setState({ selectedGenre, index })
          }
        >
          {this.state.genres.map((x, index) => (
            <Picker.Item
              color={white}
              key={index}
              label={x.name}
              value={x.id}
            />
          ))}
        </Picker>
        <TextInput
          label="Release year"
          value={year}
          theme={{
            colors: {
              primary: red,
              accent: red,
              text: white,
              placeholder: white,
              backdrop: red,
              background: black
            }
          }}
          keyboardType={"numeric"}
          underlineColor={red}
          onChangeText={this.setDate}
          mode="outlined"
          maxLength={4}
          style={[styles.input]}
        />
        <Button
          mode="contained"
          onPress={this.setParams}
          style={[styles.button, { marginBottom: 20 }]}
        >
          Ok
        </Button>
        <Button
          mode="contained"
          onPress={this.resetParams}
          style={styles.button}
        >
          Reset filter
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 4,
    color: white,
    backgroundColor: red,
    marginBottom: 20
  },
  input: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 180,
    marginBottom: 20
  }
});
