Vue.createApp({ 
    data() { //ข้อมูล
        return {
            cart: JSON.parse(localStorage.getItem('cart')), //แปลงสติงเป็นออบเจต
        }
    },
    created() {

    },
    methods: {
        deleteCart(id) {
            this.cart.splice(this.cart.indexOf(id), 1);
            localStorage.setItem('cart', JSON.stringify(this.cart)); //แปลงจากออบเป็นสติง
        },
        fin() {
            alert("เสร็จสิ้นการชำระเงิน");
            this.cart = [];
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    },
}).mount('#app2') //ทำงานบนไอดี