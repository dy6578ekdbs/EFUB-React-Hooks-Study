import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTItle] = useState(initialTitle);

  //setTimeout(() => titleUpdater("Home"), 1000);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTItle;
};

export default useTitle;
