from django import forms
from django.contrib import messages
from index.models import User

class ChangeUsernameForm(forms.Form):
    form_id = forms.CharField(widget=forms.HiddenInput(), initial="username_change")
    # Standard max_length's in Django AuthUser table
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
            raise forms.ValidationError("You have entered an incorrect password. Please try again.")
        elif username_one != username_two:
            raise forms.ValidationError("Your username entries do not match. Please make sure they are the same.")
        elif self.request.user.username == username_one:
            raise forms.ValidationError("You already have this username.")
        else:
            if User.objects.filter(username=username_one).count() > 0:
                raise forms.ValidationError("This username is already in use by another account.")
        return cleaned_data

class ChangeEmailForm(forms.Form):
    form_id = forms.CharField(widget=forms.HiddenInput(), initial="email_change")
    # Standard max_length's in Django AuthUser table
    current_account_password = forms.CharField(max_length=128, widget=forms.PasswordInput, required=True)
    email_one = forms.EmailField(max_length=254, required=True) 
    email_two = forms.EmailField(max_length=254, required=True)

    def __init__(self, *args, **kwargs):

        self.request = kwargs.pop("request", None)
        super(ChangeEmailForm, self).__init__(*args, **kwargs)
        self.fields["current_account_password"].label = "Current Password"
        self.fields['email_one'].label = "New Email"
        self.fields['email_two'].label = "Retype New Email"

    def clean(self): # Automatically called during validation by Django if called "clean"

        print("entered form debugging")
        cleaned_data = super().clean()
        current_account_password = cleaned_data.get("current_account_password")
        email_one = cleaned_data.get("email_one")
        email_two = cleaned_data.get("email_two")
        if not self.request.user.check_password(current_account_password):
            raise forms.ValidationError("You have entered an incorrect password. Please try again.")
        elif email_one != email_two:
            raise forms.ValidationError("Your email entries do not match. Please ensure they match before trying again.")
        elif self.request.user.username == email_one:
            raise forms.ValidationError("You already have this email.")
        else:
            if User.objects.filter(username=email_one).count() > 0:
                raise forms.ValidationError("This email is already in use by another account.")
        return cleaned_data
