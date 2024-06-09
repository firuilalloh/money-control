import { defineStore } from "pinia";
import * as sv$sales from "../../service/sales/sales";

const st$sales = defineStore({
    id: "Sales store",
    state: () => ({
        dataSales: {
            status: null,
            data: [],
        },
    }),
    actions: {
        async a$getSales() {
            try {
                const { data, status } = await sv$sales.getSales();
                this.dataSales = {
                    data,
                    status,
                };
            } catch (error) {
                this.dataSales = {
                    status: false,
                    data: [],
                };
            }
        },
        // async a$addTransaction(form) {
        //     try {
        //         await sv$transaction.addTransaction(form);
        //         await this.a$getTransaction();
        //     } catch ({ error, message }) {
        //         throw error ?? message;
        //     }
        // },
        // async a$editTransaction(id, form) {
        //     try {
        //         await sv$transaction.editTransaction(id, form);
        //         await this.a$getTransaction();
        //     } catch ({error, message}) {
        //         throw error ?? message;
        //     }
        // },
        // async a$deleteTransaction(id) {
        //     try {
        //         await sv$transaction.deleteTransaction(id);
        //         await this.a$getTransaction()
        //     } catch ({error, message}) {
        //         throw error ?? message
        //     }
        // }
    },
    getters: {
        g$dataSales: ({ dataSales }) => dataSales,
    },
});

export default st$sales;
