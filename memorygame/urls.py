from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.GamePage.as_view(), name='memorygame'),
]