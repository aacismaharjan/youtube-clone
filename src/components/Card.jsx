import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    boxShadow: "none",
    background: "transparent",
  },
  media: {
    height: 0,
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

export default function RecipeReviewCard({ card }) {
  const classes = useStyles();

  const subheaderjsx = (
    <div>
      <Typography variant="body2" className={classes.bold}>
        {card.name}
      </Typography>
      <Typography variant="body2" className={classes.bold}>
        2.5M views . 3 months ago
      </Typography>
    </div>
  );

  return (
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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Box
            style={{
              fontWeight: "500",
              fontSize: "15px",
              letterSpacing: "0.005em",
            }}
          >
            {card.title}
          </Box>
        }
        subheader={subheaderjsx}
        className={classes.header}
      />
    </Card>
  );
}
