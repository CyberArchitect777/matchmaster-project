from django.shortcuts import render
from django.views.generic import TemplateView

class GamePage(TemplateView):
    """
    Displays the memory game page
    """
    
    template_name = 'memorygame/memorygame.html'