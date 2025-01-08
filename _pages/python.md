---
layout: page
title: "Python Projects"
permalink: skills/python/
---

## Python Projects

Here are the projects where I used Python:

<div class="project-list">
  {% for project in site.data.projects %}
    {% if project.skills contains "Python" %}
      <div class="project-item">
        <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
        <p><strong>Skills:</strong> {{ project.skills | join: ", " }}</p>
      </div>
    {% endif %}
  {% endfor %}
</div>
