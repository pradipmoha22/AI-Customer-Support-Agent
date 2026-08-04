# AI Customer Support Agent

## Overview

AI-powered customer support automation system built using n8n, PostgreSQL, Gmail, and Ollama.

## Features

- Automatic Gmail email fetching
- AI email categorization
- Priority detection
- Email summarization
- PostgreSQL storage
- Duplicate email prevention
- Automated workflow processing

## Tech Stack

- n8n
- PostgreSQL
- Gmail API
- Ollama

## Workflow

Gmail
→ AI Agent
→ PostgreSQL
→ Duplicate Protection

## Database

Table: processed_emails

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

## Duplicate Prevention

Uses:

- UNIQUE(email_hash)
- ON CONFLICT DO NOTHING

## Screenshots

See screenshots folder.

## Author

Pradip Achut Mohalkar