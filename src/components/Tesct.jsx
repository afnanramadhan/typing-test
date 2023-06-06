import React, { useRef, useEffect, useState } from 'react';

function TTT() {
  const textRef = useRef(null);
  const [textInOneLine, setTextInOneLine] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const containerWidth = textRef.current.parentNode.offsetWidth;
      const textInLine = Math.floor(containerWidth / textWidth);
      setTextInOneLine(textInLine);
    }
  }, []);

  return (
    <div>
      <div ref={textRef} style={{ display: 'inline-block' }}>
        Long text that wraps in multiple lines
      </div>
      <p>Number of texts in one line: {textInOneLine}</p>
    </div>
  );
}

export default TTT;