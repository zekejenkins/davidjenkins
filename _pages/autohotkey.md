---
layout: single
title: "Autohotkey Projects"
permalink: /skills/autohotkey/
author_profile: true
---

## Autohotkey Projects

Here are the projects where I used autohotkey:

<section class="project-list">
  {% for project in site.data.projects %}
    {% if project.skills contains "AutoHotkey" %}
      <article class="project-item">
        <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
        <p><strong>Skills:</strong> 
          {% for skill in project.skills %}
            <a href="/skills/{{ skill | downcase }}/">{{ skill }}</a>{% if forloop.last == false %}, {% endif %}
          {% endfor %}
        </p>
      </article>
    {% endif %}
  {% endfor %}
</section>
