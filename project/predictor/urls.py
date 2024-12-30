from django.urls import path
from predictor.views.breast_cancer import breast
from predictor.views.home import home

urlpatterns = [
    path('breast', breast, name="breast"),
    path('', home, name="home"),
]