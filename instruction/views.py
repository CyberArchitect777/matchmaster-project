from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Information
from .forms import ManipulateInformation, MessageAdmin

def contact_admin(request):
    """
    Processes form POST data to add a message to the Message model.
    Messages added here are designed to be viewed by admin only.
    """
    if request.method == "POST":
        contact_admin_form = MessageAdmin(request.POST)
        if contact_admin_form.is_valid():
            contact_admin_form.save()
            # If form is valid, save and send a message.
            messages.add_message(request, messages.SUCCESS,
 	            'Message sent to admin')
        else:
            # if not, flag an error
            messages.add_message(request, messages.ERROR,
 	            'Message could not be sent to admin')
    # re-load instruction page.
    return redirect("instruction")

def delete_instruction(request, delete_id):
    """
    Delete an instruction element using delete_id, which is
    the auto ID numbers given by Django to models.
    """

    # Select only the item to be deleted and delete it.
    instruction = Information.objects.filter(id=delete_id)
    instruction.delete()
    messages.add_message(request, messages.SUCCESS,
 	            'Instruction element deleted')
    return redirect("instruction")

def display_instruction_page(request):
    """
    Displays the instruction page
    """

    if request.method == "POST":
        print(request.POST)
        # Check to see if the information being sent comes from a 
        # specific form, identified by a hidden field on it.
        if request.POST.get("form_id") == "add_instruction":
            information_form = ManipulateInformation(request.POST)
            if information_form.is_valid():
                # Remove data not found in the model and is thus
                # unnecessary at this point.
                information_form.cleaned_data.pop('form_id', None)
                information_form.cleaned_data.pop('element_id', None)
                # Save the form without committing as new data
                # still needs to be added
                information_object = information_form.save(commit=False)
                # Add the user information and save
                information_object.update_author = request.user
                information_object.save()
                messages.add_message(request, messages.SUCCESS,
 	            'Instruction element created')
            else:
                # Form data was not valid for some reason and thus
                # this error was shown
                messages.add_message(request, messages.ERROR,
 	            'Instruction element could not be created')
        elif request.POST.get("form_id") == "edit_information":
            # Select the actual record from the Information model that is 
            # required for edit
            information_form = ManipulateInformation(
                request.POST, instance=Information.objects.get(
                    id=request.POST.get("element_id")))
            if information_form.is_valid():
                 # Remove data not found in the model and is thus
                 # unnecessary at this point as before.
                information_form.cleaned_data.pop('form_id', None)
                information_form.cleaned_data.pop('element_id', None)
                information_object = information_form.save(commit=False)
                information_object.update_author = request.user
                information_object.save()
                messages.add_message(request, messages.SUCCESS,
 	            'Instruction element updated')
            else:
                messages.add_message(request, messages.ERROR,
 	            'Instruction element could not be updated')
        return redirect("instruction")
    else: # Pursue this if no form data has been passed
        information_form = ManipulateInformation()
        message_admin_form = MessageAdmin()

    # Sort Information model content by priority for viewing
    information_list = Information.objects.filter(
        active=1).order_by('priority')
    
    return render(
	    request,
        "instruction/instruction.html", {
            "information_list": information_list,
            "information_form": information_form,
            "message_admin_form": message_admin_form,
        }
    )
