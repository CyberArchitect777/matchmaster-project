from django.contrib import admin
from index.models import Game, GameType

# Game, GameType models registered here for admin panel access

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    """
    Defines how the Game model is displayed in the admin panel
    """
    list_display = ("game_player", "game_type_setting", "rounds_to_complete", )

@admin.register(GameType)
class GameTypeAdmin(admin.ModelAdmin):
    """
    Defines how the GameType model is displayed in the admin panel.
    """
    list_display = ("boxes_in_game", )
