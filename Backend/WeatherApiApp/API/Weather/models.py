from cachetools import TTLCache
from django.db import models
import cachetools
import aes
'''unimplemented class for long term api-key storage'''
class Storage(models.Model):
    name = models.CharField(max_length=100)
    encrypted_api_key = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
