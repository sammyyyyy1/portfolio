# Portfolio Redesign Design

Date: 2026-05-23
Project: `portfolio`
Status: Approved design draft

## Context

This project is a Next.js 16 single-page personal portfolio. The current homepage is assembled in `src/app/page.tsx` from section components under `src/components/sections/*`, with content centralized in `src/lib/data.ts`.

Current structure:

- `Navbar`
- `Hero`
- `Experience`
- `Skills`
- `Projects`
- `Contact`

Current visual language is dark, glassy, and slightly product-landing-page oriented. Content is strong, but the presentation is more generic than personal.

## Goals

- Make the portfolio more visually distinctive and memorable.
- Keep the site as a single page.
- Deepen storytelling inside the page instead of adding separate routes.
- Emphasize personality without losing engineering credibility.
- Make projects and experience read like curated artifacts rather than resume blocks.
- Preserve responsive behavior and simple navigation.

## Non-Goals

- Adding a CMS, blog, or admin system.
- Converting the site into a multi-page portfolio.
- Introducing animation-heavy storytelling.
- Rewriting resume content or inventing new claims.
- Adding decorative visuals that overpower the content.

## Explored Directions

Three homepage directions were explored:

1. `Systems Console`
Technical, terminal-inspired, dark, infrastructure-forward.

2. `Editorial Case Study`
Warm, premium, narrative-led, with emphasis on reading flow.

3. `Dimensional Bento`
Modern, card-heavy, motion-friendly, more visual than narrative.

Selected direction: `Editorial Case Study`

Three tone variants were then explored within that direction:

1. `Personal Artifact`
Warm, authored, notebook-like, most personality.

2. `Technical Journal`
Editorial with stronger engineering logbook energy.

3. `Product Atelier`
More playful and product-design expressive.

Selected tone: `Personal Artifact`

## Chosen Direction

The redesign will be a single-page `Personal Artifact` portfolio.

The site should feel like a curated notebook from an engineer-builder: calm, thoughtful, warm, and technically credible. It should avoid the look of a SaaS landing page, a generic minimal portfolio, or a heavy-handed paper-texture concept.

The strongest content should be the centerpiece of the experience, especially selected work and experience. Skills should support the story rather than dominate it.

## Information Architecture

The site remains one page with a fixed header and anchor navigation.

Proposed reading order:

1. `Nav`
2. `Hero`
3. `Selected Work`
4. `Experience`
5. `Capabilities`
6. `Contact`

This intentionally elevates project storytelling above the current resume-first flow.

## Section Design

### Navigation

- Keep a slim fixed header.
- Prioritize name/wordmark and a restrained set of section jumps.
- Preserve a single prominent resume action.
- Visually frame the page rather than behaving like a product navbar.

### Hero

- Replace the current large generic headline with a more authored introduction.
- Introduce Samuel Zheng as a software engineer working across healthcare, security, semiconductors, and student-built products.
- Include 2-3 compact proof points or metrics near the opening view.
- Keep social links and resume access, but subordinate them to the written introduction.
- Use the hero to establish point of view, not just role/title.

### Selected Work

- Rename the conceptual role of the current `Projects` section to `Selected Work`.
- Make this the visual centerpiece of the page.
- Treat the featured items as editorial artifacts rather than equal-weight cards.
- For each featured project, include:
  - a short thesis
  - why it mattered
  - 2-3 strongest outcomes
  - compact technology tags
  - external link if available
- Keep the section scannable first, then deeper on continued reading.
- Maintain one-page structure by making project modules denser in-page instead of adding detail routes.

### Experience

- Keep chronology, but reduce the resume-timeline feeling.
- Present each role as a short editorial snapshot.
- For each role, include:
  - company, role, period, location
  - concise context sentence
  - impact bullets
  - one highlighted metric or technical result where available
- Ensure the section reinforces systems depth and scope of work without duplicating project storytelling.

### Capabilities

- Reframe the current `Skills` section as `Capabilities`.
- Reduce visual weight compared to selected work and experience.
- Organize content into readable groups, but avoid a dominant badge wall.
- Position this section as confirmation of range rather than the main attraction.

### Contact

- End with a personal closing note rather than a generic CTA.
- Keep email prominent.
- Keep GitHub and LinkedIn nearby.
- Maintain a direct, warm invitation to continue the conversation.

## Visual Language

### Tone

The page should feel:

- thoughtful
- technical
- calm
- curated
- personal

