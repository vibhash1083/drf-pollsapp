from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=300)
    answer = models.CharField(max_length=300)

    def __str__(self):
        return self.question

class Score(models.Model):
    score = models.IntegerField(default=0)

