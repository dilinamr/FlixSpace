import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchDataFromApi } from "./utils/api";
import { getApiConfigaration } from "./store/homeSlice";

getApiConfigaration;
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfigaration(res));
    });
  };
  return (
    <div className="App">
      APP
      {url?.total_pages}
    </div>
  );
}

export default App;
