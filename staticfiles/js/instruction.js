
// Array of all edit buttons on the instruction view
// Linked to the amount of information items on the accordian.
let allButtons = document.querySelectorAll(".edit-button");

for (let x=0;x<allButtons.length;x++) {
    allButtons[x].addEventListener("click", fillCommentForEdit);
}

function fillCommentForEdit(event) {
    /**
     * 
     * Takes the event representing an edit button and calculates the Information ID.
     * The information is then extracted from the HTML and placed on the admin add/edit form.
     * 
     * @param {Event} event - is used to target the edit button and a needed ID value.
     */
    let numberSelected = ((event.target.parentElement).id).replace("editbutton","");
    const title = document.getElementById("id_title");
    const content = document.getElementById("id_content");
    const active = document.getElementById("id_active");
    const priority = document.getElementById("id_priority");
    title.value = document.getElementById("infotitle" + numberSelected).innerText;
    content.value = document.getElementById("infocontent" + numberSelected).innerText;
    
    // Removes textual information from the front of the line
    priority.value = (document.getElementById("prioritydisplay" + numberSelected).innerText).substring(10);
    active.value = (document.getElementById("activedisplay" + numberSelected).innerText).substring(28);

    const formId = document.getElementById("form_id");
    
    // Changes the form_id parameter. Using python naming convention here
    formId.value = "edit_information";
    
    const formButton = document.getElementById("information-submit");

    // Changes the text of the button to "Update"
    formButton.innerText = "Update";
    const informationId = document.getElementById("element_id");

    // Sets the element_id of the form to the ID being targeted.
    informationId.value = numberSelected;
}
