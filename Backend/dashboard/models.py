from django.db import models


class ProcessedEmail(models.Model):
    id = models.IntegerField(primary_key=True)
    email_hash = models.CharField(max_length=255)
    from_email = models.CharField(max_length=500, db_column="from")
    subject = models.TextField()
    workflow_processed_time = models.DateTimeField()
    email_snippet = models.TextField(blank=True, null=True)
    message_id = models.CharField(max_length=255)
    email_received_time = models.DateTimeField()
    category = models.CharField(max_length=100)
    priority = models.CharField(max_length=50)
    summary = models.TextField()
    email_body = models.TextField(null=True, blank=True)

    class Meta:
        managed = False
        db_table = "processed_emails"