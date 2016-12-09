from django.conf.urls import url
from todomvc import routers

from . import views
from . import api


router = routers.SharedAPIRootRouter()
router.register(r'todos', api.TodoViewSet)
router.register(r'advert', api.AdViewSet)


urlpatterns = [
    url(r'^$', views.index, name='index'),
]
