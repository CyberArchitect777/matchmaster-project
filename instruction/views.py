from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Information
from .forms import ManipulateInformation, MessageAdmin

# Create your views here.

def contact_admin(request):
    if request.method == "POST":
        contact_admin_form = MessageAdmin(request.POST)
        if contact_admin_form.is_valid():
            contact_admin_form.save()
            messages.add_message(request, messages.SUCCESS,
 	            'Message created on admin messages model')
    return redirect("instruction")

def delete_instruction(request, delete_id):
    """
    Delete an instruction element
    """

    instruction = Information.objects.filter(id=delete_id)
    instruction.delete()
    messages.add_message(request, messages.SUCCESS,
 	            'Instruction element deleted')
    information_form = ManipulateInformation()
    information_list = Information.objects.filter(active=1)

    return render(
	    request,
        "instruction/instruction.html", {
            "information_list": information_list,
            "information_form": information_form,
        }
    )

def display_instruction_page(request):
    """
    Displays the instruction page
    """

    if request.method == "POST":
        print(request.POST)
        if request.POST.get("form_id") == "add_instruction":
            information_form = ManipulateInformation(request.POST)
            if information_form.is_valid():
                information_form.cleaned_data.pop('form_id', None)
                information_form.cleaned_data.pop('element_id', None)
                information_object = information_form.save(commit=False)
                information_object.update_author = request.user
                information_object.save()
                messages.add_message(request, messages.SUCCESS,
 	            'Instruction element created')
        elif request.POST.get("form_id") == "edit_information":
            print("Edit Information")
            print(request.POST)
            information_form = ManipulateInformation(request.POST, instance=Information.objects.get(id=request.POST.get("element_id")))
            if information_form.is_valid():
                information_form.cleaned_data.pop('form_id', None)
                information_form.cleaned_data.pop('element_id', None)
                information_object = information_form.save(commit=False)
                information_object.update_author = request.user
                information_object.save()
                messages.add_message(request, messages.SUCCESS,
 	            'Instruction element updated')
        return redirect("instruction")
    else:
        information_form = ManipulateInformation()
        message_admin_form = MessageAdmin()

    information_list = Information.objects.filter(active=1)
    
    return render(
	    request,
        "instruction/instruction.html", {
            "information_list": information_list,
            "information_form": information_form,
            "message_admin_form": message_admin_form,
        }
    )
