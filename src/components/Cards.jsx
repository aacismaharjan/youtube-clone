import React, { Component } from "react";
import VideoCard from "./Card";
import { fetchVideos } from "../api/";
import { Grid, Box, Typography } from "@material-ui/core";
import defaultThumbnail from "../assets/thumbnail.jpg";

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
        <Typography
          style={{ marginBottom: 20, fontWeight: "500" }}
          variant="h5"
        >
          Recommended Videos
        </Typography>
        <Grid container spacing={2} justifyItems="center">
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
