import axios from "axios";
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
      addToCart(product) {
        this.cart.push(product);
        localStorage.setItem("cart", JSON.stringify(this.cart));
    
        this.sendDataToPHP({
          productName: product.name,
          cart: this.cart,
        });
      },
      sendDataToPHP(data) {
        axios.post('../server/sendinfo.php', data)
          .then(response => {
            console.log(response.data); // ตรวจสอบข้อมูลที่ PHP ส่งกลับ (ถ้ามี)
          })
          .catch(error => {
            console.error('เกิดข้อผิดพลาดในการส่งข้อมูลไปยัง PHP:', error);
          });
      }
    
  },
 
  
}).mount("#app2"); //ทำงานบนไอดี
