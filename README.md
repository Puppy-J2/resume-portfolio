# Personal Resume Portfolio Website

A responsive personal portfolio and resume website built with HTML, CSS, and JavaScript. The project is designed for an IT student applying for internships, freelance work, and entry-level roles, while staying aligned with the school project guideline.

## Project Structure

```text
personal-resume-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile-joshua-battung.webp
│   │   ├── profile-placeholder.svg
│   │   └── projects/
│   │       ├── digital-queue-dashboard.png
│   │       ├── digital-queue-system-queue.png
│   │       ├── project-screenshot-1.svg
│   │       └── project-screenshot-2.svg
│   ├── certificates/
│   │   ├── cloud-security-alliance-cxotrust-certificate.docx
│   │   ├── cloud-security-alliance-cxotrust.png
│   │   ├── tesda-microsoft-cybersecurity-certificate.png
│   │   └── tesda-microsoft-cybersecurity-certificate.pdf
│   └── resume/
│       ├── resume.html
│       └── resume.pdf
└── README.md
```

## Local Setup

1. Open the project folder in a browser directly, or run a simple local server:

```bash
cd personal-resume-portfolio
python -m http.server 8000
```

2. Visit `http://localhost:8000` in your browser.

## Contact Form Delivery

The contact form sends submissions to `mbattungjoshua@gmail.com` through FormSubmit. On the first submission, check that inbox for FormSubmit's activation email and confirm it to enable delivery. The form uses FormSubmit's AJAX endpoint when JavaScript is available and has a standard form-post fallback. Keep the provider's spam protection enabled; never put private API keys or SMTP credentials in this static site.

## Personalize the Website

Update the following placeholders in `index.html` before publishing:

- Your full name
- Professional title
- About me text
- Career objectives
- Social media links
- Email address and phone number
- Resume file path
- Certificate entries and certificate files in `assets/certificates/`
- Experience details
- Project descriptions and links
- Contact details

Do not add fake credentials, fake links, fake screenshots, or fake employment records.
The downloadable resume PDF is generated from `assets/resume/resume.html`. Update the HTML source and regenerate the PDF when the resume information changes.
The Certificates and Achievements section displays and links to image previews of the supplied Cloud Security Alliance and TESDA certificates. Replace the remaining “Add Another Certificate” card when you have another credential to display.

## Deployment Guide

### 1. Choose a Personal Domain Name

Use a simple, professional domain that matches your name or personal brand. Good examples:

- yourname.com
- yourname.dev
- yourname.tech
- firstname-lastname.com

Choose a name that is easy to remember, spell, and type. Check domain availability through a domain registrar such as Namecheap, GoDaddy, Cloudflare Registrar, or Hostinger.

### 2. Domain Registration vs. Web Hosting

- Domain registration: This is the yearly rental of your website address, such as `yourname.com`.
- Web hosting: This is the service that stores and serves your website files online.

Your domain and hosting are separate services but must be connected.

### 3. Recommended Hosting for This Project

Since this is a static HTML/CSS/JavaScript website, a static hosting plan is ideal. Suitable options include:

- GitHub Pages (free for public repositories)
- Netlify
- Vercel
- Cloudflare Pages
- Namecheap or Hostinger shared hosting for traditional deployment

Choose the option that best matches your budget and technical comfort.

### 4. Prepare Files for Deployment

- Replace placeholder content with your real information.
- Ensure the project includes all necessary assets.
- Update `assets/resume/resume.html` with current resume details and regenerate `assets/resume/resume.pdf`.
- Confirm all links and image paths work locally.

### 5. Upload the Website

For static hosting providers:

1. Sign in to the hosting platform.
2. Create a new site project.
3. Upload the project folder or connect to GitHub.
4. Publish the site.

For traditional hosting:

1. Use FTP or a file manager provided by the host.
2. Upload all website files to the public root directory.
3. Ensure the main entry file is `index.html`.

### 6. Connect the Domain

After purchasing the domain:

1. Open your hosting provider or domain registrar.
2. Go to DNS settings.
3. Add the correct records, usually:
   - A record: points to the hosting server IP
   - CNAME: points `www` to your hosting domain
4. Wait for DNS propagation, which may take several minutes to 48 hours.

### 7. Enable HTTPS / SSL

Most modern hosting providers offer free SSL certificates. Enable HTTPS in the hosting dashboard or via automatic certificate setup. This protects traffic and improves trust.

### 8. Test Publicly

Once the site is live, test using a desktop browser and a mobile browser:

- navigation links
- hero buttons
- resume download
- project screenshots
- contact form behavior
- responsive layout
- loading speed
- broken links and missing images

### 9. Update the Site Later

To update the website after deployment:

1. Edit the files locally.
2. Upload the changed files again or push changes to the connected repository.
3. Refresh the live site and confirm everything works.

### 10. Important Note

This project has not been published to a live domain in this environment. A real domain purchase and hosting setup must be completed by you or your hosting provider outside this project folder.

## Submission Checklist

- [ ] All required sections are included
- [ ] Personal details are accurate and not fabricated
- [ ] Resume download is included when PDF is available
- [ ] Project screenshots are added and visible
- [ ] Contact form behavior is functional on the front end
- [ ] Mobile responsiveness is checked
- [ ] Styling is clean and professional
- [ ] Navigation links work
- [ ] Domain and hosting setup is documented
- [ ] README is updated with final live URL once published

## Demo / Instructor Presentation

Open the website locally and walk through the following during presentation:

- Home profile section
- Skills and certificates
- Experience and projects
- Contact form and interaction
- Domain deployment plan
- Deployment steps and DNS explanation

## Additional Notes

- The project intentionally uses editable placeholders to support incomplete information.
- It follows the school guideline by focusing on a professional online profile without inventing credentials or results.
- Replace placeholder assets with your own actual files before final submission.
