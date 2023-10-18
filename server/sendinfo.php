<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<?php

if (isset($_POST['submit'])) {
	// เชื่อมต่อเข้าสู่ Line Notify
	$sToken = "jqMhsUI455eSC0KhoIHzrQwTHyOvYJiLhcrOPnukRNx"; // ใส่ Token ของคุณที่ได้จาก Line Notify
	$name=$_POST['name'];
	$surname=$_POST['surname'];
	$address=$_POST['address'];
	$am=$_POST['am'];
	$province=$_POST['province'];
	$call=$_POST['call'];


	$sMessage = "\nมีรายการสั่งซื้อเข้าจ้า\n";
	$sMessage .= "ชื่อ: " . $name . "\n";
	$sMessage .= "นามสกุล: " . $surname . "\n";
	$sMessage .= "ที่อยู่: " . $address . "\n";
	$sMessage .= "อำเภอ: " . $am . "\n";
	$sMessage .= "จังหวัด: " . $province . "\n";
	$sMessage .= "เบอร์โทร: " . $call . "\n";
	

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

		// รับยอดรวมจาก POST request จาก Vue.js
		$orderTotal = $_POST['orderTotal'];

		// เตรียมไฟล์ที่จะส่งไปยัง Line Notify
		$imageFile = new CURLFile($moveto);

		$data = array(
			'message' => $sMessage,
			'imageFile' => $imageFile
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
			
			// echo"ส่งไปยังแม่ค้าเรียบร้อย";
			echo '<script>window.location.href = "result.html";</script>';

		}

		curl_close($chOne);
	}
}
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $productName = $data["productName"];
    $productPrice = $data["productPrice"];
    $productImage = $data["productImage"];
    $cart = $data["cart"];

	

    $message = "\nชื่อผลิตภัณฑ์: " . $productName . "\n";
    $message .= "ราคา: " . $productPrice . " บาท\n";
    $message .= "จำนวนสินค้าในตะกร้า: " . count($cart) . "\n";
    $message .= "รูปภาพ: " . $productImage . "\n";

    // คำนวณราคารวมของรายการในตะกร้า
    
    $message .= "ราคารวมของรายการสินค้า: " . $productPrice*count($cart) . " บาท\n";
    
    // เพิ่มข้อความที่เหลือเช่นเดิม

    $token = "jqMhsUI455eSC0KhoIHzrQwTHyOvYJiLhcrOPnukRNx";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://notify-api.line.me/api/notify");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "message=" . $message);
    $headers = array("Authorization: Bearer " . $token);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    curl_close($ch);
    
    echo "ส่งข้อมูลไปยัง LINE Notify สำเร็จ!";
	echo '<script>window.location.href = "../html/page1.html";</script>';

}

?>
