# Job Leads Platform

An extremely simple job leads platform connecting developers and freelancers with clients, inspired by resend.com and thumbtack.com. This platform aims to eliminate the middleman by providing a streamlined interface where freelancers can receive job leads directly via email.

---

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
  - [User Roles](#user-roles)
  - [Sign-Up Process](#sign-up-process)
  - [Job Posting](#job-posting)
  - [Lead Distribution](#lead-distribution)
- [Core Features](#core-features)
  - [Minimalist Interface](#minimalist-interface)
  - [Email Notifications](#email-notifications)
  - [Subscription Model](#subscription-model)
- [Architecture Overview](#architecture-overview)
  - [Component Interaction](#component-interaction)
- [Security and Abuse Prevention](#security-and-abuse-prevention)
  - [Bot and Spam Mitigation](#bot-and-spam-mitigation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This platform is designed to connect clients with developers and freelancers in the simplest way possible. Freelancers sign up with minimal information and receive job leads directly in their email inbox. Clients can post jobs after a quick email verification, ensuring genuine job postings while maintaining a frictionless experience.

---

## Technology Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Backend and API**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Database**: [Supabase](https://supabase.io/) (Hosted PostgreSQL with real-time capabilities)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Email Service**: [Resend](https://resend.com/)
- **Deployment Platform**: [Vercel](https://vercel.com/)
- **Payment Processing**: [Stripe](https://stripe.com/)
- **Bot Protection**: [Google reCAPTCHA](https://www.google.com/recaptcha/about/)
- **AI Features**: Optional enhancements for categorization and personalization

---

## How It Works

### User Roles

1. **Freelancers/Companies**: Developers and freelancers who sign up to receive job leads.
2. **Clients**: Individuals or companies looking to hire freelancers. They can post job leads after a simple email verification.

### Sign-Up Process

- **Freelancers/Companies**:
  - Provide basic information: email and company name.
  - Select categories of interest (e.g., web development, graphic design).
  - Set up email preferences.
  - Subscribe to receive job leads at $2/month via Stripe.

### Job Posting

- **Clients**:
  - Access the "Post a Job" page.
  - Fill out a simple form with the job description, select the relevant category, and provide their email address.
  - Complete the Google reCAPTCHA verification to prove they are human.
  - Receive an email with a verification link to confirm their email address.
  - Once the email is verified, the job post is queued and sent out to freelancers in the relevant category.
  - Clients receive a receipt of their posting via email.
  - **Note**: No client data is stored in the system beyond what is necessary for the job posting and verification process.

### Lead Distribution

- When a job is posted and verified:
  - The platform identifies all subscribed freelancers in the relevant category.
  - An email containing the job details is sent to these freelancers using Resend.
  - The client's email is not shared with freelancers unless included in the job description.

---

## Core Features

### Minimalist Interface

- **For Freelancers/Companies**:
  - Simple sign-up form with minimal fields.
  - Dashboard to manage subscription and email preferences.
- **For Clients**:
  - Straightforward job posting form without the need for account creation.
  - Email verification step to ensure authenticity.

### Email Notifications

- Job leads are sent directly to freelancers' emails.
- Emails include all necessary details for freelancers to decide on pursuing the lead.
- Clients receive a confirmation email with a receipt of their job posting.

### Subscription Model

- Freelancers pay a flat fee of **$2/month** to receive unlimited job leads.
- Payments are processed securely via Stripe.

---

## Architecture Overview

### Component Interaction

1. **Next.js**:
   - Serves the frontend interface.
   - Handles API routes for backend logic.

2. **Clerk**:
   - Manages user authentication for freelancers.
   - Simplifies sign-up and login processes.

3. **Supabase**:
   - Stores freelancer data, job postings, and subscription statuses.
   - Provides real-time database capabilities.
   - **Note**: Minimal client data is stored; only what's necessary for job posting and verification.

4. **Resend**:
   - Sends transactional emails to freelancers and clients.
   - Ensures reliable email delivery.

5. **Stripe**:
   - Processes subscription payments.
   - Manages recurring billing.

6. **Google reCAPTCHA**:
   - Protects the job posting form from bots and spam submissions.

7. **Vercel**:
   - Hosts the application.
   - Provides seamless deployment and scaling.

---

## Security and Abuse Prevention

### Bot and Spam Mitigation

**Challenges**:

- Allowing clients to post jobs without full registration increases the risk of spam and bot submissions.
- Potential misuse can degrade the quality of leads and affect freelancer satisfaction.

**Solutions**:

1. **Google reCAPTCHA Integration**:
   - Implement reCAPTCHA v2 or v3 on the job posting form.
   - Helps distinguish between human users and bots.

2. **Email Verification for Clients**:
   - Clients must provide a valid email address when posting a job.
   - An email with a verification link is sent to confirm their email.
   - The job post is only processed and sent out after email verification.
   - **Benefits**:
     - Ensures the authenticity of job postings.
     - Adds a minimal step that significantly reduces spam.

3. **Minimal Data Storage**:
   - Client data is not stored beyond what's necessary for the job posting and verification process.
   - Enhances privacy and reduces data management overhead.

4. **Receipt of Posting**:
   - Clients receive a confirmation email with a copy of their job posting.
   - Provides transparency and a record of the submission.

5. **Content Filtering**:
   - Implement basic validation to detect spammy or inappropriate content.
   - Use keyword filters or integrate AI services for content moderation.

6. **Monitoring and Reporting**:
   - Allow freelancers to report suspicious or spam job leads.
   - Regularly monitor job postings for patterns indicative of spam.

7. **Terms of Service Agreement**:
   - Require clients to agree to terms that prohibit spam and misuse before submitting a job.
   - Provides legal grounds to take action against abusers.

---

## Getting Started

1. **Freelancers/Companies**:

   - Visit the platform's homepage.
   - Click on "Sign Up" and fill in the basic information.
   - Select your categories of interest.
   - Set up your subscription by providing payment details via Stripe.
   - Start receiving job leads directly in your email.

2. **Clients**:

   - Go to the "Post a Job" page.
   - Fill out the job description, select the relevant category, and provide your email address.
   - Complete the Google reCAPTCHA verification.
   - Check your email inbox and click on the verification link sent to you.
   - Once verified, your job post will be queued and sent out to freelancers.
   - Receive a receipt of your posting via email.
   - **Note**: No account creation is required, and your data is not stored beyond the job posting process.

---

## Contributing

We welcome contributions to improve the platform. Please fork the repository and submit a pull request with your changes.

---

## License

This project is licensed under the MIT License.

---

# Notes on Components

## Clerk (Authentication)

- **Purpose**: Handles user authentication for freelancers and companies.
- **Integration**:
  - Provides sign-up and login forms.
  - Manages user sessions and profile data.
- **Advantages**:
  - Simplifies authentication flows.
  - Secure handling of user credentials.

## Resend (Email Service)

- **Purpose**: Sends emails containing job leads to freelancers and confirmation emails to clients.
- **Integration**:
  - API calls to send emails when a job is posted and when clients verify their email.
  - Handles email templates and delivery.
- **Advantages**:
  - Reliable email delivery.
  - Easy to set up and maintain.

## Supabase (Database and Backend)

- **Purpose**:
  - Stores freelancer information and subscription statuses.
  - Temporarily stores job postings during the verification process.
- **Integration**:
  - Supabase client used in Next.js API routes.
  - Real-time database updates and queries.
- **Advantages**:
  - Scalable PostgreSQL database.
  - Real-time capabilities for potential future enhancements.
- **Data Storage Note**:
  - Minimal client data is stored; only what is necessary for email verification and job posting.

## Next.js (Frontend and API)

- **Purpose**: Builds the user interface and handles server-side logic.
- **Integration**:
  - Pages for sign-up, dashboard, and job posting.
  - API routes for backend functionality (e.g., posting jobs, handling payments, email verification).
- **Advantages**:
  - Server-side rendering for better performance.
  - Simplifies building both frontend and backend in one framework.

## Vercel (Deployment)

- **Purpose**: Hosts the application and handles deployments.
- **Integration**:
  - Connects to the code repository for continuous deployment.
  - Manages environment variables and scaling.
- **Advantages**:
  - Easy deployment process.
  - Optimized for Next.js applications.

## Stripe (Payment Processing)

- **Purpose**: Processes subscription payments from freelancers.
- **Integration**:
  - Handles checkout sessions for subscriptions.
  - Manages recurring billing and payment methods.
- **Advantages**:
  - Secure and reliable payment processing.
  - Supports a wide range of payment methods.

## Google reCAPTCHA (Bot Protection)

- **Purpose**: Protects the job posting form from bot submissions and spam.
- **Integration**:
  - reCAPTCHA widget added to the job posting form.
  - Server-side validation of the reCAPTCHA token.
- **Advantages**:
  - Effective in preventing automated submissions.
  - Easy to implement and user-friendly.

---

# Potential Enhancements

- **AI Features**:
  - **Automated Categorization**: Use AI to categorize job posts if clients are unsure.
  - **Content Moderation**: Implement AI-powered content filtering to detect spam or inappropriate content.

- **User Profiles for Clients**:
  - Optionally allow clients to create profiles for easier management of their job posts.

- **Feedback System**:
  - Allow freelancers to provide feedback on job leads to improve quality.

---

# Conclusion

This platform leverages a modern tech stack to provide a minimalist yet effective solution for connecting freelancers with job leads. By addressing potential abuse through email verification and bot protection measures like Google reCAPTCHA, we aim to maintain a high-quality experience for all users while keeping the system simple and straightforward.

---

# Contact

For any questions or support, please contact [byron@byronwade.com](mailto:byron@byronwade.com).

---
