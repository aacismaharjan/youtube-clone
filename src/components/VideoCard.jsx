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
import Formatter from "./Formatter";
import Moment from "react-moment";

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

export default function VideoCard({ card, isSide = false }) {
  const classes = useStyles();

  const subheaderjsx = (
    <div>
      <Typography variant="body2" className={classes.bold}>
        {card.name}
      </Typography>
      <Typography variant="body2" className={classes.bold}>
        {Formatter.format(card.views)} • <Moment fromNow>{card.date}</Moment>
      </Typography>
    </div>
  );

  return (
    <Link to={`/video/${card.video}`}>
      <Box className={`${isSide ? "card-main" : ""}`}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={card.thumbnail}
            title="Paella dish"
          />

          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {card.name.charAt(0)}
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
            title={
              <Typography variant="subtitle2" gutterBottom>
                {LimitText(card.title)}
              </Typography>
            }
            subheader={subheaderjsx}
            className={classes.header}
          />
        </Card>
      </Box>
    </Link>
  );
}

const LimitText = (text, l = 50) => {
  if (text.length < l) return text;

  let exp = "";
  for (let i = 0; i < text.length; i++) {
    if (i < l) exp += text[i];
  }
  return `${exp}...`;
};
