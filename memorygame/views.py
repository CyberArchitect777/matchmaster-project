from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class GamePage(TemplateView):
    """
    Displays memory game page
    """
    
    template_name = 'memorygame/memorygame.html'