import { useEffect, useState } from "react";

function UseEffectTest() {
  // 오로지 rerender 을 시키기 위한 state
  const [foo, setFoo] = useState();

  // console.log("컴포넌트가 render 되었습니다! 😃");

  useEffect(() => {
    // 최초 컴포넌트 render 시 및 매 update 직후 실행하는 코드!

    console.log("컴포넌트가 mount 또는 update 되었습니다. ")
    return () => {
      console.log("컴포넌트가 update 또는 unmount 되었습니다!")
    }
  });

  return (
    <div>
      <p>Hello, world!</p>
      <button onClick={() => { setFoo(!foo); }}>
        컴포넌트 rerender
      </button>
    </div>
  );
}

export default UseEffectTest;
