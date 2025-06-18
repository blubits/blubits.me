---
title: Resulta.ph
slug: resulta-ph
date-created: 2024-01-01
date-updated: 2025-06-17
image: "resulta.png"
preview_icon: "lucide:vote"
link: https://resulta.blubits.me
preview_icon_background: "bg-gradient-to-br from-white to-gray-400"
preview_icon_foreground: "text-black"
short-description: "Visualizing Philippine election results."
tags:
    - python
    - react
    - react-router
    - javascript
    - d3.js
---

As someone who's been interested in politics for long, I've always wanted to create
a website that visualizes election information, in a way that standard news sites
can't seem to replicate. A website like that would be a valuable resource for political
scientists, election analysts, campaign teams, and political parties to analyze election
trends visually.

I had three goals in mind:

1. Store election results for all races, across the Philippines, no matter how minor;
2. Get results for a certain race across multiple elections, not just one like many news websites have; and
3. View results drilled down by location.

Doing such a website is challenging. You have to navigate gigabytes of raw
information about election results, parse them intto a huge database to enable
fast data visualization, and then code up an API with a frontend that can query 
that database fast. This took *years* to make. I've had parsed election results
sitting in my internal drive since at least the start of 2024, and it took
a few months of on/off work coupled with a few weeks of more focused work to get
it to a state that works.

