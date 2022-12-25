import React, { useContext } from "react";
import "./Footer1.css";
import { ThemeContext } from "../Footer/ThemeContext";

function Footer1() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Made with
        <span style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}>
          ❤
        </span>
        by <span style="color: #D4af37">The Golden Circle</span>
      </p>
    </div>
  );
}

export default Footer1;
