
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
        {% if skill_info and skill_info.icons.small %}
        <img src="{{ skill_info.icons.small }}" alt="{{ skill }}" style="filter: invert(1);">
        {% endif %}
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
