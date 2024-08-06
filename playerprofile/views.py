from django.shortcuts import render
# from django.views.generic import TemplateView
from index.models import Game, GameType

# Create your views here.

def player_profile_page(request):
    """
    Displays the player profile page
    """
    
    queryset = Game.objects.filter(game_player=request.user)

    results = []

    # for element in queryset:

    
    template_name = 'playerprofile/profile.html'

    return render(
	    request,
	    "playerprofile/profile.html",
    )
