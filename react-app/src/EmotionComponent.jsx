import "./App.css";
import { css } from "@emotion/react";

function EmotionComponent() {
  const color = "black";

  return (
    <div
      css={css`
        color: white;
        cursor: pointer;
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );
}

export default EmotionComponent;
