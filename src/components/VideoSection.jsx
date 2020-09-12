import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import VideoCard from "./VideoCard";
import defaultThumbnail from "../assets/thumbnail.jpg";
import { fetchVideos, fetchRelatedVideos } from "../api";
import VideoPlayer from "./VideoPlayer";

export default class VideoSection extends Component {
  state = {
    videos: [],
    defaultVideoId: this.props.match.params.slug, //default
  };

  async componentDidMount() {
    const videos = await fetchRelatedVideos(this.state.defaultVideoId);
    if (videos) this.setState({ videos });
  }

  render() {
    const { videos } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <VideoPlayer id={this.props.match.params.slug} />
        </Grid>

        <Grid item xs={4}>
          {videos.length &&
            videos.map((card, index) => (
              <VideoCard isSide key={index} card={card} />
            ))}
        </Grid>
      </Grid>
    );
  }
}
