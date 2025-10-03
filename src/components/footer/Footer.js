import React, {useContext} from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import Animate from "../../assets/utils/Animate";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Animate as="h1" type="fade-bottom">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Forked from DeveloperFolio")}
        </p>
      </div>
    </Animate>
  );
}
