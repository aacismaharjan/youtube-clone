import React from "react";
import { Typography } from "@material-ui/core";

export default function VideosSectionTitle(props) {
  return (
    <Typography className="video-title" variant="h5">
      {props.children}
    </Typography>
  );
}
