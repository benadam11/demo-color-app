import React, { useRef, useEffect, useState } from "react";
import uuid from "uuid";
import getColors from "image-pal-canvas/lib/hsluv";

export default function ImageUpload({
  setImgColors,
  imgCallback = () => {},
  className,
  children
}) {
  const input = useRef(null);
  const id = useRef(uuid());
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (input.current) {
      getColors({ inputEl: input.current, maxColors: 7 }, (err, colors) => {
        const arr = colors.map(c => c.hex).sort();
        setImgColors(arr);
      });
    }
  }, [setImgColors]);

  useEffect(() => {
    imgCallback(imgUrl);
  }, [imgCallback, imgUrl]);

  return (
    <label htmlFor={id.current} className={`file-upload-wrapper ${className}`}>
      <input
        name="file-upload"
        id={id.current}
        className="file-input"
        type="file"
        ref={input}
        onChange={e => {
          setImgUrl(URL.createObjectURL(e.target.files[0]));
        }}
      />
      {children(imgUrl)}
    </label>
  );
}
