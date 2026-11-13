# Topp Roots Lab website

The source for <https://topp-roots-lab.github.io>. The site is built with [Jekyll](https://jekyllrb.com) and
hosted on GitHub Pages: every commit to the `main` branch is rebuilt and published automatically within a
minute or two. Nothing needs to be installed to make routine updates — edit a file on github.com (pencil icon),
commit, done.

## Routine updates

Most content lives in plain-text lists in the `_data/` folder. Each file starts with a short note on its fields.

| To change…                         | Edit this file                                  |
| ---------------------------------- | ----------------------------------------------- |
| Add a news item                    | `_data/news.yml` (add a block at the top)       |
| Add a publication                  | `_data/publications.yml` (newest first)         |
| Add or update a lab member         | `_data/members.yml`                             |
| Move someone to former members     | cut from `_data/members.yml`, add to `_data/alumni.yml` |
| Add a tool or a dataset            | `_data/tools.yml`, `_data/datasets.yml`         |
| Update grants or research areas    | `_data/grants.yml`, `_data/research_areas.yml`  |
| Add an X-ray animation             | `_data/videos.yml`                              |
| Change the menu                    | `_data/navigation.yml`                          |
| Change contact details, site title | `_config.yml`                                   |

### Add a lab member

1. Put a square headshot (about 640 × 640 px) in `images/headshots/`, e.g. `jane-doe.png`. This is optional;
   people without a photo are shown with their initials.
2. Add a block to `_data/members.yml`:

   ```yaml
   - name: Jane Doe
     role: Postdoctoral Associate
     joined: 2026
     blurb: Root imaging and image analysis.
     photo: jane-doe.png
   ```

3. For a full profile page, copy `profile/_template.md` to `profile/jane-doe.md`, fill it in, and add
   `link: /profile/jane-doe.html` and `link_label: Bio` to the block above.

### Add a publication

Add a block to `_data/publications.yml`. Keep the list ordered newest first; the Papers page groups entries by `year`.

```yaml
- title: Title of the paper
  authors: Doe J, Topp CN
  year: 2026
  venue: Journal name
  url: https://doi.org/10.xxxx/xxxxx
  doi: 10.xxxx/xxxxx
  preprint: true        # only for pre-prints; leave the line out otherwise
```

### Add a news item

```yaml
- title: Jane presents at ASPB 2026!
  date: July 2026
  images:
    - jane-aspb-2026.jpg     # file in images/
```

YAML is fussy about indentation (use spaces, not tabs) and about colons: if a text value contains `: `,
wrap the whole value in double quotes.

## Pages

| Page            | File                | Notes                                          |
| --------------- | ------------------- | ---------------------------------------------- |
| Home            | `index.html`        |                                                |
| News            | `news.html`         | list comes from `_data/news.yml`               |
| Research        | `research.html`     |                                                |
| X-ray CT / XRM  | `XRT.html`, `XRM.html` | text is in the page, videos in `_data/videos.yml` |
| Papers          | `publications.html` | list comes from `_data/publications.yml`       |
| Tools, Data     | `tools.html`, `data.html` |                                          |
| Team            | `lab.html`          | lists come from `_data/`                       |
| Join            | `join.html`         |                                                |
| Profiles        | `profile/*.md`      | written in Markdown                            |

Shared pieces: `_layouts/` (page frames), `_includes/` (header, footer, cards), `assets/css/main.css`
(all styling — colours and fonts are variables at the top of the file), `assets/js/site.js`.

## Preview the site on your computer (optional)

Needs Ruby 3.x.

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. The page reloads as you edit.

## Credits

© Christopher Topp. Site maintained by the lab.
