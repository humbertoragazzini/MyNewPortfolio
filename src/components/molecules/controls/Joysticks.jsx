import { useEffect } from "react";
import { Joystick } from "react-joystick-component";

export default function CustomJoysticks({
  joystickHorizontalSpeed,
  joystickVerticalSpeed,
  scrollRef,
}) {
  useEffect(() => {
    const joystickSpeedInterval = setInterval(() => {
      if (
        scrollRef.current >= 0 &&
        scrollRef.current < 1 &&
        scrollRef.current + joystickVerticalSpeed.current.y < 1
      ) {
        if (joystickVerticalSpeed.current !== null) {
          scrollRef.current += joystickVerticalSpeed.current.y;
        }
      }
      if (scrollRef.current < 0) {
        scrollRef.current = 0;
      }
    }, 150);
  }, []);

  function handleMoveLeftStick(e) {
    console.log(e.y);
    const newValues = {
      y: e.y * 0.01,
      x: e.x * 10,
    };
    joystickVerticalSpeed.current = newValues;
  }
  function handleStopLeftStick(e) {
    const newValues = {
      y: 0,
      x: joystickVerticalSpeed.current.x ?? 0,
    };
    joystickVerticalSpeed.current = newValues;
  }

  function handleMoveRightStick(e) {
    const newValues = {
      y: e.y,
      x: e.x,
    };
    joystickHorizontalSpeed.current = newValues;
  }
  function handleStopRightStick(e) {
    const newValues = {
      y:
        joystickHorizontalSpeed.current !== null
          ? joystickHorizontalSpeed.current.y
          : 0,
      x:
        joystickHorizontalSpeed.current !== null
          ? joystickHorizontalSpeed.current.x
          : 0,
    };
    joystickHorizontalSpeed.current = newValues;
  }

  return (
    <div className="fixed bottom-0 z-50 flex lg:hidden justify-center w-screen p-5 [&>[data-testid]]:!bg-[rgba(0,0,0,0.5)] [&>[data-testid]]:!backdrop-blur [&>[data-testid]]:!border-2 [&>[data-testid]]:m-4 [&>[data-testid]]:!border-[rgba(125,125,125,0.5)] [&_button]:!bg-[rgba(255,255,255,0.5)]">
      <Joystick
        size={100}
        sticky={false}
        baseColor="red"
        stickColor="blue"
        move={handleMoveLeftStick}
        stop={handleStopLeftStick}
      ></Joystick>
      <Joystick
        size={100}
        sticky={false}
        baseColor="red"
        stickColor="blue"
        move={handleMoveRightStick}
        stop={handleStopRightStick}
      ></Joystick>
    </div>
  );
}
