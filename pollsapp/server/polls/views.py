from django.shortcuts import render
from rest_framework import routers,viewsets

from .models import Question,Choice
from .api import QuesSerializer,ChoiceSerializer
# Create your views here.


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuesSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

def index(request):
    return render(request, "index.html")
