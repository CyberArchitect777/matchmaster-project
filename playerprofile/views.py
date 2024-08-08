from django.shortcuts import render
# from django.views.generic import TemplateView
from index.models import Game, GameType

# Create your views here.

def player_profile_page(request):
    """
    Displays the player profile page
    """

    # If no GameType's exist in the database, add a default one.

    if GameType.objects.count() == 0:
        default_game_type_entry = GameType(boxes_in_game=18)
        default_game_type_entry.save()

    # Add a completed game to the database if this is a POST request

    if request.method == "POST":
        game_type = GameType.objects.first()
        rounds_taken = request.POST.get("rounds-taken")
        game_entry = Game(game_player=request.user, game_type_setting=game_type, rounds_to_complete=rounds_taken)
        game_entry.save()
    
    queryset = Game.objects.filter(game_player=request.user)

    results = []

    # for element in queryset:
    
    template_name = 'playerprofile/profile.html'

    return render(
	    request,
	    "playerprofile/profile.html",
    )
