# Generated by Django 4.2.14 on 2024-08-11 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instruction', '0002_alter_information_active_alter_information_title_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='sent_on',
            field=models.DateTimeField(auto_now=True),
        ),
    ]