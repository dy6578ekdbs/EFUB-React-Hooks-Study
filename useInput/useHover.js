export const useHover = onHover => {
    if (typeof onHover !== "function"){
        return;
    }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("mouseEnter", onHover);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("mouseEnter", onHover);
        }
      };
    }, []);
    return element;
}