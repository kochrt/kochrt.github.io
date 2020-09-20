---
layout: postlist
---
<div class="posts">
  {% for post in site.posts %}
  {% if post.tags contains "Tech" %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
  {% if forloop.first %}
  <h2 class="title-year mx-3 mt-5" id="{{ this_year }}-ref">{{this_year}}</h2>
  {% endif %}
  {% include postrow.html %}
  {% if this_year != next_year %}

  <h2 class="title-year mx-3 mt-5" id="{{ next_year }}-ref">{{next_year}}</h2>

  {% endif %}
  {% endif %}
  {% endfor %}
</div>