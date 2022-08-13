import React, {
	useReducer,
	createContext,
	useCallback,
	useContext,
} from "react";

const InputStateContext = createContext();
const InputDispatchContext = createContext();

const initialState = [
	{ id: 1, name: "selected", status: "default" },
	{ id: 2, name: "input", status: "" },
];

const reducer = (state, action) => {
	switch (action.type) {
		case "SELECTTV":
			let copy1 = [...state];
			copy1[0].status = "TV";
			return copy1;
		case "SELECTMOVIE":
			let copy2 = [...state];
			copy2[0].status = "영화";
			return copy2;
		case "INPUT":
			let copy3 = [...state];
			copy3[1].status = "";
			return copy3;
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export function InputProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<InputStateContext.Provider value={state}>
			<InputDispatchContext.Provider value={dispatch}>
				{children}
			</InputDispatchContext.Provider>
		</InputStateContext.Provider>
	);
}

export function useInputState() {
	const context = useContext(InputStateContext);
	if (!context) {
		throw new Error("Cannot find InputProvider");
	}
	return context;
}
export function useInputDispatch() {
	const context = useContext(InputDispatchContext);
	if (!context) {
		throw new Error("Cannot find InputProvider");
	}
	return context;
}
