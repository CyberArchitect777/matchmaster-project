from django.apps import AppConfig
from django.db import connection

class MemorygameConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'memorygame'

    def ready(self):
        if connection.vendor == "sqlite":
            try:
                with connection.cursor() as cursor:
                    cursor.execute("PRAGMA journal_mode=WAL;")
            except Exception:
                pass
