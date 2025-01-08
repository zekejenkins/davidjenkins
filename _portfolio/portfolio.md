---
layout: page
title: Portfolio
permalink: /portfolio/
author_profile: true
sidebar:
  nav: "portfolio"
---


<div class="portfolio-grid">
  {% for project in site.data.projects %}
  <div class="tile">
    <a href="{{ project.url }}" target="_blank">
      <img src="{{ project.image }}" alt="{{ project.title }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </a>
  </div>
  {% endfor %}
</div>
