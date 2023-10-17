Vue.createApp({
  data() {
    return {
      productscat: [
        {
          id: 1,
          name: " The Bintabaht ผ้า Cotton 100 % ",
          price: 115,
          detail:
            "เสื้อยืดพร้อมสกรีน แบรนด์เสื้อเฮีย เนื้อผ้าเฉพาะของแบรนด์ คุณภาพเยี่ยม มีทั้งขาวและดำ ",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-7qul9-lihejiwytucob0",
          amount: 0,
        },
        {
          id: 2,
          name: "CHAISORO x TRULY เสื้อยืดคอกลม รุ่น สัส(กู)",
          price: 130,
          detail:
            "ด้านหลังโลโก้ทรูลี่ใหญ่สะใจทับอยู่บนโลโก้ต้ายัตชัยโสโรที่คอยป่วนอยู่เสมอ มีภาษาอังกฤษอยู่ข้างล่างว่า'A true Friend will always care about how you feel, Not what you wear on the outside.'",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-7qula-lhbic18gkqaw93",
          amount: 0,
        },
        {
          id: 3,
          name: "TRULY กางเกงช้าง YES",
          price: 180,
          detail:
            "ขนาดฟรีไซส์ เอว 14 -50 นิ้ว  สะโพก 58 ยาว 38 นิ้ววัสดุ ผ้าสปันพิมพ์ลาย",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-7r98q-llg5vmzenei487",
          amount: 0,
        },

        {
          id: 4,
          name: "ZEROBOY - DENIM CARGO PANTS “ ยีนส์คาร์โก้ “",
          price: 240,
          detail: "กางเกงขายาวคาร์โก้ ทรงขากระบอกใหญ่",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-23020-qu0hqzy2munve5",
          amount: 0,
        },
        {
          id: 5,
          name: "adidas ไลฟ์สไตล์ เสื้อยืดพิมพ์ลาย Liquid Foil Badge of Sport ผู้ชาย สีดำ HK9157",
          price: 300,
          detail:
            "ถ้ากำลังมองหาสีเมทัลลิกที่ดูทันสมัยเป็นพิเศษ คุณจะอยากได้เสื้อยืดโลโก้อาดิดาสตัวนี้ เส้นสายสุดโดดเด่นที่หมุนวนไปมาจะทำให้ทุกสายตาต้องหันกลับมามองอีกครั้ง",
          image:
            "https://down-th.img.susercontent.com/file/sg-11134201-7qvdt-ljc7zj5p5tv71d",
          amount: 0,
        },
        {
          id: 6,
          name: "LIVERPOOL FOOTBALL CLUB เสื้อแข่งผู้ชายทีมลิเวอร์พูล ชุดเยือน เกรด Supporter ฤดูกาล 2023/24",
          price: 350,
          detail:
            "โชว์การสนับสนุนของคุณที่มีต่อทีมหงส์แดงของเมอร์ซีย์ไซด์ด้วยเสื้อแข่งผู้ชายทีมลิเวอร์พูล ชุดเยือน เกรด Supporter ฤดูกาล 2023/24 LIVERPOOL FOOTBALL CLUB อย่างเป็นทางการ",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-7qul3-lk69m1uydtu16d",
          amount: 0,
        },
        {
          id: 7,
          name: "เสื้อยืดลําลองสําหรับผู้ชายผ้าฝ้ายแขนสั้นครึ่งแขน ",
          price: 400,
          detail:
            "ประเภทปลอกคอ: คอกลม ประเภทแขนเสื้อ: ธรรมดาสไตล์พื้นฐาน: เยาวชนนิยม",
          image:
            "https://down-th.img.susercontent.com/file/64f9deb3848e95653a767fdbeadac70c",
          amount: 0,
        },
        {
          id: 8,
          name: "เสื้อกันหนาวแขนยาว คอกลม ทรงหลวม แฟชั่นฤดูใบไม้ร่วง และฤดูหนาว สําหรับผู้ชาย และผู้หญิง 2022",
          price: 400,
          detail: "ปลอกเข็มและชายเสื้อสองชั้นทนทานกว่าเนื่องจากกระบวนการพิมพ์แ",
          image:
            "https://down-th.img.susercontent.com/file/sg-11134201-22100-x0ysl0g3p6iv9b",
          amount: 0,
        },
        {
          id: 9,
          name: "เพดดิกรี® สุนัขโตพันธุ์เล็ก รสเนื้อวัวเนื้อแกะHANLU 【COD】เสื้อผ้าผู้ชาย แฟชั่นเกาหลีรุ่น INS เสื้อกันหนาวผู้ชาย ทรงหลวม",
          price: 120,
          detail:
            "ชุดอินเทรนด์ต้องเริ่ม!ผ้าม่านเป็นสิ่งที่ดีมากการตัดสามมิติผลของร่างกายส่วนบนได้รับการปรับปรุงอย่างมากสบาย ๆ ",
          image:
            "https://down-th.img.susercontent.com/file/sg-11134201-22120-w2on52n1tmkv20",
          amount: 0,
        },

        {
          id: 10,
          name: "Uiowoo Pure desire ",
          price: 50,
          detail:
            " เสื้อแขนยาว คอสี่เหลี่ยม จับจีบ สไตล์อเมริกัน แฟชั่นฤดูใบไม้ผลิ และฤดูร้อน สําหรับผู้หญิง",
          image:
            "https://down-th.img.susercontent.com/file/sg-11134201-7qvdm-letpgbnoiy2w88",
          amount: 0,
        },
        {
          id: 11,
          name: "Uiowooxiaoxiangfeng ",
          price: 400,
          detail:
            "เสื้อแจ็กเก็ตถัก เข้ารูป และกระโปรงพลีท สไตล์ฝรั่งเศส แฟชั่นฤดูร้อน สําหรับผู้หญิง",
          image:
            "https://down-th.img.susercontent.com/file/de323a894eb739265c06711799c8a21f",
          amount: 0,
        },
        {
          id: 11,
          name: " เสื้อคลุม แขนยาว ",
          price: 390,
          detail:
            "ผ้าไหมพรม ถักตาข่าย แบบบาง สไตล์เกาหลี เสื้อแฟชั่นผู้หญิง คาร์แกนแขนยาว  ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-22110-t3389rhvxijve1 ",
          amount: 0,
        },
        {
          id: 12,
          name: "เสื้อคลุมไหมพรมแขนยาว  ",
          price: 530,
          detail: " ผ้าบางใส่สบาย สีพาสเทลน่ารักมาก ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7qul8-lh6hfegdw8okce ",
          amount: 0,
        },
        {
          id: 13,
          name: "เสื้อไหมพรมแบบถัก ",
          price: 510,
          detail: "  แขนยาวระบายรูๆเสื้อทรงครอปเก๋ๆ ",
          image:
            " https://down-th.img.susercontent.com/file/ef4417392dee2eec419d846acdaebab8 ",
          amount: 0,
        },
        {
          id: 14,
          name: " เสื้อคลุมถัก ผูกหน้า ",
          price: 200,
          detail:
            " อกได้ถึง 40 นิ้ว *แต่สามารถปรับขนาดใหญ่กว่านี้ ได้ตามต้องการเลยค่ะ ",
          image:
            " https://down-th.img.susercontent.com/file/dcf5763d6cfc5ccaa1ba2bbecbf2d6b6 ",
          amount: 0,
        },
        {
          id: 15,
          name: " เสื้อคาร์ดิแกน ",
          price: 760,
          detail:
            "  ผ้าคลุมไหล่ ผ้าถัก กันแดด ฉลุลาย ขนาดเล็ก เหมาะกับฤดูใบไม้ผลิ และฤดูร้อน สําหรับผู้หญิง  ",
          image:
            "  https://down-th.img.susercontent.com/file/sg-11134201-7rbmw-llaizlml3pmd21",
          amount: 0,
        },
        {
          id: 16,
          name: "  2023เสื้อยืดแขนสั้นแบบใหม่ ",
          price: 90,
          detail:
            " ฤดูร้อนนักเรียนหญิงทรงหลวมอินเทรนด์ ins hiphop มอนสเตอร์ตัวน้อยสไตล์อเมริกัน ",
          image:
            "https://down-th.img.susercontent.com/file/sg-11134201-23030-6kqr9kbpr6nv76  ",
          amount: 0,
        },
        {
          id: 17,
          name: " เสื้อสไตล์อเมริกัน ",
          price: 700,
          detail: " ย้อนยุคลายดอกไม้vคอปกแขนสั้นทรงเข้ารูปTเสื้อผู้หญิง ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qvds-liwjhrbrfipf69 ",
          amount: 0,
        },
        {
          id: 18,
          name: "  Amazon ",
          price: 600,
          detail:
            " การค้าต่างประเทศยุโรปและอเมริกาฤดูใบไม้ผลิ Amazon แฟชั่นร้อนเซ็กซี่สาวฮอตดอกไม้บริสุทธิ์ตกแต่งเสื้อเกาะอกไหล่ ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qvg5-lhonojm1o0h968 ",
          amount: 0,
        },
        {
          id: 19,
          name: "Hotgirl  ",
          price: 990,
          detail:
            " Hotgirl พร้อมส่งจากกทม ✨กระโปรงบรรทุกสินค้า Cargo skirt🌸กระโปรงทำงานวินเทจสไตล์อเมริกัน กระโปรงผ่าข้างกีฬาลำลอง ",
          image:
            " https://down-th.img.susercontent.com/file/cn-11134207-7r98o-lkyxigi90fxp72 ",
          amount: 0,
        },
        {
          id: 20,
          name: " Hotgirl  ",
          price: 750,
          detail:
            "กางเกงคาร์โก้ผู้หญิง y2k cargo pants🌸กางเกงแฟชั่นผู้หญิงสีดำวินเทจสไตล์อเมริกัน  ",
          image:
            " https://down-th.img.susercontent.com/file/cn-11134207-7r98o-llhxn2k1hu3w25 ",
          amount: 0,
        },
        {
          id: 21,
          name: " Hotgirl  ",
          price: 80,
          detail:
            " เสื้อเชิ้ตแขนสั้นสีขาวสำหรับผู้หญิง แฟชั่นเสื้อเชิ้ตย้อนยุคเรียบง่าย ",
          image:
            " https://down-th.img.susercontent.com/file/cn-11134207-7r98o-lm4l80cnb1lw1b ",
          amount: 0,
        },
        {
          id: 22,
          name: " Lovito  ",
          price: 50,
          detail:
            "  กางเกงขาสั้น สีพื้น L00242 (สีขาว / สีดำ / สีเทา / ชมพู / สีฟ้า) ",
          image:
            " https://down-th.img.susercontent.com/file/91f00f87eb737fe2deaa13e01a3e13d4 ",
          amount: 0,
        },
        {
          id: 23,
          name: " Lovito  ",
          price: 322,
          detail:
            "  เสื้อกล้ามวินเทจ ลายดอกไม้ สำหรับสตรี & เสื้อสายเดี่ยว L45AD031(แอพริคอท) ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-23020-tx3s8nff7snv7d ",
          amount: 0,
        },
        {
          id: 24,
          name: " Lovito  ",
          price: 150,
          detail:
            " เสื้อแขนกุด คอวี มีกระดุมหน้า สีพื้น สไตล์ลำลอง สำหรับผู้หญิง L47AD021 (สีดำ) ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qveq-lg1r67vpye0kb1 ",
          amount: 0,
        },
        {
          id: 25,
          name: " Lovito  ",
          price: 50,
          detail:
            " กระโปรงยีนมิดิ ฟอกสี แบบผ่า สีพื้น สไตล์ลำลอง แฟชั่นผู้หญิง L39AD079 (สีฟ้า) ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7r98o-lkjco2pxh0go78 ",
          amount: 0,
        },
        {
          id: 26,
          name: " Lovito  ",
          price: 534,
          detail:
            " เซ็ทกางเกงขาสั้นลำลอง แต่งระบาย สำหรับสตรี L45AD046(สีขาว) ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qvew-lfeuz6wuajym70 ",
          amount: 0,
        },
        {
          id: 27,
          name: " Lovito  ",
          price: 530,
          detail: "  กางเกงกีฬาขาสั้นเอวสูงธรรมดา L004015 (สีดำ/สีเทา) ",
          image:
            " https://down-th.img.susercontent.com/file/1809dbe96fc4b520278792ff37e288f7 ",
          amount: 0,
        },
        {
          id: 28,
          name: "  Lovito",
          price: 1000,
          detail: "กางเกงยีนขาบาน เอวสูง ลําลอง สีฟ้า L30AD050  ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-23010-ljh06s0hoxlv7c ",
          amount: 0,
        },
        {
          id: 29,
          name: " Lovito ",
          price: 520,
          detail: " เสื้อยีนลําลอง แบบแข็ง สีฟ้า ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-22120-otxfut3objlv5a ",
          amount: 0,
        },
        {
          id: 30,
          name: " H&M ",
          price: 60,
          detail: "  Woman Lace-trimmed ribbed vest top 1136436_2 ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qvfs-lk5ccl6adfti60 ",
          amount: 0,
        },
        {
          id: 31,
          name: " H&M ",
          price: 890,
          detail: "Woman Lace-trimmed ribbed vest top 1136436_1  ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qvd5-lk5cckrkxjbm15 ",
          amount: 0,
        },
        {
          id: 32,
          name: " H&M ",
          price: 340,
          detail: "Woman Lace-trimmed ribbed top 1163096_1  ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7rbmy-lm5i5yg76zq141 ",
          amount: 0,
        },
        {
          id: 33,
          name: " H&M ",
          price: 455,
          detail: "Woman Ribbed jersey top 1095191_3  ",
          image:
            " https://down-th.img.susercontent.com/file/sg-11134201-7qveu-ljc0wh5xthhdb3 ",
          amount: 0,
        },
        {
          id: 34,
          name: "  H&M",
          price: 546,
          detail: "เสื้อแขนยาวคอรูปหัวใจ H&M Sweetheart-Neck Top ผ้าร่อง  ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7qul1-lk6a6oc7gqhy26 ",
          amount: 0,
        },
        {
          id: 35,
          name: " H&M ",
          price: 2345,
          detail:
            " มินิเชิ้ตเดรสยีนส์แขนสั้นมีเชือดรูดที่เอว New Look Denim Tie Waist Mini Shirt Dress เข้าใหม่ ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98w-lmigji1cw8em32 ",
          amount: 0,
        },
        {
          id: 36,
          name: " ZARA  ",
          price: 453,
          detail:
            " เสื้อเชิ๊ต เนื้อผ้าซาติน ทรงโอเวอร์ไซส์ ใส่สบายมากบางตัวกันขโมยยังติด สวยจริง ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98y-lm1tl9saxo5q14 ",
          amount: 0,
        },
        {
          id: 37,
          name: " ZARA  ",
          price: 340,
          detail:
            "กางเกงขายาวทรงคาร์โก้ ที่กำลังฮิตกัน มีสีออกเทาๆ ขาว เบจ เนื้อผ้าไนลอน เนื้อผ้าคือปังมาก สวยตรงปกสวยและดีมาก  ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98o-lklxmo33h4kaa7 ",
          amount: 0,
        },
        {
          id: 37,
          name: " ZARA  ",
          price: 234,
          detail:
            "กางเกงคาร์โก้ สีชมพูอมม่วง เป็นกางเกงทรงฮิตสำหรับวัยรุ่น ทรงหลวมๆ ปลายขาปล่อย เนื้อผ้าใส่สบาย  ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98o-lklvfjnprjh603 ",
          amount: 0,
        },
        {
          id: 38,
          name: " ZARA  ",
          price: 120,
          detail:
            " กางเกงยีนส์ขายาว ทรงกระบอก ผ้าไม่ยืดนะคะ น้องสวยมากนะพี่ มี 4 สี ยีนส์อ่อน ยีนส์ ยีนส์เข้ม ดำ ทรงสวย ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkvu74737x7wab ",
          amount: 0,
        },
        {
          id: 39,
          name: " ZARA  ",
          price: 50,
          detail:
            " กางเกงขายาวทรงคาร์โก้ เนื้อผ้าซาติน เนื้อผ้าเงาๆ มีเชือกรูดที่เอวและปลายขา มีกระเป๋าด้านข้างทั้ง 2 ด้าน ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkm43xn2o5lmc6 ",
          amount: 0,
        },
        {
          id: 40,
          name: " ZARA  ",
          price: 345,
          detail: "  กางเกง ทรงขาปล่อย รุ่นนี้จะมีเชือกรูดตรงปลายขาด้วยจ่า ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98y-llqeydo5jwy693",
          amount: 0,
        },
        {
          id: 41,
          name: "  Stradivarius",
          price: 440,
          detail: " กางเกงผ้า ทรงกระบอก เอวสูง งานสวยทรงสวยมาก ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkyv9m0g4nsa77 ",
          amount: 0,
        },
        {
          id: 42,
          name: " STRADIVARIUS​ ​​Faux​ Leather​ Sherpa​ Jacket​ ",
          price: 600,
          detail:
            "Jacket​ บุขน​ สีดำ สวยมากๆ​ ​ ดูสวยแพง​ หนัง​ Polyester​ นุ่มๆ​ ไม่แข็ง​ ทรงหลวมๆ​ oversize​ ใส่ได้ชายหญิงค่ะ​ กันหนาวอากาศเย็นๆ ประมาณ 5-10 องศา ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7qul1-lk5icfr35glla3 ",
          amount: 0,
        },
        {
          id: 43,
          name: " SINSAY PUFFER​ WATER​ REPELLENT​ JACKET​ ",
          price: 230,
          detail:
            " แจ็กเก็ต​ สีเขียวอมน้ำตาล รุ่นนี้​ด้านในบุ​ Polyester​  กันลมกันละอองน้ำ​ น้ำหนักเบา​ ชายเสื้อและปลายแขนเสื้อสม็อก​ น่ารักมากๆ​ เลยค่ะ​ ใส่กันหนาวอากาศประมาณ​ 5-10 องศา​ ",
          image:
            " https://down-th.img.susercontent.com/file/th-11134207-7qul7-lkfmjd4c63jv6d",
          amount: 0,
        },

        {
          name: "Uiowoo ",
          price: 115,
          detail:
            "เสื้อยืดแขนสั้น ปักลายหมี ทรงหลวม สไตล์เกาหลี แฟชั่นฤดูร้อน สําหรับผู้หญิง นักเรียน",
          image:
            "https://down-th.img.susercontent.com/file/a057ce87a47ee2736b5bbe12bbf554b3",
          amount: 0,
        },
        {
          name: "เสื้อยืดแขนสั้น ความยาวปานกลาง แบบสวมหัว ทรงหลวม เข้ากับทุกการแต่งกาย แฟชั่นฤดูร้อน สําหรับผู้หญิง",
          price: 240,
          detail:
            "ผ้า/วัสดุ: โพลีเอสเตอร์/ โพลีเอสเตอร์ (โพลีเอสเตอร์)เนื้อหาส่วนผสม: 91% (รวม)-95% (รวม)องค์ประกอบยอดนิยม: เพชรเลื่อมพิมพ์",
          image:
            "https://down-th.img.susercontent.com/file/3bfd7a0036744e9bcee8239fc5693db6",
          amount: 0,
        },
        {
          name: "เสื้อยืดตาข่าย แขนกุด",
          price: 350,
          detail:
            "ผ้าไหมพรมยืด ใส่สบาย ฟรีไซส์ สไตล์เกาหลี เสื้อถักตาข่าย เสื้อแฟชั่นผู้หญิง",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-7qukz-ljm9ajqq8v1i5a",
          amount: 0,
        },
      ],
      cart: [],
      about: [
        {
          fullname: "นายนฤปนาท บุญยัง",
          num: "---",
        },
      ],
    };
  },
  computed: {
    totalAmount() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.amount;
      }, 0);
    },
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      // คำนวณราคารวมและเพิ่มในแต่ละรายการสินค้า
      product.totalPrice = product.price * product.amount;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    
      this.sendDataToPHP({
        productName: product.name,
        productPrice: product.price,
        productImage: product.image,
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
  }
  // jqMhsUI455eSC0KhoIHzrQwTHyOvYJiLhcrOPnukRNx
  
}).mount("#app");
