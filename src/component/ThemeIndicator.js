import React from "react";
import Fab from "@material-ui/core/Fab";
import { BrightnessHigh, Brightness3 } from "@material-ui/icons";

export default function ThemeIndicator({ isDark, onChange }) {
  const displayAlt = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
  return (
    <Fab size="small" aria-label={displayAlt} onClick={onChange}>
      {isDark ? <Brightness3 /> : <BrightnessHigh />}
    </Fab>
  );
}
