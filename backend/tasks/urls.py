from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.task_list_create_view),
    path('', views.task_list_create_view),
]
