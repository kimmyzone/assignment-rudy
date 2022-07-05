import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
    header: null
})


export const mutations = {
    updateValue: (state, headers) => {
        state.header = headers
    }
}

