from cachetools import TTLCache
from django.db import models
import cachetools

class TempStorage():
    def __init__(self):
        cache = TTLCache(maxsize=1, TTLCache=3600)
# Create your models here.
