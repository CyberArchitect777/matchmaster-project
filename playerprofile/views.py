from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
from django.shortcuts import render

class PlayerProfilePage(TemplateView):
    """
    Displays the player profile page"
    """
    
    template_name = 'playerprofile/profile.html'