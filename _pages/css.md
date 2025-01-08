---
layout: single
title: "CSS Projects"
permalink: /skills/css/
author_profile: true
---

## CSS Projects

Here are the projects where I used css:

<div class="skills-grid">
  {% for project in site.data.projects %}
    {% if project.skills contains "CSS" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
