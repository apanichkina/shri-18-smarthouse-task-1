import ac_white from '../images/icons/ac_white.svg';
import cam_white from '../images/icons/cam_white.svg';
import battery from '../images/icons/battery.svg'
import fridge from '../images/icons/fridge.svg'
import kettle from '../images/icons/kettle.svg'
import key from '../images/icons/key.svg'
import music from '../images/icons/music.svg'
import robot_cleaner from '../images/icons/robot_cleaner.svg'
import router from '../images/icons/router.svg'
import stats from '../images/icons/stats.svg';
import thermal from '../images/icons/thermal.svg';

export default function getIconSrc(type, needWhite) {
  let src = '';

  if (needWhite) {

    switch (type) {
      case 'cam':
        src = cam_white;
        break;
      case 'ac':
        src = ac_white;
        break;
      default:
        break
    }

  } else {

    switch (type) {
      case 'stats':
        src = stats;
        break;
      case 'battery':
        src = battery;
        break;
      case 'fridge':
        src = fridge;
        break;
      case 'kettle':
        src = kettle;
        break;
      case 'key':
        src = key;
        break;
      case 'music':
        src = music;
        break;
      case 'robot-cleaner':
        src = robot_cleaner;
        break;
      case 'router':
        src = router;
        break;
      case 'thermal':
        src = thermal;
        break;
      default:
        break
    }

  }

  return src
}
