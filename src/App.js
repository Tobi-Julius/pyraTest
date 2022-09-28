import { registerRootComponent } from "expo";
import NavigationContainer from "./navigation/NavigationContainer";
import { useFont } from "./hooks";

const App = () => {
  const { isFontReady } = useFont();

  return isFontReady ? <NavigationContainer /> : null;
};

export default registerRootComponent(App);
