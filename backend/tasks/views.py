from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class GetTaskAPIView(generics.RetrieveAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    lookup_field = 'pk'



task_details_view = GetTaskAPIView.as_view()
task_list_create_view = TaskListCreateAPIView.as_view()



