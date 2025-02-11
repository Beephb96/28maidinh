import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import React from "react";

const TestRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <><div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div><div style={{ height: '1000px' }}>
        <a>ádsfgfh</a>
      </div></>
  );
};

export default TestRedux;
