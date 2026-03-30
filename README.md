
---

# 📦 BACKEND README

```md
# Habit Tracker API

A simple serverless CRUD API for tracking habits and daily completions.

---

## 🧠 Overview

This project is a backend API built using:

- AWS Lambda (serverless compute)
- API Gateway (HTTP API layer)
- PostgreSQL (RDS) for data storage

The goal is to demonstrate a clean, production-style architecture using AWS.

---

## ⚙️ Features

- Create habit
- Update habit
- Delete habit
- View all habits
- Mark habit as complete

---

## 🗄️ Data Model

### users
- id
- email
- created_at

### habits
- id
- user_id
- name
- created_at

### habit_completions
- id
- habit_id
- completed_at

---

## 🔌 API Endpoints

- GET /habits
- POST /habits
- PUT /habits/{id}
- DELETE /habits/{id}
- POST /habits/{id}/complete

---

## 🏗️ Architecture

- Frontend: React (hosted on S3 + CloudFront)
- Backend: AWS Lambda + API Gateway
- Database: PostgreSQL (RDS)
- Logging: CloudWatch

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
