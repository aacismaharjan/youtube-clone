import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import VideoCard, { AlternateVideoCard, VideoPlayCard } from "./Card";
import defaultThumbnail from "../assets/thumbnail.jpg";
import { fetchVideos } from "../api";

export default class VideoSection extends Component {
  state = {
    slug: this.props.match.params.slug,
    videos: [],
  };

  async componentDidMount() {
    const videos = await fetchVideos();
    this.setState({ videos });
  }

  render() {
    var card = {
      name: "Aashish Maharjan",
      thumbnail: defaultThumbnail,
      title: "Grabbing my first award from the best college of Nepal",
    };

    const { videos } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <VideoPlayCard card={card} video={this.state.slug} />
        </Grid>

        <Grid item xs={4}>
          {videos.length &&
            videos.map((card, index) => <AlternateVideoCard card={card} />)}
        </Grid>
      </Grid>
    );
  }
}
