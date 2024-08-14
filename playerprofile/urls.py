from django.urls import path
from django.contrib.auth.decorators import login_required
from . import views

# Login required to access this app.
urlpatterns = [
    path('delete-game-history/', login_required(
        views.delete_game_history), name='delete_game_history'),
    path('', login_required(views.player_profile_page), name='playerprofile'),
]
