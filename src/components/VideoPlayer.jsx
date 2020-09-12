import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import Formatter, { FormatterForCounts } from "./Formatter";

import { fetchSpecificVideo } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    boxShadow: "none",
    background: "transparent",
  },
  alternateRoot: {
    maxWidth: "100%",
    boxShadow: "none",
    background: "transparent",
    display: "grid",
    gridGap: "15px",
    gridTemplateColumns: "2fr 3fr",
    alignItems: "center",
  },

  media: {
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  header: {
    alignItems: "flex-start",
    padding: "16px 8px 16px 0",
  },
  bold: {
    fontWeight: "500",
  },
}));

export default function VideoPlayer({ id }) {
  const classes = useStyles();
  const [stats, setStats] = useState({});

  useEffect(() => {
    const getData = async (id) => {
      setStats((await fetchSpecificVideo(id)) || {});
    };
    getData(id);
  }, [id]);

  if (!stats.id) {
    return "Loading...";
  }

  const subheaderjsx = (
    <div>
      <Typography variant="body2" className={classes.bold}>
        {stats.snippet.channelTitle}
      </Typography>
      <Typography variant="body2" style={{ fontSize: 12 }}>
        29.9M Subscribers
      </Typography>
    </div>
  );

  return (
    <Card className={classes.root}>
      <Box className="videoContainer">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>

      <Typography
        style={{
          marginTop: "15px",
          marginBottom: "5px",
          fontSize: "18px",
          fontWeight: "500",
          color: "#303030",
        }}
      >
        {stats.snippet.title}
      </Typography>
      <Typography
        style={{
          fontSize: "14px",
          fontWeight: "400",
          color: "#606060",
          marginBottom: "15px",
        }}
      >
        {FormatterForCounts.format(stats.statistics.viewCount)} views
      </Typography>

      <Divider />

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {stats.snippet.channelTitle.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            style={{ padding: "12px 0px 12px 0" }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={subheaderjsx}
        className={classes.header}
      />
    </Card>
  );
}
