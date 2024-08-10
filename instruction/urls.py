from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.InstructionPage.as_view(), name='instruction'),
]