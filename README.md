# AI Customer Support Agent

An AI-powered customer support automation system that fetches emails from Gmail, processes them using AI, classifies and prioritizes emails, generates summaries, stores structured data in PostgreSQL, and displays the processed emails through a React dashboard.

---

## Overview

This project provides an end-to-end AI-powered email support workflow:

**Gmail → n8n → AI Processing → PostgreSQL → Django REST API → React Dashboard**

The system combines workflow automation, AI-based email analysis, backend API development, database storage, and a web dashboard into a complete customer support solution.

---

## Key Features

### AI Email Processing

- Automatic Gmail email fetching
- AI-powered email categorization
- Priority detection
- Email summarization
- Automated workflow processing
- Duplicate email prevention

### Backend

- Django REST Framework API
- PostgreSQL database integration
- Dashboard statistics API
- Email category statistics API
- Recent emails API

### React Dashboard

The project includes a web dashboard for monitoring processed emails.

Dashboard features:

- Total email count
- High priority email count
- Medium priority email count
- Low priority email count
- Email category visualization
- Recent email table
- Sender information
- Email subject
- Category
- Priority
- AI-generated summary

---

## Dashboard

The React dashboard provides a visual interface for monitoring AI-processed emails.

### Dashboard Statistics

The dashboard displays:

- Total Emails: 35
- High Priority: 13
- Medium Priority: 10
- Low Priority: 12

### Email Categories

The dashboard visualizes email categories such as:

- Billing
- Complaint
- General Inquiry
- Job Application
- Sales Inquiry
- Technical Support

### Recent Emails

The dashboard displays:

- From
- Subject
- Category
- Priority
- Summary

---

## Dashboard Architecture

```text
                    Gmail
                      |
                      v
                    n8n
                      |
                      v
                AI Processing
                      |
                      v
                 PostgreSQL
                      |
                      v
              Django REST API
                      |
                      v
              React Dashboard
AI Workflow
Gmail
  |
  v
Email Fetching
  |
  v
Duplicate Check
  |
  v
AI Agent
  |
  +----> Category Detection
  |
  +----> Priority Detection
  |
  +----> Email Summarization
  |
  v
PostgreSQL
  |
  v
Django REST API
  |
  v
React Dashboard
Database

The system stores processed email information in PostgreSQL.

Table: processed_emails

Fields include:

email_hash
from
subject
workflow_processed_time
email_snippet
message_id
email_received_time
category
priority
summary
Duplicate Prevention

Duplicate email processing is prevented using database-level protection.

The system uses:

UNIQUE(email_hash)

and:

ON CONFLICT DO NOTHING

This prevents the same email from being inserted multiple times during workflow execution.

API Endpoints

The Django backend provides APIs for the React dashboard.

Dashboard Statistics
GET /api/dashboard/stats/

Example response:

{
  "total_emails": 35,
  "high_priority": 13,
  "medium_priority": 10,
  "low_priority": 12
}
Email Categories
GET /api/dashboard/categories/

Returns category-wise email counts.

Recent Emails
GET /api/dashboard/emails/

Returns recently processed emails including:

Sender
Subject
Category
Priority
Summary
Technology Stack
AI & Automation
n8n
Gmail API
Ollama
AI Agent
Backend
Python
Django
Django REST Framework
Database
PostgreSQL
Frontend
React.js
Vite
Recharts
Axios
Tailwind CSS
Development Tools
Git
GitHub
VS Code
Project Structure
AI-Customer-Support-Agent/
|
├── Backend/
│   |
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   |
│   ├── dashboard/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── admin.py
│   |
│   └── manage.py
|
├── Dashboard/
│   |
│   ├── components/
│   │   ├── CategoryChart.jsx
│   │   ├── EmailTable.jsx
│   │   └── StatsCards.jsx
│   |
│   ├── pages/
│   │   └── Dashboard.jsx
│   |
│   ├── services/
│   │   └── api.js
│   |
│   ├── src/
│   │   └── main.jsx
│   |
│   ├── App.jsx
│   ├── package.json
│   └── vite.config.js
|
├── workflow/
|
├── .gitignore
└── README.md
End-to-End Data Flow
Gmail
  |
  v
n8n
  |
  v
Email Processing
  |
  v
AI Analysis
  |
  +----> Category
  |
  +----> Priority
  |
  +----> Summary
  |
  v
PostgreSQL
  |
  v
Django REST API
  |
  v
React Dashboard
What This Project Demonstrates

This project demonstrates practical experience with:

AI-powered workflow automation
Email processing automation
LLM-based text classification
Text summarization
REST API development
Django backend development
PostgreSQL database integration
React dashboard development
Data visualization
Frontend and backend API integration
Database-level duplicate prevention
End-to-end application architecture
Screenshots

Dashboard screenshots are available in the screenshots folder.

The dashboard demonstrates:

Email statistics
Priority distribution
Category visualization
Recent processed emails
Future Improvements

Potential future improvements include:

Production Gmail webhook integration
Authentication and role-based access
Advanced support analytics
Search and filtering
AI-generated email responses
Human-in-the-loop approval workflow
Cloud deployment
Monitoring and logging
Multi-inbox support
Author

Pradip Achut Mohalkar

MCA | Python | Django | React | PostgreSQL | AI Automation

