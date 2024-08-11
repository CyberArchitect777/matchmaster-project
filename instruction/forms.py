from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms
from .models import Information, Message

class ManipulateInformation(forms.ModelForm):
    class Meta:
        model = Information
        fields = ["title", "active", "content"]

class MessageAdmin(forms.ModelForm):
    class Meta:
        model = Message
        fields = ["sender_name", "sender_email", "sender_title", "sender_message" ]
