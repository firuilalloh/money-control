import "@/assets/js/nav-pills.js";
import "@/assets/scss/argon-dashboard.scss";

// import 'bootstrap/dist/css/bootstrap.css';

import "@/assets/css/nucleo-icons.css";
import "@/assets/css/nucleo-svg.css";


// GlobalComponent
import GlobalComponent from "./globalComponent";

export default {
  install(app) {
    app.use(GlobalComponent)
  },
};
