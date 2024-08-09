from django.urls import path
from django.contrib.auth.decorators import login_required
from . import views

urlpatterns = [ 
    path('', login_required(views.GamePage.as_view()), name='memorygame'),
]