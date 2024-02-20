from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class GetUpdateDeleteTaskAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)


task_list_create_view = TaskListCreateAPIView.as_view()
task_get_update_delete_view = GetUpdateDeleteTaskAPIView.as_view()
