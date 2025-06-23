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
    const svg = effectSvgRef.current;
    const thing9 = thing9Ref.current;
    const thing0 = thing0Ref.current;
    const thing1 = thing1Ref.current;
    const thing2 = thing2Ref.current;
    const preblur = preblurRef.current;
    const postblur = postblurRef.current;
    const dispR = dispRRef.current;
    const dispG = dispGRef.current;
    const dispB = dispBRef.current;

    if (!svg || !preview) return;

    svg.setAttribute("width", `${w}`);
    svg.setAttribute("height", `${h}`);
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

    preview.style.width = `${w + 50}px`;
    preview.style.height = `${h + 50}px`;

    thing9?.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='rgb(0 0 0 / 17%)'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#FFF' style='filter:blur(5px)'/>
      %3C/svg%3E`
    );

    thing0?.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='rgb(255 255 255 / 17%)' style='filter:blur(15px)'/>
      %3C/svg%3E`
    );

    thing1?.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='#000'/>
      %3C/svg%3E`
    );

    thing2?.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E
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
      }' rx='${r}' fill='url(%23gradient1)' style='mix-blend-mode: screen'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='url(%23gradient2)' style='mix-blend-mode: screen'/>
        <rect x='${w / 4}' y='${h / 4}' width='${w / 2}' height='${
        h / 2
      }' rx='${r}' fill='rgb(127 127 127 / 74%)' style='filter:blur(5px)'/>
      %3C/svg%3E`
    );

    preblur?.setAttribute("stdDeviation", `${0.7}`);
    postblur?.setAttribute("stdDeviation", `0.0`);
    dispR?.setAttribute("scale", `-148`);
    dispG?.setAttribute("scale", `-150`);
    dispB?.setAttribute("scale", `-152`);
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
              stdDeviation="0.7"
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
            <feGaussianBlur
              id="postblur"
              ref={postblurRef}
              stdDeviation="0.0"
            />
            <feBlend in2="thing0" mode="screen" />
            <feBlend in2="thing9" mode="multiply" />
            <feComposite in2="thing1" operator="in" />
            <feOffset dx="43" dy="43" />
          </filter>
        </svg>
      </div>

      <div
        ref={previewRef}
        className="absolute top-0 right-0 z-[9999] border-2 border-black"
        style={{
          width: width + 0,
          height: height + 0,
          backdropFilter: "url(#displacementFilter4)",
          // pointerEvents: "none",
        }}
      />
    </>
  );
}
