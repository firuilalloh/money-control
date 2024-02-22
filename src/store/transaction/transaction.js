import { defineStore } from "pinia";
import * as sv$transaction from "../../service/transaction/transaction.js";

const st$transaction = defineStore({
    id: "Transaction store",
    state: () => ({
        dataTransaction: {
            status: null,
            data: [],
        },
        dataBalance: {
            status: null,
            message: "",
            data: [],
        },
    }),
    actions: {
        async a$getTransaction() {
            try {
                const { data, status } = await sv$transaction.getTransaction();
                this.dataTransaction = {
                    data,
                    status,
                };
            } catch (error) {
                this.dataTransaction = {
                    status: false,
                    data: [],
                };
            }
        },
        async a$getBalance() {
            try {
                const { status, message, data } = await sv$transaction.getBalance();
                this.dataBalance = {
                    data,
                    message,
                    status,
                };
            } catch (error) {
                this.dataBalance = {
                    status: false,
                    message: "",
                    data: [],
                };
            }
        },
        async a$addTransaction(form) {
            try {
                await sv$transaction.addTransaction(form);
                await this.a$getTransaction();
            } catch ({ error, message }) {
                throw error ?? message;
            }
        },
    },
    getters: {
        g$dataTransaction: ({ dataTransaction }) => dataTransaction,
        g$dataBalance: ({ dataBalance }) => dataBalance,
    },
});

export default st$transaction;
