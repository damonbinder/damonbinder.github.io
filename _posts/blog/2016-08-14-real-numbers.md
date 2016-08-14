---
layout: post
title: "What are the Real Numbers?"
modified:
categories: blog
excerpt:
tags: []
image:
  feature:
date: 2016-08-14T08:08:50-04:00
---

Real numbers are used extensively in science. They seem to be intimately tied to the notion of measurement: whether we measure temperature, length, or amount money, we use numbers. So it has always surprised me that the traditional definitions of the real are complicated and difficult to relate to measurement.

Take the axiomatic approach for instance, which defines the reals as the complete totally ordered field. This introduces three different structures on \\( \mathbb{R} \\): addition, multiplication and order, along with numerous axioms. I have a couple of qualms with this definition. The first is the complexity - why do these set of structures and axioms define an object of such importance in mathematics and physics? The second is that many of the axioms are irrelevant for most purposes. When examining the topological properties of the reals for instance, how often do we truly need the multiplicative axioms (as opposed to some simple topological consequences of these axioms, such as denseness)?

My third issue is that our definition is quite difficult to relate real numbers to measurement. Again multiplication is the worst offender here. If we had a collection of weights, it is intuitive that they can be ordered, and that weights can be combined ("added"). But what does multiplying two weights mean? It is hard to say, and we reflect this with the units we use. Adding kilograms gives us kilograms, yet multiplying gives us Mg\\(^2\\). We can't combine nor order kg with Mg\\(^2\\). The technical way of saying this is there is no "canonical" isomorphism between our two copies of the reals.

I have written a paper exploring these issues. You can find it on the arxiv at https://arxiv.org/abs/1607.05997. The paper gets quite formal, since it presents a definition of the reals ab initio. Here I will give a less formal, but hopefully more understandable, overview of the paper.

## Measuring Stuff
How do we measure stuff? I'll start with a very naive approach, taken directly from my paper:

>Consider a collection of weights along with a balance scale. Placing weights \\(X\\) and \\(Y\\) on either sides of the scale, we find that the weight X always rises. This seems important, so we decide to introduce a symbol \\(<\\)  and write \\( X < Y\\) if \\(X\\) rises and \\(Y\\) falls when both are placed on a scale. Obviously, if \\(X < Y\\) we know that \\(Y < X\\) does not hold. If neither \\(X < Y\\) and \\(Y < X\\), then the scale we have cannot distinguish the two weights, and so we decide to say that they are copies of the same weight, \\(X = Y\\).

Comparing more weights, we notice a pattern; if \\(X < Y\\) and \\(Y < Z\\) we find that \\(X < Z\\). So our weights are in fact totally ordered.

We then discover that we can glue weights together, treating them as a single weight. So given weights \\(X\\) and \\(Y\\), we write \\(X + Y\\) to mean the weight gained by sticking \\(X\\) and \\(Y\\) together. We notice that the order we stick our weights together does not matter:
\\[X + Y = Y + X,\ \ \ \ (X + Y ) + Z = X + (Y + Z).\\]
We also find that if \\(Y < Z\\), then gluing a weight \\(X\\) on to both these weights will preserve this fact
\\[Y < Z \implies Y + X < Z + X\\].
By considering empirical properties of weights, we have discovered many facts about them. Pithily, we can say that our collection of weights forms a totally ordered commutative semigroup, with the above equation governing the interaction of the two structures.
