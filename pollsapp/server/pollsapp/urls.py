from django.conf.urls import include, url
from django.contrib import admin
from . import routers


urlpatterns = [
    url(r'^', include('polls.urls')),
    url(r'^api/', include(routers.SharedAPIRootRouter.router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^jsreverse/$', 'django_js_reverse.views.urls_js', name='js_reverse'),
]
