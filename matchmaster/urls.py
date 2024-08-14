
from django.contrib import admin
from django.urls import path, include

# All custom user apps are wired up to use their own urls.py files.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('playerprofile/', include("playerprofile.urls"),
         name="playerprofile-urls"),
    path('memorygame/', include("memorygame.urls"), name="memorygame-urls"),
    path('instruction/', include("instruction.urls"),
         name="instruction-urls"),
    path("", include('index.urls'), name='index'),
    path("accounts/", include("allauth.urls")),
]
