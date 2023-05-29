export const initPlayVideo = () => {
  function findVideos() {
    let videos = document.querySelectorAll('[data-video-player]');

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    let media = video.querySelector('[data-cover4video]');
    let button = video.querySelector('[data-play-video-button]');
    let id = video.getAttribute('data-video-src');

    video.addEventListener('click', () => {
      let iframe = createIframe(id);

      button.remove();
      media.remove();
      video.appendChild(iframe);
    });

    video.classList.add('video--enabled');
  }

  function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
  }

  function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  }

  findVideos();
};
