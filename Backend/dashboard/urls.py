from django.urls import path

from .views import (
    dashboard_stats,
    category_stats,
    recent_emails,
)

urlpatterns = [
    path("stats/", dashboard_stats),
    path("categories/", category_stats),
    path("emails/", recent_emails),
]