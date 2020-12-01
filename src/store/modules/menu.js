const state = {
    curRoute:''
}

const mutations = {
    changeName(state, data) {
        state.name = data
    }
}
const actions = {

}
const getData = () => {
    setTimeout(() => {
        return '123'
    }, 2000)
}

export default {
    namespaced: true,
    state,
    mutations
}