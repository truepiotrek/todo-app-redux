import { useSelector } from "react-redux";

import { CounterState } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state: CounterState) => state.value)

  return (
    <>You have added <b>{ count }</b> item(s) to your list</>
  );
};
