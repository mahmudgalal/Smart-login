var btnLogOut = document.getElementById("btnLogOut");

btnLogOut.addEventListener("click" , function () { 
        location.href = "./index.html";
        localStorage.removeItem("username");
})





var userName = document.getElementById("userName");

userName.innerHTML = `"${localStorage.getItem("username")}"`;