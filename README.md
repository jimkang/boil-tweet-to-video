boil-tweet-to-video
==================

Gets video URLs from a tweet. Used by get-video-from-twitter-timeline and off-brand-vine.

Installation
------------

    npm install boil-tweet-to-video

Usage
-----

    var boilTweetToVideo = require('boil-tweet-to-video');
    console.log(boilTweetToVideo(tweet));

This code will log something like this:

    {
      "tweetId": "1234",
      "caption": "Curry!",
      "date": "Sun Jan 02 12:00:00 +0000 2017",
      "videos": [
        {
          "bitrate": 320000,
          "content_type": "video/mp4",
          "url": "https://video.twimg.com/ext_tw_video/6789/pr/vid/240x240/whatever.mp4"
        },
        {
          "bitrate": 832000,
          "content_type": "video/mp4",
          "url": "https://video.twimg.com/ext_tw_video/6789/pr/vid/480x480/whatever.mp4"
        },
        {
          "content_type": "application/x-mpegURL",
          "url": "https://video.twimg.com/ext_tw_video/6789/pr/pl/whatever.m3u8"
        }
      ]
    }

Tests
-----

None right now, but the tests in [get-video-from-twitter-timeline](https://github.com/jimkang/get-video-from-twitter-timeline) exercise this, if that makes you feel any better.

License
-------

The MIT License (MIT)

Copyright (c) 2017 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
