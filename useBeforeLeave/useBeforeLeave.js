export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
      console.log("leaving");
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };