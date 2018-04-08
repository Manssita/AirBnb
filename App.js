import { StackNavigator } from "react-navigation";
import Log from "./src/screens/Log/Log";
import Home from "./src/screens/Home/Home";

console.ignoredYellowBox = ["Warning: componentWill"];

const App = StackNavigator({
  Log: {
    screen: Log
  },
  Home: {
    screen: Home
  }
});
export default App;
