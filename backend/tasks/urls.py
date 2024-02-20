from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.task_list_create_view),
    path('', views.task_list_create_view),
    path('<int:pk>/', views.task_get_update_delete_view),
    path('delete/<int:pk>', views.task_get_update_delete_view),
    path('update/<int:pk>', views.task_get_update_delete_view),
]
