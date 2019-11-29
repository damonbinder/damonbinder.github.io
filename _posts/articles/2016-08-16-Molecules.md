---
layout: page
title: "Molecular Dynamics"
modified:
categories: articles
excerpt: How do molecules interact with each other in gases, liquids and solids?
tags: []
image:
feature:
---

Ice, water, and water vapour are three very different substance. Ice is a crystal, it is hard and will shatter if you hit it hard enough. Water is a liquid, it flows and forms droplets. Water vapour is a gas, which is dispersed throughout the atmosphere. Yet for all this varied behaviour, we know that these three substance are actually made of the same thing --- water molecules. These are tiny particles which are constantly whizzing around and interacting with each other. Out of the interaction of trillions and trillions of these molecules emerges the behaviour of water we see in everyday life. 

How can we understand this behaviour? A simple thing we could try is simulating the motion of a bunch of molecules, watching to see what happens. This approach is known as *molecular dynamics*. It is hard to compute the behaviour of more than a few hundred molecules at a time --- the problem becomes to computationally intensive. Nevertheless, this gives us a picture of how molecules interact with each other microscopically. I have made three simulations, which you can play around with here:

* [*The Hard-Core Gas*](/scripts/NBody/BilliardBalls.html)
* [*The  Lennard-Jones Potential*](/scripts/NBody/LennardJones.html)
* [*Salts*](/scripts/NBody/Ions.html)


## The [*Hard-Core Gas*](/scripts/NBody/BilliardBalls.html)

When two molecules are near each other, they exert forces on each other. The simplest model we could use is to imagine that the molecules act like billiard balls in the real world --- they bounce off each other. You can play around with this model [here](/scripts/NBody/BilliardBalls.html). This model is known as the hard-core gas

To play around with the gas, I've added two sliders:

* **Drift**: This adds some random movement to each molecule, increasing the energy and effectively heating the system.

* **Drag**: This causes the molecules to slow down and loose energy. It has the opposite effect of drift, cooling the system.


## The [*Lennard-Jones Potential*](/scripts/NBody/LennardJones.html)

The previous model has behaviour that looks very much like a gas: molecules bounce off each other chaotically, repelling if they get too close. In the real world, molecules don't always repel. Various forces, such as the Van der Waals force, can lead to attraction. A simple model to describe this it the [Lennard-Jones Potential](https://en.wikipedia.org/wiki/Lennard-Jones_potential):

$$V(r) = A\left(\frac{r^{12}}{r_0^{12}}-\frac{r^{6}}{r_0^{6}}\right).$$

This potential causes the molecules to attract to each other at medium distances, but the molecules repel if they get to close.

You can play around with the model [here](/scripts/NBody/LennardJones.html), and compare its behaviour to the simpler hard-core gas. With the drift and drag sliders, we can heat and cool the gas to explore its behaviour in different regimes.

When the gas of particles is hot, the particles bounce around chaotically, just like in a real gas. If we add some drag however, the particles slow down and begin to interact with each other. They begin to cling together in clusters, like droplets of a liquid. Further cooling the particles and we find that they stop moving altogether. The particles arrange themselves into a crystal --- a hexagonal lattice.


## Simulating [*Salts*](/scripts/NBody/Ions.html)
Salt, NaCl, is made of positively charged sodium ions interacting with negatively charged chlorine ions. According to Coulomb's law, like ions repel and opposite ions attract. Just like the molecules in the previous section, ions will repel each other if they get too close. I have made a simulation of this, which you can play around with [here](/scripts/NBody/Ions.html). 

Just like the Lennard-Jones potential, we will get gas, liquid, and solid-like behaviour depending on the energy of the particles. Because there are two types of ions, we can get more intricate clusters of ions forming --- long chains and circles, square lattices, trees. Eventually the ions will settle down into a square lattice, akin to the cubic lattice we observe in real salt!