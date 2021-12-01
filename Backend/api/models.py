from django.db import models


# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(null=True)
    author = models.CharField(max_length=30)
    date = models.DateField(blank=True, null=True)