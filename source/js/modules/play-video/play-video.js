export const initPlayVideo = () => {
  const playButton = document.querySelector('[data-play-video-button]');
  const coverImage = document.querySelector('[data-cover4video]');
  const videoUrl = document.querySelector('[data-video-player]').dataset.videoSrc;

  if (playButton && coverImage && videoUrl) {
    let player;

    const onYouTubeIframeAPIReady = () => {
      // eslint-disable-next-line no-undef
      player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoUrl,
        playerVars: {
          'playsinline': 1,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        },
      });
    };

    const onPlayerReady = () => {
      playButton.addEventListener('click', () => {
        player.playVideo();
        coverImage.dataset.videoIsshown = true;
        playButton.dataset.videoIsshown = true;
      });
    };

    const onPlayerStateChange = (event) => {
      // eslint-disable-next-line no-undef
      if (event.data === YT.PlayerState.ENDED) {
        endedVideo();
      }
    };

    const endedVideo = () => {
      coverImage.dataset.videoIsshown = false;
      playButton.dataset.videoIsshown = false;
    };

    playButton.addEventListener('click', function () {
      playButton.dataset.videoIsshown = true;
      coverImage.dataset.videoIsshown = true;
    });

    onYouTubeIframeAPIReady();
  }
};
