# Generated by Django 3.2.9 on 2021-11-30 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('body', models.TextField(null=True)),
                ('author', models.CharField(max_length=30)),
                ('date', models.DateField(blank=True, null=True)),
            ],
        ),

    ]
