import { Admin } from "react-admin";
import "./App.css";
import data from "./attributes/data";

const App = () => <Admin title="SINOTAMU" dataProvider={data} />;

export default App;
