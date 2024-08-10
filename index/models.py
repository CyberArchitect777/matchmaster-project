from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class GameType(models.Model):
    """
        Stores a game type entry. Could be integrated into Game class, 
        but offers a tidier future solution for a game that could have future alternative game modes. 
        Related to :model:'index.Game'
    """
    boxes_in_game = models.IntegerField(default=16) # Number of boxes in a specific game.

    def __str__(self):
        return str(self.boxes_in_game) + " boxes in this game"

class Game(models.Model):
    """
        Stores a single game entry. Related to Django User model
    """
    game_player = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_games") # One to many relationship between users and games
    game_type_setting = models.ForeignKey(GameType, on_delete=models.CASCADE, related_name="game_types") # One to many relationship between games and game types
    rounds_to_complete = models.IntegerField(default=1000) # Number of rounds it took to complete this game.