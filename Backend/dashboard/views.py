from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count

from .models import ProcessedEmail


@api_view(["GET"])
def dashboard_stats(request):
    total_emails = ProcessedEmail.objects.count()

    high_priority = ProcessedEmail.objects.filter(
        priority__iexact="High"
    ).count()

    medium_priority = ProcessedEmail.objects.filter(
        priority__iexact="Medium"
    ).count()

    low_priority = ProcessedEmail.objects.filter(
        priority__iexact="Low"
    ).count()

    return Response({
        "total_emails": total_emails,
        "high_priority": high_priority,
        "medium_priority": medium_priority,
        "low_priority": low_priority,
    })


@api_view(["GET"])
def category_stats(request):
    categories = (
        ProcessedEmail.objects
        .values("category")
        .annotate(count=Count("id"))
        .order_by("-count")
    )

    return Response(list(categories))


@api_view(["GET"])
def recent_emails(request):
    emails = (
        ProcessedEmail.objects
        .order_by("-email_received_time")[:10]
    )

    data = []

    for email in emails:
        data.append({
            "id": email.id,
            "from": email.from_email,
            "subject": email.subject,
            "category": email.category,
            "priority": email.priority,
            "summary": email.summary,
            "email_body": email.email_body,
            "received_time": email.email_received_time,
        })

    return Response(data)