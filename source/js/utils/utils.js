const COLOR_PROPS = {
  lightBlue: `#a0cefe`,
  mediumBlue: `#5588ff`,
  darkBlue: `#4073ee`,
};

let resetCssProps = function (subset = ``) {
  let mainColor = ``;
  let secondaryColor = ``;

  switch (subset) {
    case `mediumBlue`:
      mainColor = COLOR_PROPS.darkBlue;
      secondaryColor = COLOR_PROPS.lightBlue;
      break;

    case `lightBlue`:
      mainColor = COLOR_PROPS.lightBlue;
      secondaryColor = COLOR_PROPS.mediumBlue;
      break;
  }

  document.documentElement.style.setProperty(`--c-main`, mainColor);
  document.documentElement.style.setProperty(`--c-secondary`, secondaryColor);
};

export default resetCssProps;
