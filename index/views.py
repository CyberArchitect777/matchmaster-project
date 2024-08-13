from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class HomePage(TemplateView):
    """
    Displays home page. A very simple class-based view.
    """
    
    template_name = 'index/index.html'