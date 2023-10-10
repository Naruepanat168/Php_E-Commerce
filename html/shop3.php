<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHOP</title>
    <link rel="icon" href="https://i.pinimg.com/750x/ad/80/65/ad80659ac2bdab5d9f66096520ca528b.jpg" alt="icon">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css1/shop3.css">
    <script src="https://unpkg.com/vue@3"></script>


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet">


    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }

        body {
            font-family: 'Itim', cursive;
        }
    </style>


</head>

<body id="app2">
    <header class="nav1">
        <img class="logo" src="https://www.i-pic.info/i/ueXq577217.png" width="130" alt="logo">
        <nav>
            <ul class="nav fw-bold">
                <li>
                    <a style="color:#ff527e " href="../html/page1.html">หน้าหลัก</a>
                </li>
                <li>
                    <a style="color:#ff527e " href="../html/man.html">ผู้ชาย</a>
                </li>
                <li>
                    <a style="color: #ff527e" href="../html/woman.html">ผู้หญิง</a>
                </li>
               
                    <a style="color:#000000" href="../html/shop.html">สินค้า</a>
                </li>
                </li>
                <li>
                    <a style="color:#ff527e" href="../html/about.html">เกี่ยวกับเรา</a>
                </li>
            </ul>
    </header>

    <main>

        <div class="a" style="padding-left: 10%; padding-top: 5%; padding-bottom: 4%; ">
            <a style="font-weight: 200; font-size: 16px;" class="text-secondary"
                href="../html/shop.html">ผลิตภัณฑ์ทั้งหมด</a>
            >
            <a style="color: #780068; font-weight: 200; font-size: 16px;" class="text-pimary" href="#">ตะกร้า</a>
        </div>


        <table class="table" >
            <thead >
                <tr>
                    <th scope="col">สินค้า</th>
                    <th scope="col">ชื่อสินค้า</th>
                    <th scope="col">ราคา</th>
                    <th scope="col">จำนวน</th>
                    <th scope="col">ราคาทั้งหมด</th>
                    <th scope="col">ลบ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in cart">
                    <th scope="row">{{i.id}}</th>
                    <td>{{i.name}}</td>
                    <td>{{i.price}}</td>
                    <td><button @click="i.amount--" style="color: black;"
                            class="btn btn-sm btn-outline-light">-</button>{{i.amount}}<button @click="i.amount++"
                            style="color: black;" class="btn btn-sm btn-outline-light">+</button></td>
                    <td>{{i.price * i.amount}}</td>
                    <td><button @click="deleteCart(i.id)" class="btn btn-sm btn-outline-danger">ลบ</button></td>
                </tr>
            </tbody>
        </table>




       
        <form class="row g-3 needs-validation" style="padding: 10%;" novalidate action="sendinfo.php" method="POST">
            <label for="validationCustom01" class="form-label" style="font-size: 25px;">การสั่งซื้อ</label>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">ชื่อ</label>
                <input type="text" class="form-control" id="validationCustom01" name="name" aria-describedby="name">
                <div class="invalid-feedback">
                    กรุณาใส่ชื่อ.
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">นามสกุล</label>
                <input type="text" class="form-control" id="validationCustom02"  required>
                <div class="invalid-feedback">
                    กรุณาใส่นามสกุล.
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">ที่อยู่</label>
                <input type="text" class="form-control" id="validationCustom02"  required>
                <div class="invalid-feedback">
                    กรุณาใส่ที่อยู่.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">อำเภอ</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">เลือกอำเภอ</option>
                    <option>เมือง</option>
                    <option>ลาดยาว</option>
                    <option>หนองปลิง</option>
                </select>
                <div class="invalid-feedback">
                    กรุณาเลือกอำเภอ.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">จังหวัด</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">เลือกจังหวัด</option>
                    <option>พะเยา</option>
                    <option>นครสวรรค์</option>
                    <option>เชียงใหม่</option>
                </select>
                <div class="invalid-feedback">
                    กรุณาเลือกจังหวัด.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">เบอร์โทร</label>
                <input type="text" class="form-control" id="validationCustom05" required>
                <div class="invalid-feedback">
                    กรุณาใส่เบอร์โทร.
                </div>
            </div>
            <div class="col-12">
                <label for="validationCustom05" class="form-label">แนปสลิป</label>
                <input class="form-control" type="file" name="" id="">
                <div class="invalid-feedback">
                    กรุณาแนบสลิป.
                </div>
            </div>
            <div class="col-12">
                <button  class="btn btn-outline-primary" type="submit" name="submit"><a href="../html/page1.html">ชำระเงิน</a></button>
            </div>
        </form>

        </div>
        <div class="container">
            <footer class="py-3 my-4 p-md-6 m-md-6">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="../html/page1.html" class="nav-link px-2 text-muted">หน้าหลัก</a>
                    </li>
                    <li class="nav-item"><a href="../html/man.html" class="nav-link px-2 text-muted">ผู้ชาย</a></li>
                    <li class="nav-item"><a href="../html/wonman.html" class="nav-link px-2 text-muted">ผู้หญิง</a>
                    </li>
                   
                        <a class="nav-link px-2 text-muted" href="../html/shop.html">สินค้า</a>
                    </li>
                    <li class="nav-item"><a href="../html/about.html" class="nav-link px-2 text-muted">เกี่ยวกับเรา</a></li>
                </ul>
                <p class="text-center text-muted">&copy; กลุ่มร้านขายเสื้อผ้า </p>
            </footer>
        </div>


    </main>
</body>
<script src="../vuejs/app2.js"></script>
<script>
    (function () {
      'use strict'
    
      var forms = document.querySelectorAll('.needs-validation')

      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()</script>

</html>