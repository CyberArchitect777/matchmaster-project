from django import forms
from index.models import User

class ChangeUsernameForm(forms.Form):
    form_id = forms.CharField(widget=forms.HiddenInput(), initial="username_change")
    current_password = forms.CharField(max_length=128, widget=forms.PasswordInput, required=True)
    username_one = forms.CharField(max_length=150, required=True)
    username_two = forms.CharField(max_length=150, required=True)

    def __init__(self, *args, **kwargs):

        self.request = kwargs.pop("request", None)
        super(ChangeUsernameForm, self).__init__(*args, **kwargs)
        self.fields['username_one'].label = "New Username"
        self.fields['username_two'].label = "Retype New Username"


    def clean(self): # Automatically called during validation by Django if called "clean"

        print("entered form debugging")
        cleaned_data = super().clean()
        current_password = cleaned_data.get("current_password")
        username_one = cleaned_data.get("username_one")
        username_two = cleaned_data.get("username_two")
        if not self.request.user.check_password(current_password):
            raise forms.ValidationError("You have entered an incorrect password.")
        elif username_one != username_two:
            raise forms.ValidationError("Your username entries do not match.")
        elif self.request.user.username == username_one:
            raise forms.ValidationError("You already have this username.")
        else:
            if User.objects.filter(username=username_one).count() > 0:
                raise forms.ValidationError("This username is already in use.")
        return cleaned_data
