import { useState } from "react";

const useMode = () => {
	const [mode, setMode] = useState<"table" | "form">("table");

	const showForm = () => setMode("form");
	const showTable = () => setMode("table");
    
	return {
		formVisible: mode === "form",
		tableVisible: mode === "table",
		showForm,
		showTable
	};
};

export default useMode;
