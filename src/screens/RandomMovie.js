import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";
import {
  getMovieGenre,
  getMovieDetail,
  getRandomPageOfMovies
} from "../repository";
import { Card, Loading } from "../components";
import { white, red } from "../constant/color";

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
    genres: [],
    isLoading: true
  };

  getRandomId = ({ min = 1, max = 992 }) =>
    Math.round(Math.random() * (max - min) + min);

  setMovie = async () => {
    try {
      this.setState({ isLoading: true });
      const randomPage = this.getRandomId({});
      const { data } = await getRandomPageOfMovies(randomPage);
      const { id } = data.results[this.getRandomId({ min: 0, max: 19 })];
      const { data: movie } = await getMovieDetail(id);
      this.setState({ movie, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.setMovie();
  }

  render() {
    const { movie, isLoading } = this.state;
    return (
      <ScrollView>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Card movie={movie} />
            <Button
              mode="contained"
              onPress={this.setMovie}
              style={styles.button}
            >
              Randomize
            </Button>
            <Button
              mode="contained"
              onPress={this.setMovie}
              style={[styles.button, { marginBottom: 20 }]}
            >
              Filter
            </Button>
          </>
        )}
      </ScrollView>
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
