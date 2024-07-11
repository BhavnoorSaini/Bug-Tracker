# Generated by Django 5.0.6 on 2024-07-11 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_bug_delete_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='bug',
            name='priority',
            field=models.CharField(choices=[('low', 'Low'), ('medium', 'Medium'), ('high', 'High')], default='medium', max_length=20),
        ),
    ]