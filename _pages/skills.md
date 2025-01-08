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
      <img src="{{ skill.icon }}" alt="{{ skill.skill }}">
      <h3>{{ skill.skill }}</h3>
    </a>
  </div>
  {% endfor %}
</div>
