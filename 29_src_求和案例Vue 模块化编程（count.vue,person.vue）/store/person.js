//人员功能相关的配制

//导入axios(请求框架)
import axios from 'axios'
//导入nanoid(生成唯一id)
import { nanoid } from 'nanoid'
export default {
    //开启命名空间
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('姓名必须以“王”开头')
            }
        },

        //联系后端api
        addPersonServer(context) {
            axios.get(`https://api.uixsj.cn/hitokoto/get?type=social`)
                .then(res => context.commit('ADD_PERSON', {
                    id: nanoid(),
                    name: res.data
                }))
                .catch(e => alert(e.message));
        }
    },
    mutations: {
        // 添加一个人
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON方法被调用')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { name: '张三', age: 20 },
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}