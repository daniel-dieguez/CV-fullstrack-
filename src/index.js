import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { NextUIProvider } from '@nextui-org/react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

//const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
ReactDOM.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>,
  document.getElementById('root')
);
