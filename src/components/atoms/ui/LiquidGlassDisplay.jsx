import React, { useEffect, useRef } from "react";

export default function LiquidGlassDisplay({ width, height, className, children }) {
  const previewRef = useRef(null);
  const effectSvgRef = useRef(null);
  const thing9Ref = useRef(null);
  const thing0Ref = useRef(null);
  const thing1Ref = useRef(null);
  const thing2Ref = useRef(null);
  const preblurRef = useRef(null);
  const postblurRef = useRef(null);
  const dispRRef = useRef(null);
  const dispGRef = useRef(null);
  const dispBRef = useRef(null);

  useEffect(() => {
    const w = width;
    const h = height;
    const r = 25;

    const preview = previewRef.current;

    const setHref = (el, svg) => {
      if (!el) return;
      el.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `data:image/svg+xml,${encodeURIComponent(svg)}`
      );
    };

    setHref(
      thing9Ref.current,
      `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='#0001'/>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='#FFF' style='filter:blur(5px)'/>
      </svg>`
    );

    setHref(
      thing0Ref.current,
      `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='#FFF1' style='filter:blur(15px)'/>
      </svg>`
    );

    setHref(
      thing1Ref.current,
      `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='#000'/>
      </svg>`
    );

    setHref(
      thing2Ref.current,
      `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stop-color='#000'/>
            <stop offset='100%' stop-color='#00F'/>
          </linearGradient>
          <linearGradient id='gradient2' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stop-color='#000'/>
            <stop offset='100%' stop-color='#0F0'/>
          </linearGradient>
        </defs>
        <rect x='0' y='0' width='${w}' height='${h}' rx='${r}' fill='#7F7F7F'/>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='#000'/>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='url(#gradient1)' style='mix-blend-mode: screen'/>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='url(#gradient2)' style='mix-blend-mode: screen'/>
        <rect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='#7F7F7FBB' style='filter:blur(5px)'/>
      </svg>`
    );

    preview.style.width = `${w + 80}px`;
    preview.style.height = `${h + 80}px`;

    preblurRef.current?.setAttribute("stdDeviation", "0.7");
    postblurRef.current?.setAttribute("stdDeviation", "0.0");
    dispRRef.current?.setAttribute("scale", "-148");
    dispGRef.current?.setAttribute("scale", "-150");
    dispBRef.current?.setAttribute("scale", "-152");
  }, [width, height]);

  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <svg
          ref={effectSvgRef}
          width={width}
          height={height}
          viewBox={`0 0 ${width + 56} ${height + 56}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter
            id="displacementFilter4"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
          >
            <feImage
              ref={thing9Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing9"
            />
            <feImage
              ref={thing0Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing0"
            />
            <feImage
              ref={thing1Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing1"
            />
            <feImage
              ref={thing2Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing2"
            />
            <feGaussianBlur
              ref={preblurRef}
              in="SourceGraphic"
              result="preblur"
            />
            <feDisplacementMap
              ref={dispRRef}
              in2="thing2"
              in="preblur"
              scale="-148"
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="disp1"
            />
            <feDisplacementMap
              ref={dispGRef}
              in2="thing2"
              in="preblur"
              scale="-150"
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="disp2"
            />
            <feDisplacementMap
              ref={dispBRef}
              in2="thing2"
              in="preblur"
              scale="-152"
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="disp3"
            />
            <feBlend in2="disp2" mode="screen" />
            <feBlend in2="disp1" mode="screen" />
            <feGaussianBlur ref={postblurRef} />
            <feBlend in2="thing0" mode="screen" />
            <feBlend in2="thing9" mode="multiply" />
            <feComposite in2="thing1" operator="in" />
            <feOffset dx="10" dy="10" />
          </filter>
        </svg>
      </div>
      <div
        ref={previewRef}
        className="absolute top-0 left-0 border-2 border-amber-300"
        style={{
          position: "",
          zIndex: 9999,
          width: width,
          height: height,
          backdropFilter: "url(#displacementFilter4)",
        }}
      />
    </>
  );
}
