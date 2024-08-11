from django.shortcuts import render
from .models import Information
from .forms import ManipulateInformation

# Create your views here.

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
        elif request.POST.get("form_id") == "edit_information":
            print("Edit Information")
            information_form = ManipulateInformation(request.POST, instance=Information.objects.get(id=request.POST.get("element_id")))
            if information_form.is_valid():
                information_form.cleaned_data.pop('form_id', None)
                information_form.cleaned_data.pop('element_id', None)
                information_object = information_form.save(commit=False)
                information_object.update_author = request.user
                information_object.save()
    else:
        information_form = ManipulateInformation()

    information_list = Information.objects.filter(active=1)
    
    return render(
	    request,
        "instruction/instruction.html", {
            "information_list": information_list,
            "information_form": information_form,
        }
    )
