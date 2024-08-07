from django.contrib import admin
from index.models import Game, GameType, Message

# Register your models here.

admin.site.register(Message)

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ("game_player", "game_type_setting", "rounds_to_complete", )

@admin.register(GameType)
class GameTypeAdmin(admin.ModelAdmin):
    list_display = ("boxes_in_game", )
