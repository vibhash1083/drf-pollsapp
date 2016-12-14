from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from .models import Todo, Question


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'text', 'marked')


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class QuesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'question', 'answer')

class QuesViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuesSerializer

def router_register(router):
    router.register(r'users', TodoViewSet)
    router.register(r'users', QuesViewSet)
