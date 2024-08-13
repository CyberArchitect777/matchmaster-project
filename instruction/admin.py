from django.contrib import admin
from instruction.models import Information, Message

# Information, Message models registered here for admin panel access

@admin.register(Information)
class InformationAdmin(admin.ModelAdmin):
    """
    Defines how the Information model is displayed in the admin panel
    """
    list_display = ("title", "active", "priority" )
    ordering = [ "priority" ] # Order based on set priority for information display

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    """
    Defines how the Message model is displayed in the admin panel
    """
    list_display = ("sender_title", "sender_name", "sent_on", )
    ordering = [ "-sent_on" ] # Order entries based on latest dates first
