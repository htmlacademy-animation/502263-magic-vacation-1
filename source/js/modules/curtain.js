export default () => {
  const SCREEN_CHANGE_DELAY_MS = 650;
  let pageHeader = document.querySelector(`.page-header__nav`);
  let screenPrizes = document.querySelector(`.screen--prizes .screen__footer`);
  let curtainNode = document.querySelector(`.curtain`);
  let sliderNode = document.querySelector(`.slider`);

  let reInitFromStoryClickListener = function (evt, node) {
    evt.preventDefault();
    pageHeader.querySelector(`.active`).classList.remove(`active`);
    evt.target.classList.add(`active`);

    sliderNode.classList.add(`slider--animation-hide`);
    curtainNode.classList.add(`curtain--active`);

    screenPrizes.classList.remove(`ready__anim-footer`);
    pageHeader.removeEventListener(`click`, onClickFromStoryLink);

    setTimeout(function () {
      node.click();
      pageHeader.addEventListener(`click`, onClickFromStoryLink);
      screenPrizes.classList.add(`ready__anim-footer`);
    }, SCREEN_CHANGE_DELAY_MS);
  };

  let onClickFromStoryLink = function (evt) {
    if (
      location.hash === `#story` &&
      evt.target.nodeName === `A` &&
      evt.target.dataset.href !== `top` &&
      evt.target.dataset.href !== `story`
    ) {
      reInitFromStoryClickListener(evt, evt.target);
    }
  };

  let onHashChange = function (evt) {
    let isFromStoryTransition = evt.oldURL.includes(`story`);

    curtainNode.classList[isFromStoryTransition ? `add` : `remove`](`curtain--active`);
    sliderNode.classList.remove(`slider--animation-hide`);
  };

  pageHeader.addEventListener(`click`, onClickFromStoryLink);
  window.addEventListener(`hashchange`, onHashChange);
};
