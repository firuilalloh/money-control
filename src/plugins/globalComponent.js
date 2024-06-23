import Table from "@/components/Table.vue";
import EmptyResult from "../components/EmptyResult.vue";
import ModalComponent from "../components/ModalComponent.vue";
import ModalComp from "../components/ModalComp.vue";
import InputComp from "../components/InputComp.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import DropDown from "../components/DropDown.vue";
import CardComp from "../examples/Cards/Card.vue";
import { Field, Form } from "vee-validate";
import DataTableFilter from "../components/DataTableFilter.vue";
import BaseInput from "../components/BaseInput.vue";

const GlobalComponent = {
  install(app) {
    app.component("ButtonComponent", ButtonComponent);
    app.component("TableComp", Table);
    app.component("EmptyResult", EmptyResult);
    app.component("ModalComponent", ModalComponent);
    app.component("ModalComp", ModalComp);
    app.component("InputComp", InputComp);
    app.component("DropDown", DropDown);
    app.component("CardComp", CardComp);
    app.component("DataTableFilter", DataTableFilter);
    app.component("BaseInput",BaseInput)

    app.component("FieldForm", Field);
    app.component("FormComp", Form);
  },
};

export default GlobalComponent;
