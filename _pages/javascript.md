---
layout: single
title: "Javascript Projects"
permalink: /skills/javascript/
author_profile: true
---

## Javascript Projects

Here are the projects where I used javascript:

<div class="skills-grid">
  {% for project in site.data.projects %}
    {% if project.skills contains "javascript" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
