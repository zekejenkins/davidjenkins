---
layout: single
title: "Excel Projects"
permalink: /skills/excel/
author_profile: true
---

## Excel Projects

Here are the projects where I used Excel:

<div class="skills-grid">
  {% for project in site.data.projects %}
    {% if project.skills contains "Excel" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
