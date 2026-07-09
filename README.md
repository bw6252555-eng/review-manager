# ⭐ Review Monitoring Dashboard

A full-stack Review Monitoring Dashboard built with **Next.js**, **Supabase**, **Resend**, and **Vercel**.

This application helps businesses monitor customer reviews, identify negative feedback, and automatically send email alerts so important reviews are never missed.

---

## 🚀 Features

* View customer reviews in a modern dashboard
* Search and filter reviews
* Statistics overview
* Automatic email alerts for negative reviews
* Secure Supabase database
* Row Level Security (RLS)
* Server-side API routes
* Responsive interface
* Cloud deployment on Vercel

---

## 🛠 Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes

### Database

* Supabase

### Email Service

* Resend

### Deployment

* Vercel

---

## 📂 Project Structure

```
app/
components/
lib/
public/
api/
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/bw6252555-eng/review-manager.git
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create an `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
```

---

## 📧 Email Alerts

Negative reviews are detected automatically.

When a review requires attention:

* An email notification is generated.
* The review status is updated.
* Duplicate alerts are prevented.

---

## 🔒 Security

* Supabase Row Level Security enabled
* Service Role Key used only on the server
* Environment variables stored securely

---

## 🚀 Deployment

The application is deployed using **Vercel**.

---

## 📈 Future Improvements

* AI-generated replies
* Charts & analytics
* Authentication
* Multi-business support
* Weekly email reports
* Dark mode

---

## 👨‍💻 Author

**Haider**

Built as a portfolio project to demonstrate full-stack web development using modern technologies.
