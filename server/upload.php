<?php
if (isset($_POST['submit'])) {

    $dir = "uploaded_file/";
    $fileImage=$dir . basename($_FILES["uploadfile"]["name"]);
    if (move_uploaded_file($_FILES["uploadfile"]["tmp_name"],$fileImage)){
        echo "ไฟล์ภาพชือ".basename($_FILES["uploadfile"]["name"])."อัพโหลดเสร็จ";
    }else{
        echo"เกิดข้อผืดพลาด";
    }
}
?>