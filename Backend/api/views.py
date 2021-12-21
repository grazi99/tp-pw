from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import News
from api.serializers import NewsSerializer, RegisterSerializer, MeSerializer


class NewsViewSet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    queryset = News.objects.all()

    def get_queryset(self):
        queryset = News.objects.all()
        author = self.request.query_params.get('author')
        title = self.request.query_params.get('title')
        date = self.request.query_params.get('date')
        if author is not None:
            queryset = queryset.filter(author=author)
        if title is not None:
            queryset = queryset.filter(title=title)
        if date is not None:
            queryset = queryset.filter(date=date)
        return queryset


class RegisterViews(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)
    return Response(MeSerializer(request.user).data, 200)

