import UseInputEx from "./hooks/UseInputEx";
import UseTabsEx from "./hooks/UseTabsEx";
import UseTitleEx from "./hooks/UseTitleEx";
import UseClickEx from "./hooks/UseClickEx";
import UseConfirmEx from "./hooks/UseConfirmEx";
import UsePreventLeaveEx from "./hooks/UsePreventLeaveEx";
import UseBeforeLeaveEx from "./hooks/UseBeforeLeaveEx";

function App() {
	return (
		<div className="App">
			<h1>React Hooks Study</h1>
			<UseInputEx />
			<UseTabsEx />
			<UseTitleEx />
			<UseClickEx />
			<UseConfirmEx />
			<UsePreventLeaveEx />
			<UseBeforeLeaveEx />
		</div>
	);
}

export default App;
