//准备 actions、mutations、state  getters 四个对象


//求和功能相关的配制
export default {
    // 开启命名空间
    namespaced: true,
    // actions 用于响应组件中的动作：处理异步操作，如网络请求、数据存储等
    actions: {
        plus(context, value) {
            console.log('actions中的plus方法被调用')
            context.commit('PLUS', value)
        },
        reduce(context, value) {
            console.log('actions中的reduce方法被调用')
            context.commit('REDUCE', value)
        },

        oddPlus(context, value) {
            console.log('actions中的oddPlus方法被调用')
            if (context.state.sum % 2 === 1) {
                context.commit('ODDPLUS', value)
            }
        },
        wait(context, value) {
            console.log('actions中的wait方法被调用')
            setTimeout(() => {
                context.commit('WAIT', value)
            }, 1000);
        }
    },
    // 准备mutations  -----用于操作数据
    mutations: {
        PLUS(state, value) {
            console.log('mutations中的PLUS方法被调用')
            state.sum += value
        },
        REDUCE(state, value) {
            console.log('mutations中的REDUCE方法被调用')
            state.sum -= value
        },

        ODDPLUS(state, value) {
            console.log('mutations中的ODDPLUS方法被调用')
            state.sum += value
        },

        WAIT(state, value) {
            console.log('mutations中的WAIT方法被调用')
            state.sum += value
        },
    },
    // 准备state  -----用于存储数据
    state: {
        sum: 0,
        school: 'B站',
        subject: 'Vue',
    },
    // 准备getters  -----用于将state中的数据进行加工
    getters: {

        bigSum(state) {
            console.log('getters中的bigSum方法被调用')
            return state.sum * 10
        }
    }
}
