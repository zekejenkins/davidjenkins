---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
sidebar:
  nav: "main"
---


<div class="portfolio-grid">
  {% for project in site.data.projects %}
  <div class="tile">
    <a href="{{ project.url }}" target="_blank">
      <img src="{{ project.image }}" alt="{{ project.title }}">
      <div class="tile-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>

