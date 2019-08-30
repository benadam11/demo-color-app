import React, { useState, useEffect } from "react";

function ColorIndicator({ color, setColor }) {
  return (
    <label className="native-color-input-wrapper" htmlFor="native-color-input">
      <div className="color-indicator" style={{ backgroundColor: color }} />
      <input
        id="native-color-input"
        type="color"
        value={color}
        onChange={({ target }) => setColor(target.value)}
      />
    </label>
  );
}
function ColorInput({ color, setColor }) {
  const [state, setState] = useState(color);

  useEffect(() => {
    setState(color);
  }, [color]);

  return (
    <div className="color-input-wrapper">
      <ColorIndicator color={color} setColor={setColor} />
      <form
        onSubmit={e => {
          e.preventDefault();
          setColor(state);
        }}
      >
        <input
          pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          type="text"
          value={state}
          onChange={({ target }) => setState(target.value)}
        />
      </form>
    </div>
  );
}

export default ColorInput;
