Week1 เรียนการเกี่ยวกับการสร้าง Array พื้นฐานตั้งแต่เริ่้มเพื่อความเข้าใจมากขึ้น ทำให้รู้ว่าการสร้าง Array มีวิธีสร้างแบบใดบ้าง 
for loop ธรรมดา ใช้วนซ้ำตามจำนวนรอบที่กำหนด ใช้ index (i) เข้าถึงค่าของ array 
for...of loop ใช้ในการวนค่าใน array โดยตรง ไม่ต้องใช้ index
map()สร้าง array ใหม่ โดยเปลี่ยนค่าทุกตัวตามที่กำหนด 
reduce()ใช้รวมค่าทุกตัวใน array ให้เหลือค่าเดียว (เช่น sum, average, product) 
sort()เรียงค่าใน array (ค่าเริ่มต้นจะเรียงตาม string)ถ้าอยากเรียงตัวเลข ต้องใส่ฟังก์ชันเปรียบเทียบ

Week2 เข้าใจโครงสร้าง object ที่เก็บข้อมูลแบบ key-value
การเข้าถึงข้อมูลด้วย dot notation และ bracket notation
การเพิ่ม/แก้ไข/ลบ property ใน object
การเขียน method (function ที่อยู่ใน object)
ใช้ for...in เพื่อวนลูปดู key ของ object

Week3 การสร้าง function แบบปกติและแบบ arrow function
การใช้พารามิเตอร์และค่า default
Higher-order function (ส่งฟังก์ชันเป็น argument ได้)
Recursion (ฟังก์ชันเรียกตัวเอง)
การใช้ function เพื่อเขียนโค้ดให้สั้น กระชับ และ reuse ได้


Week4 การดึงค่าจาก array/object มาเก็บในตัวแปรอย่างรวดเร็ว
Array destructuring เช่น [a, b] = [10, 20]
Object destructuring เช่น {name, age} = person
Spread operator (...) ใช้กระจายค่าของ array/object
Rest parameter (...args) รวมค่าหลาย ๆ ตัวมาเป็น array
การฝึกใช้ slice() และ fill() ที่ได้เรียนในคาบไป


Week5 เรียนรู้การทำงานของ this ในสถานการณ์ต่าง ๆ
this ใน object method → อ้างอิง object นั้น
this ในฟังก์ชันธรรมดา → อยู่ที่ context (เช่น global หรือ object ที่เรียกใช้)
this ใน arrow function → ไม่สร้าง context ใหม่ แต่ใช้ this จาก scope ที่หุ้มอยู่
เข้าใจว่าการเลือกใช้ function ปกติหรือ arrow function มีผลกับค่า this
การใช้งาน es module สามารถส่งโค้ดหรือfunctionไปใช้นอกไฟล์ฺที่เขียนได้ ใช้งานกับเว็บได้ มีวิธีการส่งที่หลากหลาย ทำให้การเขียนเว็บหรือการทำงานเป็นระเบียบมากขึ้น