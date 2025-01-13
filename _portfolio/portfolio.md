---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---
<div class="portfolio-grid">
  {% for project in site.data.projects %}
  <div class="tile">
    <a href="{{ project.url }}" target="_blank">
      <div class="tile-icon">
        {% for skill in project.skills %}
        {% assign skill_info = site.data.skills | where: "skill", skill | first %}
        <img src="{{ skill_info.icons.small }}" alt="{{ skill }}">
        {% endfor %}
      </div>
      <div class="tile-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
