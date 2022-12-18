const btn = document.getElementById("btn-toast");
const toast = document.getElementById("show-toast");
const closeBtn = document.getElementById("close-btn");

const showToast = () => {
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

const closeToast = () => toast.style.display = "none";

btn.addEventListener("click", showToast);
closeBtn.addEventListener("click", closeToast)