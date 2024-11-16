from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Tasks
from .serializer import TasksSerializer

@api_view(['GET'])
def get_tasks(request):
    tasks = Tasks.objects.all()
    serializedData = TasksSerializer(tasks, many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_tasks(request):
    print(request.data)
    data = request.data
    serializer = TasksSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_tasks(request, pk):
    try: 
        task = Tasks.objects.get(pk=pk)
    except Tasks.DoesNotExist:
        return Response({"error": "Task not found."}, status=status.HTTP_404_NOT_FOUND)
    
    task.delete()
    return Response({"message": "Task deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
