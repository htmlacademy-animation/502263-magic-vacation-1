export default () => {
  let onPageLoad = function () {
    const ONREADY_CLASSNAMES = {
      logo: `ready__anim-logo`,
      linkActive: `ready__anim-link-active`,
      header: `ready__anim-header`,
      introMsg: `ready__anim-intro-msg`,
      footer: `ready__anim-footer`
    };

    const pageMenuNode = document.querySelector(`.page-header__menu`);
    const pageLogoNode = document.querySelector(`.page-header__logo`);
    const navActiveLinkNode = pageMenuNode.querySelector(`.active`);
    const introMsgNode = document.querySelector(`.intro__message`);
    const pageFooterNode = document.querySelector(`.screen__footer`);

    document.body.classList.add(`ready`);
    navActiveLinkNode.classList.add(ONREADY_CLASSNAMES.linkActive);
    pageLogoNode.classList.add(ONREADY_CLASSNAMES.logo);
    pageMenuNode.classList.add(ONREADY_CLASSNAMES.header);
    pageFooterNode.classList.add(ONREADY_CLASSNAMES.footer);

    navActiveLinkNode.addEventListener(`animationend`, function () {
      navActiveLinkNode.classList.remove(ONREADY_CLASSNAMES.linkActive);
    }, {once: true});

    if (!location.hash || location.hash === `#top`) {
      introMsgNode.classList.add(ONREADY_CLASSNAMES.introMsg);

      introMsgNode.addEventListener(`animationend`, function () {
        introMsgNode.classList.remove(ONREADY_CLASSNAMES.introMsg);
      }, {once: true});
    }
  };

  window.addEventListener(`load`, onPageLoad);
};
