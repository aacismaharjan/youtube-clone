const API = "AIzaSyAeLqwHJ90UYVReG8YlQGD4LlYhtScevvs";

const fetchVideos = async () => {
  const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=20&key=${API}&regionCode=np`;

  return await fetch(URL)
    .then((res) => res.json())
    .then(({ items }) => {
      const videos = items.map((item) => ({
        name: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        date: item.snippet.publishedAt,
        video: item.id,
        views: item.statistics.viewCount,
      }));
      return videos;
    })
    .catch((err) => console.log(err));
};

const fetchSpecificVideo = async (id) => {
  const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API}`;

  return await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.items[0])
    .catch((err) => console.log(err));
};

const fetchRelatedVideos = async (id) => {
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&relatedToVideoId=${id}&type=video&key=${API}`;
  console.log(URL);
  return await fetch(URL)
    .then((res) => res.json())
    .then(({ items }) => {
      const videos = items.map((item) => ({
        name: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        date: item.snippet.publishedAt,
        video: item.id.videoId,
        views: "N/A",
      }));
      return videos;
    })
    .catch((err) => console.log(err));
};

export { fetchVideos, fetchSpecificVideo, fetchRelatedVideos };
