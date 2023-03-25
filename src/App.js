import useInput from "./hooks/useInput";

function App() {
  const maxLen = (value) => value.length <= 10;
  const exam = (value) => value.includes("@");

  const name = useInput("Mr. ", exam);

  return (
    <div>
      {/* <input placeholder="Nmae" value={...name} onChange={name.onChange}/>  */}
      <input placeholder="Nmae" {...name} />
    </div>
  );
}

export default App;
