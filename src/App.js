import asyncComponent from "./components/AsyncComponent";
import "./styles.css";
const AsyncMyComponent = asyncComponent(() =>
  import("./components/myComponent")
);

export default function App() {
  return (
    <div className="App">
      <AsyncMyComponent />
    </div>
  );
}
