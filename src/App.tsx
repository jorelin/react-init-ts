import React, { useEffect  } from "react";
import './App.scss';
import Routers from './router';
import { getCookie } from './utils/commonFn'
function App() {
  useEffect(() => {
    // 监听地址栏变化
    window.onhashchange = setPath
    // 判断token是否过期
    setPath();
  }, [])
  const setPath = () => {
    if (!getCookie('token')) {
      window.location.hash = '#/'
    }
  }
  return (
    <div className="App">
      <Routers />
      {/* <a href="https://www.baidu.com">learn react</a> */}
    </div>
  );
}

export default App;
