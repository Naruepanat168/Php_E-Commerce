<?php
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$address = $_POST['address'];
	$am = $_POST['am'];
	$province = $_POST['province'];
	$call = $_POST['call'];
	$img = $POST['imageFile'];
	// ตรวจสอบว่ามีไฟล์รูปภาพถูกอัปโหลดหรือไม่


	// เรียกใช้ cURL และส่งไฟล์รูปภาพไปยังเซิร์ฟเวอร์ของคุณ (หรือบันทึกลงดาต้าเบส)
	$sToken = "jqMhsUI455eSC0KhoIHzrQwTHyOvYJiLhcrOPnukRNx"; // ใส่ Token ของคุณที่ได้จาก Line Notify
	$sMessage = "มีรายการสั่งซื้อเข้าจ้า\n";
	$sMessage .= "ชื่อ: " . $name . "\n";
	$sMessage .= "นามสกุล: " . $surname . "\n";
	$sMessage .= "ที่อยู่: " . $address . "\n";
	$sMessage .= "อำเภอ: " . $am . "\n";
	$sMessage .= "จังหวัด: " . $province . "\n";
	$sMessage .= "เบอร์โทร: " . $call . "\n";
	$imageFile = new CURLFILE($img);

	$data = array(
		'message' => $sMessage,
		'imageFile' => $imageFile
	);



	// เรียกใช้ cURL และส่งข้อมูลไปยัง Line Notify
	$chOne = curl_init();
	curl_setopt($chOne, CURLOPT_URL, "https://notify-api.line.me/api/notify");
	curl_setopt($chOne, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($chOne, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($chOne, CURLOPT_POST, 1);
	curl_setopt($chOne, CURLOPT_POSTFIELDS,  $data);
	$headers = array('Content-type: multipart/form-data', 'Authorization: Bearer ' . $sToken . '',);
	curl_setopt($chOne, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($chOne, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($chOne);

	//Result error 
	if (curl_error($chOne)) {
		echo 'error:' . curl_error($chOne);
	} else {
		$result_ = json_decode($result, true);
		echo "status : " . $result_['status'];
		echo "message : " . $result_['message'];
	}
	curl_close($chOne);
}


?>
<button class="btn btn-outline-primary" type="submit" name="submit"><a href="../html/page1.html">กลับสู่หน้าแรก</a></button>