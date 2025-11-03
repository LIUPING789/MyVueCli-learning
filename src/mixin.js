export const mixin = {
    methods: {
        showName() {
            alert("学生的姓名：" + this.name);
        },
    },
    data() {
        return {
            x: 10,
            y: 20
        }
    },
}
