<?php

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
}
?>
