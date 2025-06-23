import React, { useLayoutEffect, useRef } from "react";

export default function LiquidGlassEffect() {
  const draggableRef = useRef(null);
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

  useLayoutEffect(() => {
    function updateSettings() {
      const vals = {};
      document
        .querySelectorAll("#controls input")
        .forEach((e) => (vals[e.id] = e.value));

      const w = vals.w;
      const h = vals.h;

      const effectSvg = effectSvgRef.current;
      const preview = previewRef.current;
      const draggable = draggableRef.current;
      const thing9 = thing9Ref.current;
      const thing0 = thing0Ref.current;
      const thing1 = thing1Ref.current;
      const thing2 = thing2Ref.current;
      const preblur = preblurRef.current;
      const postblur = postblurRef.current;
      const dispR = dispRRef.current;
      const dispG = dispGRef.current;
      const dispB = dispBRef.current;

      if (!effectSvg || !preview || !draggable) return;

      effectSvg.setAttribute("width", `${w}`);
      effectSvg.setAttribute("height", `${h}`);
      effectSvg.setAttribute("viewBox", `0 0 ${w} ${h}`);

      preview.style.width = `${parseFloat(w) + 50}px`;
      preview.style.height = `${parseFloat(h) + 50}px`;
      preview.style.translate = `${w / 4}px ${h / 4}px`;

      draggable.style.top = `${-1200 + h / 4}px`;
      draggable.style.left = `${-1200 + w / 4}px`;
      draggable.style.clipPath = `polygon(calc(100% - ${
        w / 2 + 25
      }px) calc(100% - ${h / 2 + 25}px), calc(100% - ${
        w / 2 + 25
      }px) 100%, 100% 100%, 100% calc(100% - ${h / 2 + 25}px))`;

      thing9?.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='rgb%280 0 0 %2F${vals.d1 / 2.55}%25%29' /%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='%23FFF' style='filter:blur(${vals.d2}px)' /%3E%3C/svg%3E`
      );

      thing0?.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='rgb%28255 255 255 %2F${
          vals.l1 / 2.55
        }%25%29' style='filter:blur(${vals.l2}px)' /%3E%3C/svg%3E`
      );

      thing1?.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='%23000' /%3E%3C/svg%3E`
      );

      thing2?.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gradient1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%2300F'/%3E%3C/linearGradient%3E%3ClinearGradient id='gradient2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%230F0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='${w}' height='${h}' rx='${
          vals.r
        }' fill='%237F7F7F' /%3E%3Crect x='${w / 4}' y='${h / 4}' width='${
          w / 2
        }' height='${h / 2}' rx='${vals.r}' fill='%23000' /%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='url(%23gradient1)' style='mix-blend-mode: screen' /%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='url(%23gradient2)' style='mix-blend-mode: screen' /%3E%3Crect x='${
          w / 4
        }' y='${h / 4}' width='${w / 2}' height='${h / 2}' rx='${
          vals.r
        }' fill='rgb%28127 127 127 %2F${
          (255 - vals.c1) / 2.55
        }%25%29' style='filter:blur(${20 - vals.c2}px)' /%3E%3C/svg%3E`
      );

      preblur?.setAttribute("stdDeviation", `${vals.b1 / 10}`);
      postblur?.setAttribute("stdDeviation", `${vals.b2 / 10}`);
      dispR?.setAttribute("scale", `${-150 + vals.c4 / 10}`);
      dispG?.setAttribute("scale", `-150`);
      dispB?.setAttribute("scale", `${-150 - vals.c4 / 10}`);
    }

    document
      .querySelectorAll("#controls input")
      .forEach((e) => (e.oninput = updateSettings));
  }, []);

  return (
    <>
      <style>
        {`
          #controls {
            background: #FFF;
            display:inline-flex;
            flex-direction: column;
            font-family:serif;
            padding: 16px;
            margin: -24px 48px 48px;
            width: 384px;
            input[type=range] {
              width: 240px;
            }
          }
        `}
      </style>

      <div className="fixed right-0 z-[99999]" style={{ display: "flex" }}>
        <div id="controls">
          <label>
            <input type="range" id="w" defaultValue="200" min="10" max="1000" />
            Width
          </label>
          <label>
            <input type="range" id="h" defaultValue="200" min="10" max="1000" />
            Height
          </label>
          <label>
            <input type="range" id="r" defaultValue="25" min="0" max="255" />
            Corner Radius
          </label>
          <label>
            <input type="range" id="d1" defaultValue="17" min="0" max="255" />
            Darkness Opacity
          </label>
          <label>
            <input type="range" id="d2" defaultValue="5" min="0" max="50" />
            Darkness Blur
          </label>
          <label>
            <input type="range" id="l1" defaultValue="17" min="0" max="255" />
            Lightness Opacity
          </label>
          <label>
            <input type="range" id="l2" defaultValue="15" min="0" max="50" />
            Lightness Blur
          </label>
          <label>
            <input type="range" id="c1" defaultValue="68" min="0" max="255" />
            Center Distortion
          </label>
          <label>
            <input type="range" id="c2" defaultValue="15" min="0" max="20" />
            Center Size
          </label>
          <label>
            <input type="range" id="b1" defaultValue="7" min="0" max="100" />
            Pre-blur
          </label>
          <label>
            <input type="range" id="b2" defaultValue="0" min="0" max="100" />
            Post-blur
          </label>
          <label>
            <input type="range" id="c4" defaultValue="20" min="0" max="50" />
            Iridescence
          </label>
        </div>
      </div>

      <div style={{ position: "absolute", top: -999, left: -999 }}>
        <svg
          id="effectSvg"
          ref={effectSvgRef}
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="displacementFilter4">
            <feImage
              xlinkHref="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='%230001' /%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='%23FFF' style='filter:blur(5px)' /%3E%3C/svg%3E"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing9"
              id="thing9"
              ref={thing9Ref}
            />
            <feImage
              xlinkHref="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='%23FFF1' style='filter:blur(15px)' /%3E%3C/svg%3E"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing0"
              id="thing0"
              ref={thing0Ref}
            />
            <feImage
              xlinkHref="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='%23000' /%3E%3C/svg%3E"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing1"
              id="thing1"
              ref={thing1Ref}
            />
            <feImage
              xlinkHref="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gradient1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%2300F'/%3E%3C/linearGradient%3E%3ClinearGradient id='gradient2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%230F0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='200' height='200' rx='25' fill='%237F7F7F' /%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='%23000' /%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='url(%23gradient1)' style='mix-blend-mode: screen' /%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='url(%23gradient2)' style='mix-blend-mode: screen' /%3E%3Crect x='50' y='50' width='100' height='100' rx='25' fill='%237F7F7FBB' style='filter:blur(5px)' /%3E%3C/svg%3E"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing2"
              id="thing2"
              ref={thing2Ref}
            />
            <feGaussianBlur
              stdDeviation="0.7"
              in="SourceGraphic"
              result="preblur"
              id="preblur"
              ref={preblurRef}
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
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
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
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
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
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="disp3"
            />
            <feBlend in2="disp2" mode="screen" />
            <feBlend in2="disp1" mode="screen" />
            <feGaussianBlur
              stdDeviation="0.0"
              id="postblur"
              ref={postblurRef}
            />
            <feBlend in2="thing0" mode="screen" />
            <feBlend in2="thing9" mode="multiply" />
            <feComposite in2="thing1" operator="in" />
            <feOffset dx="43" dy="43" />
          </filter>
        </svg>
      </div>

      <div
        id="draggable"
        ref={draggableRef}
        style={{
          position: "absolute",
          zIndex: 999999999,
          top: -1150,
          left: -1150,
          resize: "both",
          minWidth: 1200,
          minHeight: 1200,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          width: 1291,
          height: 1270,
          clipPath:
            "polygon(calc(100% - 120px) calc(100% - 120px), calc(100% - 120px) 100%, 100% 100%, 100% calc(100% - 120px))",
        }}
      >
        <div
          id="preview"
          ref={previewRef}
          style={{
            width: 200,
            height: 200,
            backdropFilter: "url(#displacementFilter4)",
            pointerEvents: "none",
          }}
        />
      </div>
    </>
  );
}
