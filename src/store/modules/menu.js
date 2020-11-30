const state = {
    name: 'syz',
    age: 12
}

const mutations = {
    changeName(state, data) {
        state.name = data
    }
}

const actions = {
    async changeNameActions({
        commit,
        state
    }, data) {
        console.log(123)
    }
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