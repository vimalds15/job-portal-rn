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

<img src="screenshots/login.png" width="150px" />

#### Registration Page

<img src="screenshots/register.png" width="150px" />

#### User Home Page

<img src="screenshots/userhome.png" width="150px" />

#### Job Details Page

<img src="screenshots/jobdetails.png" width="150px" />

#### Job Application Page

<img src="screenshots/applyjob.png" width="150px" />

#### Notifications Page

<img src="screenshots/notifications.png" width="150px" />

#### User Profile Page

<img src="screenshots/userprofile.png" width="150px" />

### Company

#### Company Dashboard Page

<img src="screenshots/company.png" width="150px" />

#### Company Dashboard More

<img src="screenshots/company2.png" width="150px" />

#### Add Jobs

<img src="screenshots/addjob.png" width="150px" />

#### Edit Job

<img src="screenshots/editjob.png" width="150px" />

#### Manage Applicants

<img src="screenshots/applications.png" width="150px" />

#### Applicant Detail

<img src="screenshots/applicationdetail.png" width="150px" />

#### Company Profile

<img src="screenshots/profile.png" width="150px" />

### Admin

### Admin Dashboard

<img src="screenshots/admin.png" width="150px" />

### Admin Dashboard More

<img src="screenshots/admin2.png" width="150px" />

### Admin Users

<img src="screenshots/users.png" width="150px" />

### Admin Companies

<img src="screenshots/companies.png" width="150px" />

### Admin Jobs

<img src="screenshots/adminjob.png" width="150px" />

### Company Requests

<img src="screenshots/companyapproval.png" width="150px" />