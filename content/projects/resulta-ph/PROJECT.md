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

Resulta.ph is an interactive election result visualizer for Philippine election results, 
archiving historical election results directly from COMELEC from 2019 to 2025. [^1] 
Results for all positions, from national down to municipal and city-level races, are available,
with interactive drilldown and map visualization functionality to filter results by location.

The app is built on a FastAPI frontend that queries a static SQLite database, to support
the dynamic complex queries that are done to visualize the results. The frontend is built
using React, using React Router v7 in Framework mode for routing and serving. The map is
powered by D3.js, using GeoJSON files extracted from [the shapefile for Philippine administrative boundaries](https://data.humdata.org/dataset/cod-ab-phl).

## Design story

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
that database fast. This took at least 18 months to make. I've had parsed election results
sitting in my internal drive since at least the start of 2024, and it took
a few months of on/off work coupled with a few weeks of more focused work to get
it to a state that works.

## Implementation notes

**Data source.** All data is sourced directly from the raw COMELEC JSON files for 
locations, certificates of canvass, and precinct-level election returns. Since
the data format is custom-fit by the election provider, it took some parsing to figure
out where the results actually were. Datafiles for the 2019 and 2022 elections
had the same format, as both elections were powered by Smartmatic's second-generation
VCMs; from 2025 onward, raw election data has a different format, with the switch
to Miru Systems.

The JSON files were parsed into a SQL database that stores all results in a flat format
(per precinct, race, and candidate). Location IDs are standardized to be the same as 
the PSGC ID from the year that the election was held.

[^1]: Election results prior to 2019 can be imported, I'd just need to find the original datasource.