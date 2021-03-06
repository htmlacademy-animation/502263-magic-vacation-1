// modules
import pageColorsToggle from './modules/page-colors-toggle.js';
import loader from './modules/loader.js';
import curtain from './modules/curtain.js';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import rulesAnimation from './modules/rules-animation.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
loader();
curtain();
pageColorsToggle();
mobileHeight();
slider();
menu();
footer();
chat();
rulesAnimation();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
