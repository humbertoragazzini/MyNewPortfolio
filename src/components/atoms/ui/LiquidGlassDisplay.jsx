import React, { useEffect, useRef } from "react";

export default function LiquidGlassDisplay({ width = 200, height = 200 }) {
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
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#0001'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#FFF' style='filter:blur(5px)'/>
      </svg>`
    );

    setHref(
      thing0Ref.current,
      `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#FFF1' style='filter:blur(15px)'/>
      </svg>`
    );

    setHref(
      thing1Ref.current,
      `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#000'/>
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
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#000'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='url(#gradient1)' style='mix-blend-mode: screen'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='url(#gradient2)' style='mix-blend-mode: screen'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#7F7F7FBB' style='filter:blur(5px)'/>
      </svg>`
    );

    preview.style.width = `${w + 50}px`;
    preview.style.height = `${h + 50}px`;

    preblurRef.current?.setAttribute("stdDeviation", "0.7");
    postblurRef.current?.setAttribute("stdDeviation", "0.0");
    dispRRef.current?.setAttribute("scale", "-148");
    dispGRef.current?.setAttribute("scale", "-150");
    dispBRef.current?.setAttribute("scale", "-152");
  }, [width, height]);

  return (
    <>
      <div style={{ position: "absolute", top: -999, left: -999 }}>
        <svg
          ref={effectSvgRef}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="displacementFilter4">
            <feImage
              id="thing9"
              ref={thing9Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing9"
            />
            <feImage
              id="thing0"
              ref={thing0Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing0"
            />
            <feImage
              id="thing1"
              ref={thing1Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing1"
            />
            <feImage
              id="thing2"
              ref={thing2Ref}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing2"
            />
            <feGaussianBlur
              id="preblur"
              ref={preblurRef}
              in="SourceGraphic"
              result="preblur"
            />
            <feDisplacementMap
              id="dispR"
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
              id="dispG"
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
              id="dispB"
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
            <feGaussianBlur id="postblur" ref={postblurRef} />
            <feBlend in2="thing0" mode="screen" />
            <feBlend in2="thing9" mode="multiply" />
            <feComposite in2="thing1" operator="in" />
            <feOffset dx="43" dy="43" />
          </filter>
        </svg>
      </div>

      <div
        ref={previewRef}
        className="absolute z-[9999]"
        style={{
          width: width + 50,
          height: height + 50,
          backdropFilter: "url(#displacementFilter4)",
          // pointerEvents: "none",
        }}
      />
    </>
  );
}
