from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from .models import Todo, Advertiser


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'text', 'marked')


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class AdSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Advertiser
        fields = ('id', 'name')

class AdViewSet(viewsets.ModelViewSet):
    queryset = Advertiser.objects.all()
    serializer_class = AdSerializer

def router_register(router):
    router.register(r'users', TodoViewSet)
    router.register(r'users', AdViewSet)
