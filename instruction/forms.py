from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms
from .models import Information

class ManipulateInformation(forms.ModelForm):
    class Meta:
        model = Information
        fields = ["title", "active", "content"]