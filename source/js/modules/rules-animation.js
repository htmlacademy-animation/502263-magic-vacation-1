export default () => {
  let lastRulesItem = document.querySelector(`.rules__item:last-child`);
  let rulesBtn = document.querySelector(`.rules__link.btn`);

  lastRulesItem.addEventListener(`animationend`, function () {
    rulesBtn.classList.add(`rules__link--anim-appear`);
  });

  window.addEventListener(`hashchange`, function () {
    rulesBtn.classList.remove(`rules__link--anim-appear`);
  });
};
