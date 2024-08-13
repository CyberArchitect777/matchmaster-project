from django.shortcuts import render
from django.views.generic import TemplateView

class HomePage(TemplateView):
    """
    Displays home page. A very simple class-based view.
    """
    
    template_name = 'index/index.html'