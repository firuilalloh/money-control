import DataTable from "../components/DataTable.vue";
import EmptyResult from "../components/EmptyResult.vue";
import ModalComponent from "../components/ModalComponent.vue";
import InputComp from "../components/InputComp.vue";
import DatePicker from "../views/Home.vue"

const GlobalComponent = {
  install(app) {
    app.component("DataTable", DataTable);
    app.component("EmptyResult", EmptyResult);
    app.component("ModalComponent", ModalComponent);
    app.component("InputComp", InputComp);
    app.component("DatePicker", DatePicker)
  },
};

export default GlobalComponent;
