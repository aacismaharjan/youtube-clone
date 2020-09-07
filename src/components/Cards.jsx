import React, { Component } from "react";
import VideoCard from "./Card";
import { fetchVideos } from "../api/";
import { Grid, Container } from "@material-ui/core";

export default class Cards extends Component {
  state = {
    videos: [],
  };

  async componentDidMount() {
    const videos = await fetchVideos();
    this.setState({ videos });
  }

  render() {
    const { videos } = this.state;
    return (
      <Grid container spacing={2} justifyItems="center">
        {videos.length &&
          videos.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <VideoCard key={index} card={card} />
            </Grid>
          ))}
      </Grid>
    );
  }
}
