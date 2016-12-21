from django.conf.urls import url
from quizapp import routers

from . import views
from . import api


router = routers.SharedAPIRootRouter()
router.register(r'questions', api.QuesViewSet)
router.register(r'choices', api.ChoiceViewSet)

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
