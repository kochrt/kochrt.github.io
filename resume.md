---
layout: resume
title: Rob Koch Resume
# Work experience

open_source:
  - title: Markwhen
    description: Create timelines from markdown-like text
    github: https://github.com/mark-when/markwhen
    img: https://icons.duckduckgo.com/ip3/markwhen.com.ico
    url: https://markwhen.com

  - title: imnew.to
    description: Get added to a group chat with other newly relocated people in your city
    url: https://imnew.to
    github: htts://github.com/kochrt/imnewto
    img: https://icons.duckduckgo.com/ip3/imnew.to.ico

experiences:
  - title: "Founder"
    company: "Markwhen.com"
    location: "Brooklyn, NY"
    img: "https://icons.duckduckgo.com/ip2/markwhen.com.ico"
    url: "https://markwhen.com"
    time: "Sep 2022 - now"
    details:
      - Write markdown-ish plain text and have it converted into a nice looking timeline, or map, or calendar
      - Static vue on cloudflare, with some serverless functions to support auth, cloud saving, etc

  - title: "Software Engineer"
    company: "Reddit"
    img: "https://icons.duckduckgo.com/ip2/reddit.com.ico"
    url: "https://reddit.com"
    location: "Seattle, WA"
    time: "Mar 2022 - Sep 2022"
    details:
      - Internal tooling for customer support, premium & perks team

  - title: "Founder"
    company: "Swink & qr.new"
    img: "https://icons.duckduckgo.com/ip2/sw.ink.ico"
    url: "https://sw.ink"
    location: "Seattle, WA"
    time: "Feb 2021 - Mar 2022"
    details:
      - "Swink was a QR design app with dynamic short links with simple analytics"
      - "Web app and API with SSR Nuxt/Vue on Google App Engine"
      - "Stripe, Github Actions for CI/CD, Playwright for testing"

  - title: "Software Engineer, Google Messages"
    img: "https://icons.duckduckgo.com/ip2/google.com.ico"
    company: "Google"
    url: "https://www.google.com"
    location: "Seattle, WA"
    time: "Oct 2018 - Feb 2021"
    details:
      - "Integrated search bar on the home screen, the largest visual change in the product's recent history, which led to a 2x increase in seach users and a 50% increase in search clicks"
      - "Designed and implemented the ability for users to select multiple messages, which is used over 2M times/day"
      - "Designed and implemented heuristically identifying, and automatically replying to, carrier requests to users for spam phone numbers, which is used 10k times/day across all users"
      - "Designed and implemented experiments for increasing the CTR of RCS promotions, leading to a 22% increase in user sign-ups"

  - title: "Software Engineer"
    img: "/assets/images/cladwell.png"
    company: "Cladwell"
    url: "https://cladwell.com"
    location: "Cincinnati, OH"
    time: "May 2017 - May 2018"
    details:
      - "Converted iOS app from a thick to a thin client in conjuction with API rollout"
      - "Reduced instances of crashing by an order of magnitude, while simultaneously adding new features"
      - "Raised app rating from 3.x to 4.4+"

  - title: "Cloud Engineering Intern"
    img: "/assets/images/cardinal.png"
    company: "Cardinal Health"
    url: "https://cardinalhealth.com"
    location: "Columbus, OH"
    time: "2016"
    details:
      - "Managed, redesigned, and partially automated the internal requisition process for Amazon Web Services (AWS) resources"
      - "Automated solutions for logging into VDI, sending customer emails, and Neo4j graph database queries using Python"

  - title: "English Teacher"
    # img: "/assets/images/translate.png",
    company: "Various Universities"
    location: "Changsha, Shaoxing, and Hangzhou, China"
    time: "2012-2015"
    details:
      - "Taught conversational English to University classes in 3 schools over 3 years"
      - "Learned Chinese 但是最近越来越懒了"

  - title: "Research Fellow"
    img: "https://icons.duckduckgo.com/ip2/us.pg.com.ico"
    company: "Procter & Gamble"
    url: "https://us.pg.com"
    location: "Cincinnati, OH"
    time: "2012"
    details:
      - "Designed and conducted product research and consumer testing using biometric tools and human factors, including facial expression coding, eye tracking using Tobii, implicit cognition studies, and Facial Action Coding System (FACS)"
      - "Led work on developing new technical methods for evaluating product performance based on sensory feedback from consumers (Pantene)"

# Skills
skills:
  - "I'm pretty sure I've done a bit of everything"
  - "Swift, XCode, iOS"
  - "Android, Android Studio"
  - "My java is better than my kotlin"
  - "Typescript, Vue, Nuxt, React"
  - "Python, Jupyter Notebooks"
  - "There's a raspberry pi sitting unused on my desk"
  - "AWS, Google Cloud"
  - "Stripe"
  - "Whatever gets the job done"
---

{% include experience.html %}
{% if site.light %}

{% else %}
{% if site.skills.size > 0 %}
{% include skills.html %}
{% endif %}
{% endif %}
