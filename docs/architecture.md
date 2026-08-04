# AI Customer Support Agent - Architecture

## System Overview

AI Customer Support Agent is an automated email processing system built using n8n, Gmail, Ollama, and PostgreSQL.

The system automatically fetches emails from Gmail, analyzes them using AI, categorizes them, assigns priority, generates a summary, and stores unique emails in PostgreSQL.

---

## Architecture Diagram

Gmail Inbox
     |
     v
Gmail Get Many
     |
     v
Loop Over Items
     |
     v
AI Agent (Ollama)
     |
     |---- Category
     |---- Priority
     |---- Summary
     |
     v
PostgreSQL
     |
     v
processed_emails Table

---

## Workflow Components

### 1. Gmail Get Many

Purpose:

- Fetch emails from Gmail inbox
- Retrieve sender, subject, message ID, snippet, timestamp

Output:

- Email metadata
- Email content

---

### 2. Loop Over Items

Purpose:

- Process emails one by one
- Prevent bulk execution issues

---

### 3. AI Agent (Ollama)

Purpose:

Analyze email and generate:

- Category
- Priority
- Summary

Supported Categories:

- Technical Support
- Billing
- Complaint
- Sales Inquiry
- General Inquiry

Priority Levels:

- High
- Medium
- Low

---

### 4. PostgreSQL

Purpose:

Store processed emails.

Table:

processed_emails

Fields:

- email_hash
- from
- subject
- workflow_processed_time
- email_snippet
- message_id
- email_received_time
- category
- priority
- summary

---

## Duplicate Prevention

Method:

UNIQUE(email_hash)

Query:

ON CONFLICT(email_hash)
DO NOTHING

Benefits:

- Prevent duplicate records
- Safe re-execution
- Reliable processing

---

## Data Flow

1. Email arrives in Gmail.
2. Gmail node fetches email.
3. Loop node processes email.
4. AI Agent analyzes email.
5. PostgreSQL stores result.
6. Duplicate emails are ignored.

---

## Project Status

Completed Features:

- Gmail Integration
- AI Categorization
- Priority Detection
- Summary Generation
- PostgreSQL Storage
- Duplicate Prevention

Future Enhancements:

- Dashboard
- Ticket Generation
- Auto Reply System
- Client Portal

---

## Author

Pradip Achut Mohalkar