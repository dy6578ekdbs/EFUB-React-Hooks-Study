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
import UseNotificationEx from "./hooks/UseNotificationEx";
import UseAxiosEx from "./hooks/UseAxiosEx";

function App() {
	return (
		<div className="App">
			<h1>React Hooks Study</h1>
			<div style={{ display: "flex" }}>
				<div style={{ marginRight: "20px" }}>
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
				</div>
				<div>
					<UseFullscreenEx />
					<UseNotificationEx />
					<UseAxiosEx />
				</div>
			</div>
		</div>
	);
}

export default App;
