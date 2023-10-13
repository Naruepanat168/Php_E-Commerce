<?php
if (isset($_POST['submit'])) {
	$surname = $_POST['surname'];
	$address = $_POST['address'];
	$am = $_POST['am'];
	$province = $_POST['province'];
	$call = $_POST['call'];

	$filename = $_FILES['uploadfile']['name'];
	$ext = pathinfo($filename, PATHINFO_EXTENSION);
	$allowed = array('jpg', 'JPG', 'jpeg','JPEG','png','PNG');
	if (!in_array($ext, $allowed)) {
		$_SESSION['RespClass'] = 'danger';
		$_SESSION['RespDisplay'] = 'block';
		$_SESSION['RespMessage'] = 'Invalid file name extension';
	} else {
		$name = explode('.', $filename);
		$ext = $name[1];
		$milliseconds = round(microtime(true) );
		$newfilename = $milliseconds . '.' . $ext;

		$tmpname = $_FILES['uploadfile']['tmp_name'];
		$moveto = '../server/' . $newfilename;

		echo $moveto;
		// if (move_uploaded_file($tmpname, $moveto)) {
		// 	chmod('../server/' . $newfilename, 0777);
		// 	$_SESSION['RespClass'] = 'success';
		// 	$_SESSION['RespDisplay'] = 'block';
		// 	$_SESSION['RespMessage'] = 'Upload successfully';
		// } else {
		// 	$_SESSION['RespClass'] = 'danger';
		// 	$_SESSION['RespDisplay'] = 'block';
		// 	$_SESSION['RespMessage'] = 'Upload fail. Something went wrong!';
		// }
	}



	// echo $newfilename;
	// ตรวจสอบว่ามีไฟล์รูปภาพถูกอัปโหลดหรือไม่

	// เรียกใช้ cURL และส่งไฟล์รูปภาพไปยังเซิร์ฟเวอร์ของคุณ (หรือบันทึกลงดาต้าเบส)
	$sToken = "jqMhsUI455eSC0KhoIHzrQwTHyOvYJiLhcrOPnukRNx"; // ใส่ Token ของคุณที่ได้จาก Line Notify
	// $sMessage = "มีรายการสั่งซื้อเข้าจ้า\n";
	// $sMessage .= "ชื่อ: " . $name . "\n";
	// $sMessage .= "นามสกุล: " . $surname . "\n";
	// $sMessage .= "ที่อยู่: " . $address . "\n";
	// $sMessage .= "อำเภอ: " . $am . "\n";
	// $sMessage .= "จังหวัด: " . $province . "\n";
	// $sMessage .= "เบอร์โทร: " . $call . "\n";


}
?>
<button class="btn btn-outline-primary" type="submit" name="submit"><a href="../html/page1.html">กลับสู่หน้าแรก</a></button>