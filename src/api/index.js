const fetchVideos = async () => {
  const API = "AIzaSyBw0xffhY84HE6GS_CRvmPAQZswmzRYjAQ";
  const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API}`;

  return await fetch(URL)
    .then((res) => res.json())
    .then(({ items }) => {
      const videos = items.map((item) => ({
        name: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        date: item.snippet.publishedAt,
        video: item.id,
      }));
      return videos;
    })
    .catch((err) => console.log(err));
};

export { fetchVideos };
