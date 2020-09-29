---
layout: resume
title: Rob Koch Resume
# Projects
projects: [
  {
    label: "Toe Codes",
    img: "toe logo",
    url: "https://toecodes.com", 
    details: "QR codes as a service. Create self-contained QR codes where scanners can see images, contact information, check in and chat all without redirecting to a random website. Embed a message into the physical code pattern.",
  },
  {
    label: "JobsBox",
    img: "briefcase",
    url: "https://github.com/kochrt/jobsbox",
    details: "Python webscraper for <a href=\"https://whoishiring.io\">whoishiring.io</a> based on keywords",
    stack: [
      ["Python.png", "Python"],
    ]
  },
  {
    label: "Patterson Bridge", 
    img: "pb",
    url: "https://www.pattersonbridge.com", 
    details: "Site to help students find other students to work on projects together. Written in Angular2 with Google's Firebase as a backend.",
    stack: [
      ["Angular2.png", "Angular2"], 
      ["Firebase.jpeg", "Firebase"],
    ]
  },
  {
    label: "Patterson Bridge iOS app", 
    img: "pb",
    url: "https://itunes.apple.com/us/app/patterson-bridge/id1178426060?mt=8", 
    details: "Full-featured iOS client for Patterson Bridge. Written in Swift 3 for iPad and iPhone.",
    stack: [
      ["iOS.png", "iOS"], 
      ["Swift.jpeg", "Swift"], 
      ["Firebase.jpeg", "Firebase"]
    ]
  },
  {
    label: "Project Dragonfly iOS app", 
    img: "Project Dragonfly",
    url: "https://github.com/kochrt/ProjectDragonfly", 
    details: "Swift 3 iOS app to encourage kids to explore their environment and ask scientific questions",
    stack: [
      ["iOS.png", "iOS"], 
      ["Swift.jpeg", "Swift"]
    ]
  }
]

# Work experience
experiences: [
  {
    title: "Software Engineer",
    img: "google.png",
    company: "Google",
    url: "https://www.google.com",
    location: "Seattle, WA",
    time: "Oct 2018 - Current",
    details: [
      "Integrated search bar on the home screen, the largest visual change in the product's recent history, which led to a <b>2x increase</b> in seach users and a <b>50% increase</b> in search clicks",
      "Designed and implemented the ability for users to select multiple messages, which is used over <b>2M times/day</b>",
      "Designed and implemented heuristically identifying, and automatically replying to, carrier requests to users for spam phone numbers, which is used <b>10k times/day</b> across all users",
      "Designed and implemented experiments for increasing the CTR of RCS promotions, leading to a <b>22% increase</b> in user sign-ups",
    ]
  },
  {
    title: "Software Engineer",
    img: "cladwell.png",
    company: "Cladwell",
    url: "https://cladwell.com",
    location: "Cincinnati, OH",
    time: "May 2017 - May 2018",
    details: [
      "Converted iOS app from a thick to a thin client in conjuction with API rollout",
      "Reduced instances of crashing by <b>an order of magnitude</b>, while simultaneously adding new features",
      "Raised app rating from <b>3.x to 4.4+</b>",
      "Led Growth Team engineering efforts to exponentially increase customer base",
      "Implemented a fully redesigned in-app onboarding process to increase retention at the top-most level of our user acquisition funnel",
    ]
  },
  {
    title: "Software Engineer",
    img: "cfs.png",
    company: "Cash Flow Solutions",
    url: "https://followthefrog.com",
    location: "Oxford, OH",
    time: "2016 - 2017",
    details: [ 
      "Created a javascript payment processing plugin for clients as a one-line alternative to interacting directly with our API",
      "Migrated company website out of Wordpress to independent HTML/CSS/JS"
    ]
  },
  {
    title: "Cloud Engineer",
    img: "cardinal.png",
    company: "Cardinal Health",
    url: "https://cardinalhealth.com",
    location: "Columbus, OH",
    time: "2016",
    details: [
      "Managed, redesigned, and partially automated the internal requisition process for Amazon Web Services (AWS) resources",
      "Automated solutions for logging into VDI, sending customer emails, and Neo4j graph database queries using Python"
    ]
  },
  {
    title: "Research Fellow",
    img: "proctergamble.png",
    company: "Procter & Gamble",
    url: "https://us.pg.com",
    location: "Cincinnati, OH",
    time: "2012",
    details: [
      "Designed and conducted product research and consumer testing using biometric tools and human factors, including facial expression coding, eye tracking using Tobii, implicit cognition studies, and Facial Action Coding System (FACS)",
      "Led work on developing new technical methods for evaluating product performance based on sensory feedback from consumers (Pantene)"
    ]
  }
]

# Skills
skills: [
  "Swift, XCode, iOS",
  "Java",
  "Angular2, Typescript",
  "HTML, CSS, Javascript",
  "Python, Jupyter Notebooks",
  "Android, Android Studio",
  "AWS",
  "Whatever gets the job done",
]
---
{% include experience.html %}
{% include projects.html %}
{% if site.light %}

{% else %}
    {% if site.skills.size > 0 %}
        {% include skills.html %}
    {% endif %}
{% endif %}

