---
layout: page
title: "Molecular Dynamics"
modified:
categories: articles
excerpt: How do molecules interact with each other in gases, liquids and solids?
tags: []
image:
  feature:
date: 2016-12-21T08:08:50-04:00
---

Ice, water, and water vapour are three very different substance. Ice is a crystal, it is hard and will shatter if you hit it hard enough. Water is a liquid, it flows and forms droplets. Water vapour is a gas, which is dispersed throughout the atmosphere. Yet for all this varied behaviour, we know that these three substance are actually made of the same thing --- water molecules. These are tiny particles which are constantly whizzing around and interacting with each other. Out of the interaction of trillions and trillions of these molecules emerges the behaviour of water we see in everyday life. 

How can we understand this behaviour? A simple thing we could try is simulating the motion of a bunch of molecules, watching to see what happens. This approach is known as *molecular dynamics*. It is hard to compute the behaviour of more than a few hundred molecules at a time --- the problem becomes to computationally intensive. Nevertheless, this gives us a picture of how molecules interact with each other microscopically. 

## [The Lennard-Jones Potential](/scripts/NBody/LennardJones.html)

When two molecules are near each other, they exert forces on each other. A simple model to describe this it the [Lennard-Jones Potential](https://en.wikipedia.org/wiki/Lennard-Jones_potential):

$$V(r) = A\left(\frac{r^{12}}{r_0^{12}-\frac{r^{6}{r_0^{6}\right).$$

This potential causes the molecules to attract to each other at medium distances, but the molecules repel if they get to close.

To play around with the gas, I've added three sliders:

* **Drift**: This adds some random movement to each molecule, increasing the energy and efectively heating the system.

* **Drag**: This causes the molecules to slow down and loose energy. It has the opposite effect of drift, cooling the system.

* **Central**: If left alone, the molecules have a tendency to spread out and move away from the centre of the system. To prevent the molecules from moving too far, we can add an attractive force which pushes all of the molecules toward the centre. The stronger this force, the more strongly trapped the molecules are. We can think of this force as similar to pressure.






[Here is a gas simulator. It uses a Lennard-Jones potential to simulate the dynamics of atoms.](/scripts/NBody/LennardJones.html)

[Here is an ion simulator.](/scripts/NBody/Ions.html)

[Here is a nuclei simulations, assuming that nuclei are classical and two-dimensional.](/scripts/NBody/Nuclear.html)