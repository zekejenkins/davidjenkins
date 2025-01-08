---
layout: single
title: "Skills"
permalink: /skills/
author_profile: true
---

<div class="skills-grid">
  {% for skill in site.data.skills %}
  <div class="tile">
    <a href="{{ site.baseurl }}{{ skill.url }}">
      <picture>
        <source srcset="{{ skill.icons.large }}" media="(min-width: 1200px)">
        <source srcset="{{ skill.icons.medium }}" media="(min-width: 768px)">
        <img src="{{ skill.icons.small }}" alt="{{ skill.skill }}">
      </picture>
      <h3>{{ skill.skill }}</h3>
    </a>
  </div>
  {% endfor %}
</div>


