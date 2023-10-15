<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</head>
<body>
<form action="<?=$_SERVER['PHP_SELF'];?>" method="POST" enctype="multipart/form-data">
        <input type="file" name="uploadfile">
        <input type="submit" name="submit">
    </form>
</body>
</html>

<?php
if (isset($_POST['submit'])) {

    $dir = "upload/";
    $fileImage = $dir . basename($_FILES["uploadfile"]["name"]);
    if(move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $fileImage) ){
        echo"ชิื่อไฟล์".basename($_FILES["uploadfile"]["name"])."อัพโหลดแล้ว";
    }else{
        echo "เกิดข้อผิดพลาด";
    }   
}
?>
