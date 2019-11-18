import dark from "./dark";
const Theme = [];
Theme["dark"] = dark;

export const getTheme = params => {
  let tema = params ? params : "light";
  return Theme[tema];
};

export default Theme;
