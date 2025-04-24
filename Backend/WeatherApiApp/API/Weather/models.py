
from django.db import models


class Storage(models.Model):
    name = models.CharField(max_length=100)
    api_key = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
