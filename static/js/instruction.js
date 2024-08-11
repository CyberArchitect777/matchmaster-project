
let allButtons = document.querySelectorAll(".edit-button")

for (let x=0;x<allButtons.length;x++) {
    allButtons[x].addEventListener("click", fillCommentForEdit);
}

function fillCommentForEdit(event) {
    let numberSelected = (event.target.id).replace("editbutton","");
    const title = document.getElementById("id_title");
    const content = document.getElementById("id_content");
    let active = document.getElementById("id_active");
    title.value = document.getElementById("infotitle" + numberSelected).innerText;
    content.value = document.getElementById("infocontent" + numberSelected).innerText;
    active.value = 1;
    const formId = document.getElementById("form_id");
    formId.value = "edit_information" // Using python naming convention here
    const formButton = document.getElementById("information-submit");
    formButton.innerText = "Edit";
    const informationId = document.getElementById("element_id");
    informationId.value = numberSelected;
}
