from rest_framework.response import Response
from rest_framework.decorators import api_view

# noinspection PyUnresolvedReferences
from tasks.models import Task
# noinspection PyUnresolvedReferences
from tasks.serializers import TaskSerializer


@api_view(['GET'])
def api_get(request, *args, **kwargs):
    data = request.GET
    print(data)
    return Response(data)


@api_view(['POST'])
def api_post(request, *args, **kwargs):
    # serializer = TaskSerializer(data=request.data)
    # if serializer.is_valid():
    #     instance = serializer.save()
    #     print(instance)
    #     return Response(serializer.data)

    serializer = TaskSerializer(data=request.data)
    print(serializer.is_valid())
    data = request.data
    return Response(data)

