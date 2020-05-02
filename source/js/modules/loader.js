export default () => {
  let onPageLoad = function () {
    const ONLOAD_CLASSNAMES = {
      linkActive: `onload-animation-link-active`,
      introMsg: `onload-intro-message`
    };

    const navActiveLinkNode = document.querySelector(`.page-header__menu .active`);
    const introMsgNode = document.querySelector(`.intro__message`);

    document.body.classList.add(`page-loaded`);
    navActiveLinkNode.classList.add(ONLOAD_CLASSNAMES.linkActive);

    navActiveLinkNode.addEventListener(`animationend`, function () {
      navActiveLinkNode.classList.remove(ONLOAD_CLASSNAMES.linkActive);
    }, {once: true});

    if (!location.hash || location.hash === `#top`) {
      introMsgNode.classList.add(ONLOAD_CLASSNAMES.introMsg);

      introMsgNode.addEventListener(`animationend`, function () {
        introMsgNode.classList.remove(ONLOAD_CLASSNAMES.introMsg);
      }, {once: true});
    }
  };

  window.addEventListener(`load`, onPageLoad);
};
