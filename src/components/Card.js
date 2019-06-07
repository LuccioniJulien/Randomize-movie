import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { BASE_MOVIE_POSTER } from "../constant/api";
import Badges from "./Chips";
import { white, black } from "../constant/color";

export default ({ movie: { overview, title, poster_path, genres = [] } }) => {
  //console.log(JSON.stringify(genre_ids));
  return (
    <Card style={{ backgroundColor: black }}>
      <Card.Content>
        <Card.Cover
          style={{ height: 450 }}
          source={{ uri: `${BASE_MOVIE_POSTER}${poster_path}` }}
        />
        <Title style={{ color: white }}>{title}</Title>
        <Card.Actions>
          <Badges genres={genres} />
        </Card.Actions>
        <Paragraph style={{ color: white }}>{overview}</Paragraph>
      </Card.Content>
    </Card>
  );
};
