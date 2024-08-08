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

    # Construct statistics from the modal to display in the view
    
    queryset = Game.objects.filter(game_player=request.user)
    games_count = (Game.objects.filter(game_player=request.user)).count()

    results_average = 0
    results_most = 0
    if (games_count > 1):
        results_least = 1000
    else:
        results_least = 0

    for element in queryset:
        results_average += element.rounds_to_complete
        if results_least > element.rounds_to_complete:
            results_least = element.rounds_to_complete
        if results_most < element.rounds_to_complete:
            results_most = element.rounds_to_complete

    results_average = results_average / games_count
    results_average = round(results_average, 2)

    #template_name = 'playerprofile/profile.html'

    return render(
	    request,
        "playerprofile/profile.html", {
            "results_games": games_count,
            "results_average": results_average,
            "results_least": results_least,
            "results_most": results_most,
        }
    )
