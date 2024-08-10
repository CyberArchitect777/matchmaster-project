from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class InstructionPage(TemplateView):
    """
    Displays instruction page
    """
    
    template_name = 'instruction/instruction.html'