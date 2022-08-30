import { Fragment } from "react";
import ChampionsSquad from "./pages";
import { IntlProvider } from "react-intl";
// react-intel enables multi language

function App() {
  return (
    <Fragment>
      <IntlProvider defaultLocale={"en"} locale={"en"}>
        <ChampionsSquad />
      </IntlProvider>
    </Fragment>
  );
}

export default App;
