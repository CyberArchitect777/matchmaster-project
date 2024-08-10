from django.shortcuts import render

# Create your views here.

def display_instruction_page(request):
    """
    Displays the instruction page
    """
    
    return render(
	    request,
        "instruction/instruction.html", {
        }
    )
