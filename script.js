document.addEventListener("visibilitychange", function() {
    console.log("Anda keluar sebanyak beberapa kali");

    if(document.hidden) {
        document.title = "KELUAR YA";
    } else {
        document.title = "ADA KAMU";
    }
});