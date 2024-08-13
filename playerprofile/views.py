from django.shortcuts import render, redirect
from django.contrib import messages
from index.models import Game, GameType
from .forms import ChangeUsernameForm, ChangeEmailForm

# Create your views here.

def delete_game_history(request):
    """
    Fully delete the player's game history
    """
    # Select all games associated with the current player
    current_player_games = Game.objects.filter(game_player=request.user)
    # Process the delete and notify the user
    current_player_games.delete()
    messages.add_message(request, messages.SUCCESS,
 	'User game history deleted')
    # Reload the player profile page
    return redirect("playerprofile")

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
        # Check which form is being used
        if request.POST.get("form_id") == "game_complete":
            # Set which game type is used in this game. This would be 
            # variable if should-do tasks had been completed, but 
            # the first is added by default as the only one available
            # at this point.
            game_type = GameType.objects.first()
            # Acquire the game score
            rounds_taken = request.POST.get("rounds-taken")
            game_entry = Game(game_player=request.user, game_type_setting=game_type, rounds_to_complete=rounds_taken)
            # Save the game record and notify the user
            game_entry.save()
            messages.add_message(request, messages.SUCCESS,
 	            'New game record added')
        elif request.POST.get("form_id") == "username_change":
            # A POST request for the username_change form has been detected
            # Form acquired
            form = ChangeUsernameForm(request.POST, request=request)
            if form.is_valid():
                # The new username is acquired here and saved before the
                # user is notified.
                request.user.username = form.cleaned_data["username_one"]
                request.user.save()
                messages.add_message(request, messages.SUCCESS,
 	            'Username updated')
            else:
                # If a problems is detected, the error message is sent to
                # the user here
                messages.add_message(request, messages.ERROR, form.non_field_errors()[0])
        elif request.POST.get("form_id") == "email_change":
            # A POST request from the email change form
            form = ChangeEmailForm(request.POST, request=request)
            if form.is_valid():
                # If validation was successful, save the new email and
                # notify the user of the success.
                request.user.email = form.cleaned_data["email_one"]
                request.user.save()
                messages.add_message(request, messages.SUCCESS,
 	            'Email updated')
            else:
                # If a problem is detected, the error message is sent to
                # the user here
                messages.add_message(request, messages.ERROR, form.non_field_errors()[0])
    
    # Create the forms here for display on a template.
    username_change_form = ChangeUsernameForm(request=request)
    email_change_form = ChangeEmailForm(request=request)
    
    # Construct statistics from the Game model to display in the view
    queryset = Game.objects.filter(game_player=request.user)
    games_count = (Game.objects.filter(game_player=request.user)).count()

    # Set up initial variables
    results_average = 0
    results_most = 0
    # Set least games to a very high value to ensure the next game is lower
    # only if there are no existing games set.
    if (games_count > 0):
        results_least = 1000
    else:
        results_least = 0

    # Calculate statistics for all games so far
    for element in queryset:
        results_average += element.rounds_to_complete
        if results_least > element.rounds_to_complete:
            results_least = element.rounds_to_complete
        if results_most < element.rounds_to_complete:
            results_most = element.rounds_to_complete

    # If more than one game, calculate the average to two decimal places
    if (games_count > 1):
        results_average = results_average / games_count
        results_average = round(results_average, 2)

    return render(
	    request,
        "playerprofile/profile.html", {
            "results_games": games_count,
            "results_average": results_average,
            "results_least": results_least,
            "results_most": results_most,
            "username_change_form": username_change_form,
            "email_change_form": email_change_form,
        }
    )
