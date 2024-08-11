from django.contrib import admin
from instruction.models import Information, Message

# Register your models here.

#admin.site.register(Message)

@admin.register(Information)
class InformationAdmin(admin.ModelAdmin):
    list_display = ("title", )

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("sender_title", "sender_name", "sent_on", )
    ordering = ['-sent_on']
