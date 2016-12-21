from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from .models import Question, Choice

class QuesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'question_text')

class ChoiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Choice
        fields = ('id', 'question', 'choice_text')

class QuesViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuesSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

def router_register(router):
    router.register(r'users', QuesViewSet)
    router.register(r'users', ChoiceViewSet)