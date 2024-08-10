from django.shortcuts import render
from .models import Information

# Create your views here.

def display_instruction_page(request):
    """
    Displays the instruction page
    """

    information_list = Information.objects.filter(active=1)
    
    return render(
	    request,
        "instruction/instruction.html", {
            "information_list": information_list
        }
    )
