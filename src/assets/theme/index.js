const thmLight = {
  backgroundPrimary: "#e5e5e5",
  boxShadowPrimary: "#000",
  colorNivel1: "#a5a5a5",
  colorNivel2: "#64b2cd",
  colorNovel3: "#000",
  botaoClaro: {
    background: "#64b2cd",
    color: "#fff"
  }
};

const thmDark = {
  backgroudPrimary: "rgba(40, 40, 40)",
  boxShadowPrimary: "rgba(255,255,255, 0.2)",
  colorNivel1: "#a5a5a5",
  colorNivel2: "#64b2cd",
  colorNivel3: "#ccc",
  botaoClaro: {
    background: "#64b2cd",
    color: "#fff"
  }
};

const Theme = [];
Theme["light"] = thmLight;
Theme["dark"] = thmDark;

export const getTheme = params => {
  let tema = params ? params : "light";
  return Theme[tema];
};

export default Theme;
