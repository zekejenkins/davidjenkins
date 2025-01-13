---
layout: single
title: "Data Visualization Projects"
permalink: /skills/visualization/
author_profile: true
---

## Python Projects

Here are the projects where I used Python:

<div class="skills-grid">
  {% for project in site.data.projects %}
  {% if project.skills contains "Visualization" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
