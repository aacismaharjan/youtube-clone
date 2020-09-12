import React from "react";

export default function CardMedia() {
  return (
    <Box className="videoContainer">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
}