It should not feel:

- corporate
- SaaS-like
- hacker-terminal themed
- overdesigned
- generically minimalist

### Typography

- Use a serif display voice for major headings and section intros.
- Use a clean sans-serif for body text, labels, nav, and metadata.
- Let the serif carry warmth and personality while the sans keeps the page modern and readable.

### Color

Recommended palette direction:

- warm ivory or soft stone background
- deep charcoal text
- muted bronze, rust, or ink-blue accents
- restrained highlight color for interactive and emphasis states

This replaces the current cool dark monochrome as the primary identity.

### Surfaces

- Prefer clean page backgrounds and framed editorial panels.
- Use varied surfaces sparingly: notes, artifact callouts, inset panels, section dividers.
- Avoid repeating the same glass-card treatment everywhere.

### Motion

- Keep motion subtle and content-led.
- Prefer gentle fades, small vertical reveals, and restrained hover movement.
- Avoid floaty or flashy transitions.

### Decoration

- Do not depend on blobs or decorative gradients as the main identity.
- Let layout rhythm, typography, dividers, and note-like accents carry the personality.
- If visual artifacts are added later, favor diagrams, annotations, or project fragments over generic decoration.

## Content Flow

The reading rhythm should alternate between:

- short narrative intros
- denser proof blocks
- quieter breathing space

The page should reward both quick scanning and deeper reading.

`Selected Work` should be the most compelling section for a first-time visitor. `Experience` should reinforce credibility and breadth. `Capabilities` should confirm range after the story is already established.

## Mobile Behavior

- Preserve the editorial rhythm on mobile.
- Featured work should stack into strong vertical story modules.
- Headings and metrics must remain prominent.
- Spacing should tighten without collapsing into generic card stacks.
- The fixed nav should remain lightweight and unobtrusive.

## Implementation Shape

The redesign should stay close to the current architecture.

### App Structure

- Keep the single-page assembly model in `src/app/page.tsx`.
- Keep section components in `src/components/sections/*`.
- Rework component internals and section emphasis rather than changing the route model.

### Section Components

- `hero.tsx`: authored intro with proof points and warmer framing
- `projects.tsx`: evolves into `Selected Work` in tone and layout
- `experience.tsx`: editorial snapshots instead of a resume-first timeline feel
- `skills.tsx`: quieter capabilities section
- `contact.tsx`: personal closing note

### Data Model

`src/lib/data.ts` should expand to support richer story blocks.

Additional project fields:

- `thesis`
- `impactMetric`
- `whyItMattered`
- `featured`
- optional artifact-style notes or callouts

Additional experience fields:

- optional `impactMetric`
- optional short editorial context text separate from bullets

This should remain a small, local content model rather than becoming a CMS.

### Styling Strategy

Most of the redesign should come from:

- updated design tokens and typography in `src/app/globals.css`
- more intentional section-specific layouts
- fewer generic card patterns
- a small set of reusable editorial motifs

### Assets

- The redesign should not rely on heavy imagery.
- It should work through typography, spacing, hierarchy, and a few subtle accent treatments.
- Optional future assets should support featured work, not fill empty space.

## Interaction Model

- Preserve fixed nav and smooth anchor jumps.
- Keep reveal-on-scroll motion restrained.
- Preserve accessible hover and focus behavior.
- Keep links straightforward: resume, project destinations, GitHub, LinkedIn, email.
- Do not introduce carousels, tabs, or interaction-heavy narrative devices.

## Verification

The implementation should verify:

- desktop reading rhythm
- tablet spacing and section transitions
- mobile readability and project-story hierarchy
- cohesive serif/sans pairing
- restrained accent color use
- consistent but not repetitive section treatments
- preserved anchor navigation and link behavior
- graceful rendering when optional content is missing

## Risks and Guardrails

- Too much warmth or decoration could undercut engineering credibility.
- Too much restraint could collapse back into a generic portfolio.
- Overemphasis on skills badges would weaken the chosen narrative direction.
- Overuse of motion would conflict with the calm editorial tone.

Guardrail: every section should feel authored, but the work itself must stay the primary focus.

## Recommendation Summary

Implement a warm, editorial, single-page portfolio that feels like a curated personal artifact. Deepen the current one-page structure instead of adding routes. Make selected work the centerpiece, reshape experience into concise field notes, quiet the capabilities section, and use typography and reading rhythm as the main source of visual distinction.
