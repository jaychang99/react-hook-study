// Test.js

import WidthViewer from 'common/useEffect/WidthViewer';
import { useState } from 'react';

function Test() {
  // 현재 창의 너비를 보여줄지 말지 결정하는 state
  const [showWindowWidth, setShowWindowWidth] = useState(false)

  return (
    <div>
      <button onClick={() => { setShowWindowWidth(!showWindowWidth) }}>{showWindowWidth ? "닫기" : "창 가로 너비 보기"}</button>
      {showWindowWidth &&
        <WidthViewer />
      }
    </div>
  )
}

export default Test