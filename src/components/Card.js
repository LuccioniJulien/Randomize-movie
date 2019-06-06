import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { BASE_MOVIE_POSTER } from "../constant/api";
import Badges from "./Chips";

export default ({ movie: { overview, title, poster_path, genres = [] } }) => {
  //console.log(JSON.stringify(genre_ids));
  return (
    <Card>
      <Card.Content>
        <Card.Cover
          style={{ height: 450 }}
          source={{ uri: `${BASE_MOVIE_POSTER}${poster_path}` }}
        />
        <Title>{title}</Title>
        <Card.Actions>
          <Badges genres={genres} />
        </Card.Actions>
        <Paragraph>{overview}</Paragraph>
      </Card.Content>
    </Card>
  );
};
