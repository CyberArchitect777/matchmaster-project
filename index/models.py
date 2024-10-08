from django.contrib.auth.models import User
from django.db import models


class GameType(models.Model):
    """
        Stores a game type entry. Could be integrated into Game class
        for must-do Agile elements, but offers a tidier future
        solution for a game that could have future alternative game
        modes from should or could do.

        Related to :model:'index.Game'
    """
    # Number of boxes in a specific game.
    boxes_in_game = models.IntegerField(default=16, blank=False, null=False)

    def __str__(self):
        return str(self.boxes_in_game) + " boxes in this game"


class Game(models.Model):
    """
        Stores a single game entry. Related to Django User model
    """
    # One to many relationship between users and games
    game_player = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user_games",
        blank=False, null=False)

    # One to many relationship between games and game types
    game_type_setting = models.ForeignKey(
        GameType, on_delete=models.CASCADE, related_name="game_types",
        blank=False, null=False)

    # Number of rounds it took to complete this game.
    rounds_to_complete = models.IntegerField(
        default=1000, blank=False, null=False)
