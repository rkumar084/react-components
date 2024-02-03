import { useState } from "react";
import "bulma/css/bulma.css";
import heart from "../images/heart.svg";

function ImageShow({ imageSrc }) {
  const [clicks, setclicks] = useState(1);

  const handleClick = () => {
    setclicks(clicks + 1);
  };
  return (
    <div className="columns">
      <div className="column is-2">
        <img onClick={handleClick} src={imageSrc} alt="" />
      </div>

      <div className="column is-1">
        <img
          style={{ width: 10 + 3 * clicks }}
          onClick={handleClick}
          src={heart}
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageShow;
