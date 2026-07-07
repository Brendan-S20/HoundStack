---
title: How to write a route so techs are not driving in circles
description: Route order is the biggest controllable cost in a scooping business. Here is how to build routes that hold up, from zone boundaries to the order you actually drive.
pubDate: 2026-07-06
relatedFeature:
  href: /features/scheduling-and-routes
  label: Scheduling and routes
---

Drive time is the tax on every yard you service. The scooping itself takes eight to twelve minutes for a typical residential visit. If the drive between stops averages ten, you are paying as much to move the truck as to do the work. Most operators feel this without measuring it, and the fix is not driving faster. It is writing better routes.

## Start with zones, not with clients

The most common mistake is building routes client by client: someone signs up, they get appended to whichever day feels light. Six months later Tuesday crosses town four times.

Draw zones first. Postal prefixes work well as boundaries because they follow how neighborhoods are actually laid out, and every new client lands in a zone before they land on a day. Then assign zones to days: Zone 1 on Monday, Zone 2 on Tuesday, and so on. A new signup in Zone 2 becomes a Tuesday client by default, not a negotiation.

Two rules make zones hold up:

- **Zones follow drive patterns, not straight lines on a map.** A river with one bridge makes two zones out of what looks like one neighborhood.
- **A zone that takes more than a day splits. A zone that takes less than half a day merges.** Review this quarterly, because your densest zone this year was probably thin last year.

## Order stops by the road, not the list

Within a day, the order you drive matters as much as which yards you drive. Sorting stops by street name or signup date produces the circling this post is named after. Sorting them by actual drive time between addresses is the whole game, and it is not something a human does well past about ten stops.

This is a solved problem for software. HoundStack's [route optimization](/features/scheduling-and-routes) reorders a full day against real drive time data in one click, and the difference between a hand ordered day and an optimized one is usually measured in a full stop or two of reclaimed time. If you are not using software for this, at minimum drive your route once in each direction and time both. Operators are regularly surprised which way wins.

## Respect the constraints that are real, ignore the ones that are not

Some ordering constraints are real: a gated community that only issues morning access, a client dog that has to be crated and the owner leaves at 3, a commercial property that wants service before the office opens. Honor those first and route around them.

Most other preferences are softer than they sound. "We like the Thursday visit" often means "we like a predictable day," and a client who moved from Thursday to Wednesday with a week of notice rarely notices for long. Do not let a soft preference cost you twenty minutes of driving every week forever. Explain the routing honestly. Clients who hear "this keeps your price where it is" mostly say yes.

## Protect the route once it is written

A good route decays one exception at a time. The defenses:

- **New clients slot into their zone's day.** If they demand a different day, that is a pricing conversation, not a free accommodation.
- **Skips do not reshuffle the day.** A locked gate gets a skip with a reason and the route continues. Chasing a makeup visit mid route costs more than the visit.
- **Blackout days move whole days, not individual stops.** A holiday should bump the schedule forward as a unit, which is exactly what [blackout dates with automatic bump forward](/features/scheduling-and-routes) do in HoundStack.

## The check that tells you it worked

Take one route, count its stops, and note the total time from first arrival to last departure. Divide the difference by the stop count. That per stop overhead number, minutes of drive per yard, is the single most honest measure of route quality. Write it down, change one thing, and measure again next week. Operators who track it tend to find their first route rewrite pays for the effort within the month.
