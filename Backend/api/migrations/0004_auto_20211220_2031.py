# Generated by Django 3.2.9 on 2021-12-20 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211220_1954'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='news',
            name='updated_at',
        ),
        migrations.AddField(
            model_name='news',
            name='categoria',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
