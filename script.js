const {
    createApp
} = Vue;
createApp({
    data() {
        return {
            items: []
        }
    },
    methods: {
        add(item){
            this.items.push(item);
            console.log(this.items);
        },
        reorder(){
            this.items.sort()
            console.log(this.items)
        }
    },
    mounted() {

    },
}).mount('#app')