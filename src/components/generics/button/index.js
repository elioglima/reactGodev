import React from "react";
import { ButtonPrimary } from "./styles";

// import { showModal } from '../../../redux/modal'

const Button = ({
  theme,
  text,
  href,
  handleClickModal,
  showModalNav,
  modal,
  icon,
  ...rest
}) => {
  return (
    <ButtonPrimary theme={theme} className="button" {...rest} href={href}>
      {text} {icon && <img src={icon} alt="icon" />}
    </ButtonPrimary>
  );
};

// const mapDispatchToProps = dipatch => ({ showModalNav: () => dipatch(showModal()) })
// const mapStateToProps = ({ modal }) => ({ modal })
export default Button;
