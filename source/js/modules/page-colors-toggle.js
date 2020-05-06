import resetCssProps from '../utils/utils.js';

export default () => {
  let navigationLinks = document.querySelectorAll(`.js-menu-link`);
  let navStoryNode = document.querySelector(`[data-href="story"]`);

  navigationLinks.forEach(function (it) {
    it.addEventListener(`click`, function () {
      let currentSliderColorScheme = document.documentElement.dataset.sliderColorScheme;

      if (navStoryNode.classList.contains(`active`) && it !== navStoryNode) {
        resetCssProps();
      } else if (it === navStoryNode) {
        resetCssProps(currentSliderColorScheme);
      }
    });
  });
};
