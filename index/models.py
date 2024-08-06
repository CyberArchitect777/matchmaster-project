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

class Message(models.Model):
    """
    Stores a admin message entry.
    """
    sender_name = models.CharField(max_length=300) # Set to the combined total of a standard first name + surname field length in the default User table
    sender_email = models.CharField(max_length=254) # Matches field length in default User table
    sender_message = models.TextField()

class Game(models.Model):
    """
        Stores a single game entry. Related to :model:'auth.User'
    """
    game_player = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_games") # One to many relationship between users and games
    game_type_setting = models.ForeignKey(GameType, on_delete=models.CASCADE, related_name="game_types") # One to many relationship between games and game types
    rounds_to_complete = models.IntegerField(default=1000) # Number of rounds it took to complete this game.