import { forwardRef } from "react";

const SVGIcon = forwardRef(({
  icon,

  // size props
  sizeByCss, // first priority
  width,     // second priority
  height,

  // style props
  color,

  // transformation props
  horizontalFlip,
  verticalFlip,
  rotate,

  style,
  ...rest
}, ref) => {
  const internalStyle = {
    verticalAlign: 'middle'
  };

  // Size
  if (!sizeByCss) {
    if (width) internalStyle.width = width;
    if (height) internalStyle.height = height;
  }

  // Style
  if (color) {
    internalStyle.fill = color;
  }

  // Transformation
  const transform = [];
  if (horizontalFlip) {
    transform.push("scaleX(-1)");
  }
  if (verticalFlip) {
    transform.push("scaleY(-1)");
  }
  if (rotate !== 0) {
    transform.push(`rotate(${rotate}deg)`);
  }
  if (transform.length > 0) {
    internalStyle.transform = transform.join(' ');
    internalStyle.transformOrigin = 'center';
  }

  return (
    <svg ref={ref} viewBox={icon[0]} style={{ ...internalStyle, ...style }} {...rest}>
      <path d={icon[1]} />
    </svg>
  );
});

SVGIcon.displayName = 'SVGIcon';


export default SVGIcon;