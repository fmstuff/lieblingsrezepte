---
layout: page.njk
---

# Lieblingsrezepte 🍽 🍷

Hier findest du eine Sammlung unserer Lieblingsrezepte - zumindest diejenigen,
die wir auch selber gerne mal kochen 😉

## Rezepte

<ul>
{%- for rezept in collections.rezept -%}
  <li>
    <a href="{{ rezept.url }}">{{ rezept.data.title }}</a>
  </li>
{%- endfor -%}
</ul>

## Low Carb Rezepte

<ul>
{%- for rezept in collections.lowcarb -%}
  <li>
    <a href="{{ rezept.url }}">{{ rezept.data.title }}</a>
  </li>
{%- endfor -%}
</ul>