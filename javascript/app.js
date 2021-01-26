
        const menuBtn = document.querySelector(".menu-icon");
        const menuitems = document.querySelector(".menu-icon");
        const searchBtn = document.querySelector(".search-icon ");
        const cancelBtn = document.querySelector(".cancel-icon");
        const items = document.querySelector(".nav-items");
        const form = document.querySelector("nav form");
        menuBtn.onclick = () =>{
            items.classList.add("active");
            menuitems.classList.add("hide");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
            cancelBtn.style.color="red";
        }
        cancelBtn.onclick = () =>{
            items.classList.remove("active");
            menuitems.classList.remove("hide");
            searchBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            form.classList.remove("active");
            cancelBtn.style.color = "#fff";
        }
        searchBtn.onclick = () => {
            form.classList.add("active");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        }
