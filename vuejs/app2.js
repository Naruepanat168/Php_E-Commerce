Vue.createApp({
  data() {
    //ข้อมูล
    return {
      cart: JSON.parse(localStorage.getItem("cart")), //แปลงสติงเป็นออบเจต
    };
  },
  created() {},
  methods: {
    deleteCart(id) {
      this.cart.splice(this.cart.indexOf(id), 1);
      localStorage.setItem("cart", JSON.stringify(this.cart)); //แปลงจากออบเป็นสติง
    },
    fin() {
      alert("เสร็จสิ้นการชำระเงิน");
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    calculateTotalPrice() {
      let totalPrice = 0;
      this.cart.forEach((item) => {
        totalPrice += item.price * item.amount;
      });
      return totalPrice;
    },
    countOrderedItems() {
        // ฟังก์ชันนับรายการที่คุณสั่งทั้งหมด
        return this.cart.length;
      },


      calculateOrderTotal() {
        this.orderTotal = this.cart.reduce((total, item) => {
          return total + item.price * item.amount;
        }, 0);
      },
      sendCartToPHP() {
        const data = {
          cart: this.cart,
          orderTotal: this.calculateTotalPrice(), // รวมยอดรายการทั้งหมด
        };
  
        axios
          .post('../server/sendinfo.php', data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error('เกิดข้อผิดพลาดในการส่งข้อมูลไปยัง PHP:', error);
          });
        },
    
  },
  computed: {
    totalOrderedItems() {
      return this.cart.length;
    },
  },
  watch: {
    cart: {
      handler() {
        this.calculateOrderTotal();
      },
      deep: true,
    },
},
  
}).mount("#app2"); //ทำงานบนไอดี
