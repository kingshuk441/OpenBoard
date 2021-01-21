/*=========ADD STICKY==============*/

let stickyAdd = document.querySelector("#sticky");


stickyAdd.addEventListener("click" , function(){
    let content = createBox();
    let textarea = document.createElement("textarea");
    textarea.setAttribute("cols" , "33.5");
    textarea.setAttribute("rows" , "10");
    content.append(textarea);
})



