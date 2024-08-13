from django.urls import path
from . import views

urlpatterns = [ 
    path("", views.display_instruction_page, name="instruction"),
    # URL below provided for deleting an instruction referenced by delete_id
    path("delete-instruction/<int:delete_id>", views.delete_instruction, name="delete_instruction"),
    # URL below provided for sending a message to admin
    path("contact-admin", views.contact_admin, name="contact_admin"),
]