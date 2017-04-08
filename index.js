var pathExists = require('object-path-exists');

var shortenedTwitterLinkWithLeadingSpaceRegex = /\s?https:\/\/t.co\/[\w\d]+/g;

var videoVariantsPath = ['extended_entities', 'media', '0', 'video_info', 'variants'];

function boilTweetToVideo(tweet) {
  if (pathExists(tweet, videoVariantsPath)) {
    return {
      tweetId: tweet.id_str,
      caption: tweet.text.replace(shortenedTwitterLinkWithLeadingSpaceRegex, ''),
      date: tweet.created_at,
      videos: tweet.extended_entities.media[0].video_info.variants
    };
  }
}

module.exports = boilTweetToVideo;
