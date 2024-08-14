from django.contrib import admin
from instruction.models import Information, Message

# Information, Message models registered here for admin panel access


@admin.register(Information)
class InformationAdmin(admin.ModelAdmin):
    """
    Defines how the Information model is displayed in the admin panel
    """
    list_display = ("title", "active", "priority", "updated_on")

    # Order based on set priority for information display
    ordering = ["priority"]

    # Show timestamp data on admin panel for each message
    readonly_fields = ["updated_on"]


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    """
    Defines how the Message model is displayed in the admin panel
    """
    list_display = ("sender_title", "sender_name", "sent_on", )
    ordering = ["-sent_on"]  # Order entries based on latest dates first

    # Show timestamp data on admin panel for each message
    readonly_fields = ["sent_on"]
