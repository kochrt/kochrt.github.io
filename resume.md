---
layout: resume
title: Rob Koch Resume
# Work experience
experiences: [
  {
    title: "Founder",
    company: "Swink - Simple Web Links with Analytics",
    img: "https://icons.duckduckgo.com/ip2/sw.ink.ico",
    url: "https://sw.ink",
    location: "Seattle, WA",
    time: "Feb 2021 - Current",
    details: [
      "Dynamic short links and automatically branded QR codes with analytics",
      "From Firebase hosting and SPA Vue to SSR Nuxt/Vue on Google App Engine with external API",
      "Stripe, Github Actions for CI/CD, Playwright for testing",
    ]
  },
  {
    title: "Software Engineer",
    img: "https://icons.duckduckgo.com/ip2/google.com.ico",
    company: "Google",
    url: "https://www.google.com",
    location: "Seattle, WA",
    time: "Oct 2018 - Feb 2021",
    details: [
      "Integrated search bar on the home screen, the largest visual change in the product's recent history, which led to a 2x increase in seach users and a 50% increase in search clicks",
      "Designed and implemented the ability for users to select multiple messages, which is used over 2M times/day",
      "Designed and implemented heuristically identifying, and automatically replying to, carrier requests to users for spam phone numbers, which is used 10k times/day across all users",
      "Designed and implemented experiments for increasing the CTR of RCS promotions, leading to a 22% increase in user sign-ups",
    ]
  },
  {
    title: "Software Engineer",
    img: "/assets/images/cladwell.png",
    company: "Cladwell",
    url: "https://cladwell.com",
    location: "Cincinnati, OH",
    time: "May 2017 - May 2018",
    details: [
      "Converted iOS app from a thick to a thin client in conjuction with API rollout",
      "Reduced instances of crashing by an order of magnitude, while simultaneously adding new features",
      "Raised app rating from 3.x to 4.4+",
      "Led Growth Team engineering efforts to exponentially increase customer base",
      "Implemented a fully redesigned in-app onboarding process to increase retention at the top-most level of our user acquisition funnel",
    ]
  },
  {
    title: "Software Engineer",
    img: "https://icons.duckduckgo.com/ip2/ribbit.ai.ico",
    company: "RIBBIT.ai",
    url: "https://ribbit.ai",
    location: "Oxford, OH",
    time: "2016 - 2017",
    details: [ 
      "Created a javascript payment processing plugin for clients as a one-line alternative to interacting directly with our API",
      "Migrated company website out of Wordpress to independent HTML/CSS/JS"
    ]
  },
  {
    title: "Cloud Engineer",
    img: "/assets/images/cardinal.png",
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
    img: "https://icons.duckduckgo.com/ip2/us.pg.com.ico",
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
  "Java", "Kotlin",
  "Typescript", "Vue", "Nuxt",
  "Python, Jupyter Notebooks",
  "Android, Android Studio",
  "AWS", "Google Cloud",
  "Whatever gets the job done",
]
---
{% include experience.html %}
{% if site.light %}

{% else %}
    {% if site.skills.size > 0 %}
        {% include skills.html %}
    {% endif %}
{% endif %}

