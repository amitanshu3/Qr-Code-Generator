let imgbox=document.getElementById("imgbox")
let qrimage=document.getElementById("qrimage")
let qrtext=document.getElementById("qrtext")


function generateqr(){
    if(qrtext.value.length>0){//if there is some text in the input field
  qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
  imgbox.classList.add("show-img")
    }
}