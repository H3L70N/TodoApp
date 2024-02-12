from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    # due_date = models.CharField(max_length=20)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=20)


