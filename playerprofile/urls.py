from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.PlayerProfilePage.as_view(), name='playerprofile'),
]