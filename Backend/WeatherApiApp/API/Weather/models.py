
from django.db import models

''' here is the model for the database meant to store api keys, contains name, the key itself and the date of creation'''
class Storage(models.Model):
    name = models.CharField(max_length=100)
    api_key = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
