import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const SAVE_TIME = 'videoplayer-current-time';
const onPlay = function (data) {
  localStorage.setItem(SAVE_TIME, JSON.stringify(data['seconds']));
};
player.on('timeupdate', throttle(onPlay, 1000));
time();
function time() {
  const currentTime = JSON.parse(null);
  if (currentTime === 0) {
    return;
  }
  player
    .setCurrentTime(currentTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}
