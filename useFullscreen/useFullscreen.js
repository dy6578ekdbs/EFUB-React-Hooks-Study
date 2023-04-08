export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (element.current.exitFullscreen) {
      element.current.exitFullscreen();
    } else if (element.current.mozCancelFullScreen) {
      element.current.mozCancelFullScreen();
    } else if (element.current.webkitExitFullscreen) {
      element.current.webkitExitFullscreen();
    } else if (element.current.msExitFullscreen) {
      element.current.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
