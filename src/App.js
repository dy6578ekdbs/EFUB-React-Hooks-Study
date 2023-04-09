import UseInputEx from "./hooks/UseInputEx";
import UseTabsEx from "./hooks/UseTabsEx";
import UseTitleEx from "./hooks/UseTitleEx";
import UseClickEx from "./hooks/UseClickEx";
import UseConfirmEx from "./hooks/UseConfirmEx";
import UsePreventLeaveEx from "./hooks/UsePreventLeaveEx";
import UseBeforeLeaveEx from "./hooks/UseBeforeLeaveEx";
import UseFadeInEx from "./hooks/UseFadeInEx";
import UseNetworkEx from "./hooks/UseNetworkEx";
import UseScrollEx from "./hooks/UseScrollEx";
import UseFullscreenEx from "./hooks/UseFullscreenEx";

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
			<UseFadeInEx />
			<UseNetworkEx />
			<UseScrollEx />
			<UseFullscreenEx />
		</div>
	);
}

export default App;
