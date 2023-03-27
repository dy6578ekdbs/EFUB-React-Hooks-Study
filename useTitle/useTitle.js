export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title"); // head의 title 태그
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};