# Job Portal for Campus Placements

An Application to manage placements in your college.

- Contains User, Company and Admin Role Profiles
- User : View and Apply for a Job, View Notifications, Edit Profile
- Company: Post verfication from admin, the company can perfom CRUD of Jobs and Applicants
- Admin: Access of everything

## Tech Stack

- Application: React Native (Expo)
- Backend: NodeJS
- Database: MongoDB
- Cloud Storage Provider: Cloudinary (for files, images storage etc.,)

## Journeys

- User: Register -> Login -> View and Apply Jobs, View Application Statuses, Update Profiles
- Company: Register -> Login -> Verification -> CRUD of Jobs, Manage Applications etc.,
- Admin: Register -> Login -> Access to everything

## Steps to Run the Application

### Application

- Run "cd jobfusion" in terminal
- Run "npm install" in terminal
- Run "npx expo start" in terminal

### Backend

- Run "cd server" in terminal
- Run "npm start" in terminal

## Tech Debt:

- Mobile
- Clean Code (Splitting into components etc.,)
- Implement Auth Middleware
- Fallbacks for certain null fields, placeholders etc.,

## Few Screenshots

### User

#### Login Page

<img src="screenshots/login.png" style="width:150" />

#### Registration Page

<img src="screenshots/register.png" style="width:150" />

#### User Home Page

<img src="screenshots/userhome.png" style="width:150" />

#### Job Details Page

<img src="screenshots/jobdetails.png" style="width:150" />

#### Job Application Page

<img src="screenshots/applyjob.png" style="width:150" />

#### Notifications Page

<img src="screenshots/notifications.png" style="width:150" />

#### User Profile Page

<img src="screenshots/userprofile.png" style="width:150" />

### Company

#### Company Dashboard Page

<img src="screenshots/company.png" style="width:150" />

#### Company Dashboard More

<img src="screenshots/company2.png" style="width:150" />

#### Add Jobs

<img src="screenshots/addjob.png" style="width:150" />

#### Edit Job

<img src="screenshots/editjob.png" style="width:150" />

#### Manage Applicants

<img src="screenshots/applications.png" style="width:150" />

#### Applicant Detail

<img src="screenshots/applicationdetail.png" style="width:150" />

#### Company Profile

<img src="screenshots/profile.png" style="width:150" />

### Admin

### Admin Dashboard

<img src="screenshots/admin.png" style="width:150" />

### Admin Dashboard More

<img src="screenshots/admin2.png" style="width:150" />

### Admin Users

<img src="screenshots/users.png" style="width:150" />

### Admin Companies

<img src="screenshots/companies.png" style="width:150" />

### Admin Jobs

<img src="screenshots/adminjob.png" style="width:150" />

### Company Requests

<img src="screenshots/companyapproval.png" style="width:150" />