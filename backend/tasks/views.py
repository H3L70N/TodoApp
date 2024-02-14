from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


task_list_create_view = TaskListCreateAPIView.as_view()



