export default () => {
  let onPageLoad = function () {
    const ONREADY_ANIM_MAP = {
      'ready': document.body,
      'ready__anim-link-active': document.querySelector(`.page-header__menu .active`),
      'ready__anim-intro-msg': document.querySelector(`.intro__message`),
      'ready__anim-logo': document.querySelector(`.page-header__logo`),
      'ready__anim-header': document.querySelector(`.page-header__menu`),
      'ready__anim-footer': document.querySelectorAll(`.screen__footer`)
    };

    let toggleClassNameOnAnimationEnd = function (node, className) {
      node.classList.add(className);
      node.addEventListener(`animationend`, function () {
        node.classList.remove(className);
      }, {once: true});
    };

    for (let className in ONREADY_ANIM_MAP) {
      if (ONREADY_ANIM_MAP[className]) { // 'guard-for-in'  ESLint rule
        let currentNode = ONREADY_ANIM_MAP[className];

        switch (className) {
          case `ready__anim-link-active`:
            toggleClassNameOnAnimationEnd(currentNode, className);
            break;

          case `ready__anim-intro-msg`:
            if (!location.hash || location.hash === `#top`) {
              toggleClassNameOnAnimationEnd(currentNode, className);
            }
            break;

          case `ready__anim-footer`:
            currentNode.forEach(function (node) {
              node.classList.add(className);
            });
            break;

          default:
            currentNode.classList.add(className);
        }
      } else {
        throw new Error(`Node for classname addition of '${className}' is ${ONREADY_ANIM_MAP[className]}`);
      }
    }
  };

  window.addEventListener(`load`, onPageLoad);
};
