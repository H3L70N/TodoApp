from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.task_list_create_view),
    path('', views.task_list_create_view),
    path('<int:pk>/', views.task_details_view),
    path('delete/<int:pk>', views.task_delete_view),
]
