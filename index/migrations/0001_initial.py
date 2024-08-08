# Generated by Django 4.2.14 on 2024-08-06 09:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='GameType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('boxes_in_game', models.IntegerField(default=16)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender_name', models.CharField(max_length=300)),
                ('sender_email', models.CharField(max_length=254)),
                ('sender_message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rounds_to_complete', models.IntegerField(default=1000)),
                ('game_player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_games', to=settings.AUTH_USER_MODEL)),
                ('game_type_setting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='game_types', to='index.gametype')),
            ],
        ),
    ]