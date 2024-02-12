from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.api_get),
    path('post/', views.api_post),
]
