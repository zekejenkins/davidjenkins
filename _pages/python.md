---
layout: single
title: "Python Projects"
permalink: /skills/python/
author_profile: true
---

## Python Projects

Here are the projects where I used Python:

<section class="project-list">
  {% for project in site.data.projects %}
    {% if project.skills contains "Python" %}
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
