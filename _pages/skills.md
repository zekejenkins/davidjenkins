---
layout: single
title: Skills
author_profile: true
permalink: /skills/
---

<div class="skills-grid">
  {% for skill in site.data.skills %}
  <div class="tile">
    <a href="{{ skill.url }}">
      <img src="{{ skill.image }}" alt="{{ skill.skill }}">
      <div class="tile-content">
        <h3>{{ skill.skill }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
