import robotHead from "../../images/icons/robot-head.png";
import cat from "../../images/icons/cat.png";
import pin from "../../images/icons/pin.png";

import React from "react";

export default function Icon({ variant, label, size = 24 }) {
  function getVariant(variant) {
    switch (variant) {
      case "robot":
        return robotHead;
      case "cat":
        return cat;
      case "pin":
        return pin;
      default:
        return <robot />;
    }
  }

  return <img src={getVariant(variant)} alt={label} height={size} />;
}
