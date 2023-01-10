import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
const lastTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(lastTime).catch(error => {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});
