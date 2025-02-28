import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import { Divider } from "antd";

const Test = () => {
    const [effect, setEffect] = useState(0);
      const count = useSelector((state: RootState) => state.counter.value);
      const dispatch = useDispatch();
    useEffect(() => {
        console.log('Render useEffect')
        setEffect(() => count / 2);
    }, [count]);

    return (
        <div>
            <Divider>redux và useEffect</Divider>
            {console.log('Render')}
            <h1>tao có {count} cái bánh</h1>
                  <button onClick={() => dispatch(increment())}>+1</button>
                  <button onClick={() => dispatch(decrement())}>-1</button>
                  <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

            <div>
                <h1>số cái bánh khi thằng cờ hó đớp 1 nửa: {effect}</h1>
            </div>
            <div style={{height: "1000px"}}/>
        </div>
    );
};

export default Test;
