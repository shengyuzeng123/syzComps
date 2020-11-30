const state = {
    name:'syz',
    age:12
}

const mutations = {
    changeName(state,data){
        state.name = data
    }
}

const actions = {
    changeNameActions({commit,state,rootState},data){
        console.log(rootState)
        commit('changeName',data)
    }
}

export default {
    namespaced:true,
    state,mutations,actions
}