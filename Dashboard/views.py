from django.http import JsonResponse
from django.db.models import Count
from .models import ProcessedEmail


def dashboard_stats(request):
    total = ProcessedEmail.objects.count()

    high = ProcessedEmail.objects.filter(
        priority__iexact="High"
    ).count()

    medium = ProcessedEmail.objects.filter(
        priority__iexact="Medium"
    ).count()

    low = ProcessedEmail.objects.filter(
        priority__iexact="Low"
    ).count()

    return JsonResponse({
        "total_emails": total,
        "high_priority": high,
        "medium_priority": medium,
        "low_priority": low,
    })


def category_stats(request):
    data = (
        ProcessedEmail.objects
        .values("category")
        .annotate(count=Count("id"))
        .order_by("-count")
    )

    return JsonResponse(list(data), safe=False)


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
            "received_time": email.email_received_time,
        })

    return JsonResponse(data, safe=False)