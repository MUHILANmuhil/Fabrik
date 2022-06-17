    const wrapper = document.querySelector(".fwrapper");
    const fileName = document.querySelector(".file-name");
    const defaultBtn = document.querySelector("#default-btn");
    const customBtn = document.querySelector("#custom-btn");
    const cancelBtn = document.querySelector("#cancel-btn i");
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    function defaultBtnActive(){
    defaultBtn.click();
    }
    defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
        wrapper.classList.add("active");
        }
        cancelBtn.addEventListener("click", function(){
        wrapper.classList.remove("active");
        })
        reader.readAsDataURL(file);
    }

    if(this.value){
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
    });
    
    const whole_container=document.querySelector("#whole_container");
    const body=document.querySelector("#body")
    const listbtn=document.querySelector("#list-btn");
    const queuebtn=document.querySelector("#queue-btn");
    
    queuebtn.addEventListener("click",()=>{
        whole_container.classList.remove("list")
        whole_container.classList.add("queue") 
    })
    listbtn.addEventListener("click",()=>{
        whole_container.classList.remove("queue")
        whole_container.classList.add("list")
    })
