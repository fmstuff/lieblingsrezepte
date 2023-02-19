---
layout: page.njk
---

<h3 class="title is-3">Low Carb Rezepte</h3>

<div class="columns is-multiline">
{%- for rezept in collections.lowcarb -%}
  <div class="column is-one-third">
    <a href="{{ rezept.url | url }}">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img class="teaser" src="{{ rezept.url | url }}{{ rezept.data.picture }}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <h5 class="subtitle is-5">{{ rezept.data.title }}</h5>
        </div>
      </div>
    </a>
  </div>
{%- endfor -%}
</div><!-- columns -->