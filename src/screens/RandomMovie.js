import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import {
  getMovieDetail,
  getRandomPageOfMovies,
  getTotalPagesOfMoviesWithFilter,
  getRandomPageOfMoviesWithFilter
} from "../repository";
import { Card, Loading } from "../components";
import { white, red, black } from "../constant/color";
import { width, height } from "../constant/layout";

export default class RandomMovie extends React.Component {
  static navigationOptions = {
    title: "What Watch Movie",
    headerStyle: {
      backgroundColor: red
    },
    headerTitleStyle: {
      color: white
    },
    headerTintColor: white
  };

  state = {
    movie: null,
    isLoading: true,
    genre: null,
    year: null
  };

  setFilterParams = (genre, year) => this.setState({ genre, year });


  getFilterParams = () => {
    const { genre, year } = this.state;
    return { genre, year };
  };

  getParamsNonNull = () => {
    const { genre, year } = this.state;
    const params = {};
    if (genre) params.with_genres = genre;
    if (year) params.primary_release_year = year;
    return params;
  };

  getRandomId = ({ min = 1, max = 992 }) =>
    Math.round(Math.random() * (max - min) + min);

  isFilter = () => {
    const { genre, year } = this.state;
    return genre != null || year != null;
  };

  setMovieWithFilter = async () => {
    try {
      this.setState({ isLoading: true });
      const params = this.getParamsNonNull();
      const totalPage = await getTotalPagesOfMoviesWithFilter(params);
      params.page = this.getRandomId({ min: 1, max: totalPage });
      const { data } = await getRandomPageOfMoviesWithFilter(params);
      const max = data.results.length;
      const { id } = data.results[this.getRandomId({ min: 0, max })];
      const { data: movie } = await getMovieDetail(id);
      this.setState({ movie, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  setMovie = async () => {
    try {
      this.setState({ isLoading: true });
      const randomPage = this.getRandomId({});
      const { data } = await getRandomPageOfMovies(randomPage);
      const max = data.results.length;
      const { id } = data.results[this.getRandomId({ min: 0, max })];
      const { data: movie } = await getMovieDetail(id);
      this.setState({ movie, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  goToSetting = () => {
    this.props.navigation.navigate("Setting", {
      setFilterParams: this.setFilterParams,
      getFilterParams: this.getFilterParams
    });
  };

  componentDidMount() {
    this.setMovie();
  }

  render() {
    const { movie, isLoading } = this.state;
    return (
      <View style={{ backgroundColor: black, width, height }}>
        <ScrollView style={{ marginBottom: 100 }}>
          {isLoading ? <Loading /> : <Card movie={movie} />}
          <Button
            mode="contained"
            onPress={this.isFilter() ? this.setMovieWithFilter : this.setMovie}
            style={styles.button}
          >
            Randomize
          </Button>
          <Button
            mode="contained"
            onPress={this.goToSetting}
            style={[styles.button, { marginBottom: 20 }]}
          >
            Filter
          </Button>
        </ScrollView>
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
    backgroundColor: red
  }
});
