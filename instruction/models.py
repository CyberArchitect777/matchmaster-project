from django.db import models
from django.contrib.auth.models import User

# The textual description assigned to the active variable in :model:'instruction.Information'
ACTIVE_DISPLAY = ((0, "Hidden"), (1, "Shown")) 

class Information(models.Model):
    """
        Stores information useful to the user including instructions, site information, new developments
        and any other information admins deem relevant. All fields are required.
        Related to the Django User model
    """

    # One to many relationship between users and information. Author who made the last update
    update_author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="author_information", blank=False, null=False)
    title = models.CharField(max_length=200, blank=False, null=False, unique=True)
    content = models.TextField(blank=False, null=False)
    updated_on = models.DateTimeField(auto_now=True, blank=False, null=False) # Date and time the entry was last updated
    active = models.IntegerField(choices=ACTIVE_DISPLAY, default=1, blank=False, null=False) # If the entry should be displayed or not.
    priority = models.IntegerField(default=1, blank=False, null=False, verbose_name="Priority Display Order") # Allows the ordering of elements by assigning a priority.

    def __str__(self): # Provides a human readable string for this model.
        return str(self.title)

class Message(models.Model):
    """
        Stores messages sent by the user to admin. All fields are required
    """
    sender_name = models.CharField(max_length=300, blank=False, null=False)
    sender_email = models.EmailField(blank=False, null=False)
    sender_title = models.CharField(max_length=200, blank=False, null=False)
    sender_message = models.TextField()
    sent_on = models.DateTimeField(auto_now=True) # Date and time the message was sent