import React, { Component } from "react";
import VideoCard from "./VideoCard";
import { fetchVideos } from "../api";
import { Grid, Box, Typography } from "@material-ui/core";
import VideosSectionTitle from "./VideosSectionTitle";

export default class Cards extends Component {
  state = {
    videos: [],
  };

  async componentDidMount() {
    const videos = await fetchVideos();
    if (videos) {
      this.setState({ videos });
    }
  }

  render() {
    const { videos } = this.state;

    if (!videos.length) {
      return <div>Loading...</div>;
    }

    return (
      <Box>
        <VideosSectionTitle>Recommended Videos</VideosSectionTitle>

        <Grid container spacing={2}>
          {videos.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <VideoCard key={index} card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}
