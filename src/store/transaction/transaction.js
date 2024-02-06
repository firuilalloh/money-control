import { defineStore } from "pinia";
import * as sv$transaction from "../../service/transaction/transaction.js"

const st$transaction = defineStore({
    id: "Transaction store",
    state: () => ({
        dataTransaction: {
            status: null,
            data:[]
        }
    }),
    actions: {
        async a$getTransaction() {
            try {
                const { data, status } = await sv$transaction.getTransaction();
                this.dataTransaction = {
                    data,
                    status
                }
            } catch (error) {
                this.dataTransaction = {
                    status: false,
                    data: []
                }
            }
        }
    },
    getters: {
        g$dataTransaction: ({dataTransaction}) => dataTransaction
    }
})

export default st$transaction;