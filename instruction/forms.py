from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms
from .models import Information, Message

# Two model forms based on the Information and Message models. These are both
# used on the instruction app.

class ManipulateInformation(forms.ModelForm):
    """
    A form for creating and updating the Information model. Four fields can be
    found in the form as shown below.
    """
    class Meta:
        model = Information
        fields = ["title", "active", "content", "priority"]

class MessageAdmin(forms.ModelForm):
    """
    A form for creating Message entries. The four fields below are used in the 
    form.
    """
    class Meta:
        model = Message
        fields = [
            "sender_name", "sender_email", "sender_title", "sender_message" ]
