---
layout: single
title: "HTML Projects"
permalink: /skills/html/
author_profile: true
---

## HTML Projects

Here are the projects where I used html:

<div class="skills-grid">
  {% for project in site.data.projects %}
    {% if project.skills contains "html" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
