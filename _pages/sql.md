---
layout: single
title: "SQL Projects"
permalink: /skills/sql/
author_profile: true
---

## SQL Projects

Here are the projects where I used SQL:

<div class="skills-grid">
  {% for project in site.data.projects %}
    {% if project.skills contains "SQL" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
