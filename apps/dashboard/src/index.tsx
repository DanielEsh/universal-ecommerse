import { render } from 'react-dom';
import { Component } from "./Component";
const APP_ROOT_ID = 'root';

render(<Component />, document.getElementById(APP_ROOT_ID))