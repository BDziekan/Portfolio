Project Steps: Creating Bart Dziekan's Data Analyst Portfolio Website

This document outlines the complete process of creating, refining, and deploying my portfolio website as a Data Analyst, with assistance from Grok 3.

---Step 1: Initial Setup (May 4, 2025)

Objective: Create a portfolio website to showcase my skills and projects.


Actions:


    -- Started with an initial index.html file containing the structure for Home, About, Skills, Portfolio, and Contact sections.



    --Included a styles.css file for styling with a dark theme (black background, pink-purple gradient buttons).



    --Added a main.js file for navbar toggle (mobile menu) and modal functionality for the Portfolio section.



    --Created an assets/ folder with initial placeholder images:

        Home_Profile.jpg (header image, 450x450px, circular).

        background.svg (decorative background for Home, 400x400px).

        dashboard.svg (About section image, 300x300px, circular).

        CV_Bartek2.pdf (resume file for download in About section).


    -- Removed unnecessary background images (about-bg-1.png, about-bg-2.png) from the About section and corresponding CSS.


---Step 2: Fixing Assets and Structure

Objective: Ensure the website has the correct assets and structure.


Actions:


    --Reviewed and confirmed the assets:

        Home: Home_Profile.jpg, background.svg.

        About: dashboard.svg, CV_Bartek2.pdf.

        Portfolio: Kept as placeholders (portfolio-1.jpg to portfolio-6.jpg) for future projects.


    --Decided to keep the Portfolio section as a placeholder for future updates, avoiding removal.


    --Updated the GitHub URL placeholder (https://github.com/your-profile) to be updated later once I have a GitHub account.


    --Fixed the footer to display "© 2025 Bartlomiej Dziekan. All Rights Reserved."


---Step 3: Fixing Navbar Issues

Objective: Resolve navbar display issues on mobile and desktop.


Actions:


    Issue 1: On mobile view (width < 768px), the "Portfolio" text was overflowing and partially visible when the menu was closed.

    Fixed by updating styles.css:

        Added visibility: hidden, overflow: hidden, and top: 100% to .nav__links.

        Ensured .nav__links.open toggles visibility: visible.



    Issue 2: After the fix, the menu disappeared in desktop view (width > 768px).

    Fixed by updating the @media (width > 768px) section in styles.css:

        Added position: static, transform: none, and visibility: visible to .nav__links.

        Tested both mobile and desktop views to confirm the navbar worked as intended:

        Mobile: Hamburger menu toggles correctly, no text overflow.

        Desktop: Menu displays horizontally, no disappearance.


---Step 4: Setting Up GitHub and Deploying the Site

Objective: Deploy the website using GitHub Pages.


Actions:


   --GitHub Account Creation:


    --Signed up at github.com with the username.


    --Downloaded from git-scm.com.



    --Configured with:

        git config --global user.name "Bart Dziekan"
        git config --global user.email "my-email@example.com"


    --Initialize Git Repository:


    --Navigated to the data-analyst-portfolio/ directory:

        cd ~/Desktop/data-analyst-portfolio


    --Initialized Git:

        git init
        git add .
        git commit -m "Initial commit with portfolio site"


    --Create GitHub Repository:


    --Created a new repository named Portfolio on GitHub (public).


    --URL: https://github.com/BDziekan/Portfolio.


    --Push to GitHub:


    --Encountered an authentication error due to GitHub’s removal of password authentication (August 13, 2021).


    --Generated a Personal Access Token (PAT) on GitHub:


    --Went to Settings > Developer settings > Personal access tokens > Generate new token.


    --Named it "Portfolio Deployment", set expiration to 30 days, selected the repo scope.


    --Copied the token (e.g., ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx).


    --Updated the remote URL with the PAT:

        git remote set-url origin https://<my-pat>@github.com/BDziekan/Portfolio.git


    --Pushed successfully:

        git push -u origin main


    --Enable GitHub Pages:

        Went to Settings > Pages in the repository.


    --Set the source to main branch, / (root) folder.


    --Site deployed at https://BDziekan.github.io/Portfolio/.


    --Tested the Live Site:


    --Confirmed all sections (Home, About, Skills, Portfolio placeholders, Contact) loaded correctly.


---Step 5: Setting Up the Contact Form with Formspree

Objective: Make the contact form functional for email submissions.


Actions:


    --Signed up at formspree.io.



    --Selected "Simple HTML Form" since my form in index.html doesn’t use JavaScript for submission.


    --Created a new form and copied the endpoint URL (e.g., https://formspree.io/f/your-actual-form-id).


    --Updated index.html:


    --Changed the form action to the Formspree endpoint:

        <form action="https://formspree.io/f/your-actual-form-id" method="POST">


    --Added a redirect URL:

        <input type="hidden" name="_next" value="https://BDziekan.github.io/Portfolio/#contact">


    --Pushed the update:

        git add index.html
        git commit -m "Updated Formspree endpoint and added redirect URL"
        git push


    --Tested the form by submitting a test message and confirmed it was received in the Formspree dashboard.


---Step 6: Final Verification

Objective: Ensure everything works and document the process.


Actions:


    --Verified the live site (https://BDziekan.github.io/Portfolio/) works on mobile and desktop.


    --Kept the GitHub URL in the Contact section as a placeholder (https://github.com/BDziekan) to be updated later.


    --Noted that my PAT expires in 30 days. Saved it securely for future pushes.


    --Created this documentation and a README.md file for the repository.


---Future Steps


--Add project assets and details to the Portfolio section as I complete data analysis projects.


--Update the GitHub profile link in the Contact section.


--Consider switching to SSH authentication for Git operations after the PAT expires.