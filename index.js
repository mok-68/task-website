document.getElementById("submit").addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const sname = document.getElementById("sname").value;
    const age = document.getElementById("number").value;

    // 🔥 ตรวจสอบก่อน
    if(!name || !sname || !age){
        alert("กรุณาใส่ข้อมูลให้ครบ");
        return;
    }

    // แสดงผลในหน้าเว็บ
    document.getElementById('show').innerHTML =
        "ชื่อ: " + name + " นามสกุล: " + sname + " " + age + " years old";

    try{
        await fetch("https://script.google.com/macros/s/AKfycbziLqBLoFFCBcwnishPd8aOUw0kNf21n1V7GOkAGCBrWffwRkAdhVAjRsOfvO2WFk0D/exec", {
            method: "POST",
            mode: "no-cors",  
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, sname, age }),
        });

        alert("ส่งข้อมูลแล้ว! 🔥");

        // เคลียร์ input
        document.getElementById("name").value = "";
        document.getElementById("sname").value = "";
        document.getElementById("number").value = "";

    }catch(err){
        console.error(err);
        alert("ส่งไม่สำเร็จ ❌");
    }
});