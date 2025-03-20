import { create } from 'zustand'
import { useAuthStore } from './authStore'
import axios from 'axios'
export const useTravelDataStore = create((set,get) => ({
    travelData: [],
    // lowStockProducts: [],
    addTravelData: async (details) => {
        try {
            const response = await axios.post('/api/v1/travelDetails/addDetails', details)
            console.log(response.data.user)
        } catch (error) {
            console.log(error.message)
        }
    },
    checkTravelData: async () => {
        try {
            console.log('Heyyyyy')
            const response = await axios.get('api/v1/auth/authCheck')
            set({ products: response.data.user.productsList })
            const products = get().products
            set({lowStockProducts:products.filter((item)=>item.stock<=item.minStock)})

        } catch (error) {
            console.log('error in authChek ', error.message)
            set({ products: [] })

        }
    },

}))