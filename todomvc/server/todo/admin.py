from django.contrib import admin

from .models import Todo, Question

# Register your models here.
admin.site.register(Todo)
admin.site.register(Question)

