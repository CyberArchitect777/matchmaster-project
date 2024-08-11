from django.urls import path
from . import views

urlpatterns = [ 
    path("", views.display_instruction_page, name="instruction"),
    path("delete-instruction/<int:delete_id>", views.delete_instruction, name="delete_instruction"),
    path("contact-admin", views.contact_admin, name="contact_admin"),
]