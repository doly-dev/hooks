// ref:
//  https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
import { useRef, useEffect } from "react";

export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}