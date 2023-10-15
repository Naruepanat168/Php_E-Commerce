<?php
if (isset($_POST['submit'])) {
	// เชื่อมต่อเข้าสู่ Line Notify
	$sToken = "jqMhsUI455eSC0KhoIHzrQwTHyOvYJiLhcrOPnukRNx"; // ใส่ Token ของคุณที่ได้จาก Line Notify

	// ตรวจสอบไฟล์ที่อัปโหลด
	$filename = $_FILES['uploadfile']['name'];
	$ext = pathinfo($filename, PATHINFO_EXTENSION);
	$allowed = array('jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG');

	if (!in_array($ext, $allowed)) {
		echo "Invalid file name extension";
	} else {
		$milliseconds = round(microtime(true));
		$newfilename = $milliseconds . '.' . $ext;

		$tmpname = $_FILES['uploadfile']['tmp_name'];
		$moveto = 'upload/' . $newfilename;

		if (move_uploaded_file($tmpname, $moveto)) {
			chmod('upload/' . $newfilename, 777);
		} else {
			echo "Upload fail. Something went wrong!";
		}

		// เตรียมไฟล์ที่จะส่งไปยัง Line Notify
		$imageFile = new CURLFile($moveto);

		$data = array(
			'message' => 'คำอธิบายรูปภาพ (ถ้ามี)',
			'imageFile' => $imageFile,
		);

		// สร้างคำขอ POST ด้วย cURL
		$chOne = curl_init();
		curl_setopt($chOne, CURLOPT_URL, "https://notify-api.line.me/api/notify");
		curl_setopt($chOne, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($chOne, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($chOne, CURLOPT_POST, 1);
		curl_setopt($chOne, CURLOPT_POSTFIELDS, $data);

		$headers = array(
			'Content-type: multipart/form-data',
			'Authorization: Bearer ' . $sToken,
		);
		curl_setopt($chOne, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($chOne, CURLOPT_RETURNTRANSFER, 1);
		$result = curl_exec($chOne);

		// ตรวจสอบผลลัพธ์
		if (curl_error($chOne)) {
			echo 'error:' . curl_error($chOne);
		} else {
			$result_ = json_decode($result, true);
			echo "status : " . $result_['status'];
			echo "message : " . $result_['message'];
		}

		curl_close($chOne);
	}
}


// echo $newfilename;
// ตรวจสอบว่ามีไฟล์รูปภาพถูกอัปโหลดหรือไม่

// เรียกใช้ cURL และส่งไฟล์รูปภาพไปยังเซิร์ฟเวอร์ของคุณ (หรือบันทึกลงดาต้าเบส)
// $sMessage = "มีรายการสั่งซื้อเข้าจ้า\n";
// $sMessage .= "ชื่อ: " . $name . "\n";
// $sMessage .= "นามสกุล: " . $surname . "\n";
// $sMessage .= "ที่อยู่: " . $address . "\n";
// $sMessage .= "อำเภอ: " . $am . "\n";
// $sMessage .= "จังหวัด: " . $province . "\n";
// $sMessage .= "เบอร์โทร: " . $call . "\n";



?>
<button class="btn btn-outline-primary" type="submit" name="submit"><a href="../html/page1.html">กลับสู่หน้าแรก</a></button>