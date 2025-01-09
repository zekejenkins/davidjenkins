---
layout: single
title: "AutoHotkey Projects"
permalink: /skills/autohotkey/
author_profile: true
---

## AutoHotkey Projects

Here are the projects where I used AutoHotkey:

<div class="skills-grid">
  {% for project in site.data.projects %}
    {% if project.skills contains "AutoHotkey" %}
      <div class="tile">
        <a href="{{ project.url }}">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
