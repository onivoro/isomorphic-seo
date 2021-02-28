# isomorphic-seo

## Terms

- SIILA/siila: shareable and idependently identifiable logical area
- Magazine: pretending it's an official W3C term for single-depth nesting of `article` tags wherein the top-level `<article>`'s only content consists of the child articles as direct descendants
- MAG: magazine

## Guidelines

### Markup

- Do use an `article` for every SIILA
- Do nest `article` tags for parent-children scenarios if and only if the nested `article` tags are intended to be SIILAs as well
- Do need exceed depth of 2
```
<article class="magazine all-browsers">
  <h1>Most Popular Browsers</h1>
  <article class="browser">
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser</p>
  </article>
  <article class="browser">
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser</p>
  </article>
  <article class="browser">
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft</p>
  </article>
  <footer>what can go here?</footer>
</article>
```
