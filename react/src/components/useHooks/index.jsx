import { useCustomState } from "./useState";
import { useCustomEffect } from "./useEffect";
import { useCustomRef } from "./useRef";
import { useCustomMemo } from "./useMemo";
import { useCustomCallback } from "./useCallback";
import { useCustomReducer } from "./useReducer";
import { useAppContext } from "./useContext";

const App = () => {
  // Using useCounter
  const {
    count: Count1,
    increment: increment1,
    decrement,
    reset,
  } = useCustomState(10);

  const { data, loading, error } = useCustomEffect(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const { inputRef, focusInput } = useCustomRef();
  const { number, setNumber, factorial } = useCustomMemo();
  const { count, increment } = useCustomCallback();
  const { state, dispatch } = useCustomReducer();
  const { value, setValue } = useAppContext();

  return (
    <>
      <div className="App bg-red-600 p-5">
        <h1 className="text-white">Custom Hooks Demo</h1>
      </div>
      {/* useState */}
      <div className="bg-orange-50 p-8 flex gap-3">
        <h1 className="text-xl text-blue-700 font-bold">useState Example</h1>
        <p>Count: {Count1}</p>
        <button onClick={increment1}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      {/* useEffect */}
      <div className="bg-green-200 flex gap-7 p-8">
        <h1 className="text-xl text-blue-700 font-bold">useEffect Example</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <h2 className="text-red-700">{data.title.slice(1, 5)}</h2>
            <p>{data.body.slice(1, 10)}</p>
          </div>
        )}
      </div>

      {/* useRef */}
      <div className="bg-yellow-200 p-8 flex gap-6">
        <h1 className="text-xl text-blue-700 font-bold">useRef Example</h1>
        <input ref={inputRef} placeholder="Click button to focus" />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      {/* useMemo */}
      <div className="bg-orange-100 p-8 flex gap-6">
        <h1 className="text-xl text-blue-700 font-bold">useMemo Example</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>Factorial: {factorial}</p>
      </div>

      {/* useCallback */}
      <div className="bg-purple-100 flex gap-6 p-8">
        <h1 className="text-xl text-blue-700 font-bold">useCallback Example</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      {/* useReducer */}
      <div className="bg-blue-200 p-8 flex gap-6">
        <h1 className="text-xl text-blue-700 font-bold">useReducer Example</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      {/* useContext */}
      <div className="bg-orange-100 p-8 flex gap-6">
        <h1 className="text-xl text-blue-700 font-bold">useContext Example</h1>
        <p>{value}</p>
        <button onClick={() => setValue("Updated Context!")}>Update</button>
      </div>
    </>
  );
};

export default App;
