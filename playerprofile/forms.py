from django import forms
from django.contrib import messages
from index.models import User

class ChangeUsernameForm(forms.Form):
    """
        Allows the changing of the current username via a Django form
        Works with the default Django User model
    """
    # Creates a hidden HTML form variable designating this as a
    # username change
    form_id = forms.CharField(
        widget=forms.HiddenInput(), initial="username_change")
    
    # Standard max_length's in Django AuthUser table
    current_password = forms.CharField(
        max_length=128, widget=forms.PasswordInput, required=True)
    username_one = forms.CharField(max_length=150, required=True)
    username_two = forms.CharField(max_length=150, required=True)

    def __init__(self, *args, **kwargs):
        """
            Class initialisation/constructor
        """
        
        # request variable pulled from the initialisation parameters.
        self.request = kwargs.pop("request", None)
        super(ChangeUsernameForm, self).__init__(*args, **kwargs)
        # Setting human-friendly names for the next two variables.
        self.fields['username_one'].label = "New Username"
        self.fields['username_two'].label = "Retype New Username"

    def clean(self):
        """
            Automatically called during validation by Django if
            called "clean". Completing manual validation on the
            form.
        """    
        # Calls Django's default validation process from the inherited class.
        cleaned_data = super().clean()
        # Acquiring the variables from the cleaned data
        current_password = cleaned_data.get("current_password")
        username_one = cleaned_data.get("username_one")
        username_two = cleaned_data.get("username_two")
        # Going through a series of validation checks.
        # ValidationErrors here are printed as Django messages to the user
        # on the front end.
        if not self.request.user.check_password(current_password):
            raise forms.ValidationError(
                "You have entered an incorrect password. Please try again.")
        elif username_one != username_two:
            raise forms.ValidationError(
                "Your username entries do not match."
                "Please make sure they are the same.")
        elif self.request.user.username == username_one:
            raise forms.ValidationError("You already have this username.")
        else:
            # Check to see if anybody else has this username in the database.
            # The chance of the user having the name already was eliminated
            # in the last check.
            if User.objects.filter(username=username_one).count() > 0:
                raise forms.ValidationError(
                    "This username is already in use by another account.")
        return cleaned_data # Return validated data

class ChangeEmailForm(forms.Form):
    """
        Allows the changing of the current email via a Django form
        Works with the default Django User model
    """

    # Creates a hidden HTML form variable designating this as an email
    # change
    form_id = forms.CharField(
        widget=forms.HiddenInput(), initial="email_change")
    # Standard max_length's in Django AuthUser table
    current_account_password = forms.CharField(
        max_length=128, widget=forms.PasswordInput, required=True)
    email_one = forms.EmailField(max_length=254, required=True) 
    email_two = forms.EmailField(max_length=254, required=True)

    def __init__(self, *args, **kwargs):
        # Class initialisation.
        # request is placed in self.request if found in parameters
        self.request = kwargs.pop("request", None)
        super(ChangeEmailForm, self).__init__(*args, **kwargs)
        # Assigning human readable names to these model fields.
        self.fields["current_account_password"].label = "Current Password"
        self.fields['email_one'].label = "New Email"
        self.fields['email_two'].label = "Retype New Email"

    def clean(self):
        """
            Automatically called during validation by Django if
            called "clean". Completing manual validation on the
            form.
        """
        # Calling the initial Django validation 
        # process from the inherited class
        cleaned_data = super().clean()
        current_account_password = cleaned_data.get(
            "current_account_password")
        email_one = cleaned_data.get("email_one")
        email_two = cleaned_data.get("email_two")
        # Complete validation checks, raise validation errors to the users
        # via Django messaging if any of these conditions match
        if not self.request.user.check_password(current_account_password):
            raise forms.ValidationError(
                "You have entered an incorrect password. Please try again.")
        elif email_one != email_two:
            raise forms.ValidationError(
                "Your email entries do not match." 
                "Please ensure they match before trying again.")
        elif self.request.user.username == email_one:
            raise forms.ValidationError("You already have this email.")
        else:
            if User.objects.filter(username=email_one).count() > 0:
                raise forms.ValidationError(
                    "This email is already in use by another account.")
        return cleaned_data # Return validated data
