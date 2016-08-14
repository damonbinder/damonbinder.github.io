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

I have written a paper exploring these issues. You can find it on the arxiv at <https://arxiv.org/abs/1607.05997>. The paper gets quite formal, since it presents a definition of the reals ab initio. Here I will give a less formal, but hopefully more understandable, overview of the paper. Of course, all the details can be found in the paper.

## Measuring Stuff
How do we measure stuff? I'll start with a very naive approach, taken directly from my paper:

>Consider a collection of weights along with a balance scale. Placing weights \\(X\\) and \\(Y\\) 
>on either sides of the scale, we find that the weight X always rises. This seems important, 
>so we decide to introduce a symbol \\(<\\)  and write \\( X < Y\\) if \\(X\\) rises and \\(Y\\)
>falls when both are placed on a scale. Obviously, if \\(X < Y\\) we know that \\(Y < X\\) does 
>not hold. If neither \\(X < Y\\) and \\(Y < X\\), then the scale we have cannot distinguish the 
>two weights, and so we decide to say that they are copies of the same weight, \\(X = Y\\).
>
>Comparing more weights, we notice a pattern; if \\(X < Y\\) and \\(Y < Z\\) we find that \\(X < Z\\).
>So our weights are in fact totally ordered.
>
>We then discover that we can glue weights together, treating them as a single weight. So given weights
> \\(X\\) and \\(Y\\), we write \\(X + Y\\) to mean the weight gained by sticking \\(X\\) and \\(Y\\)
> together. We notice that the order we stick our weights together does not matter:
>\\[X + Y = Y + X,\ \ \ \ (X + Y ) + Z = X + (Y + Z).\\]
>We also find that if \\(Y < Z\\), then gluing a weight \\(X\\) on to both these weights will preserve 
>this fact
>\\[Y < Z \implies Y + X < Z + X.\\]

We could repeat the same exercise with other objects. Say for instance we had sticks, we could order them based off length and "add" them by placing them end to end. Or we could consider timing events, buying items or flipping coins. Each of these have some sort of order (most generally a preorder) and some kind of binary operation (most generally a semigroup). At some point I may write a piece about the importance of preorders and semigroups, but for now we simply note that they appear in many different contexts. Even sets come with these - they have an order defined by subset inclusion and a binary operation defined by union.

The idea behind measurement is that it is a homomorphism from a preordered semigroup to a totally ordered semigroup. This is the abstract way of saying that measurement is a way of totally ordering sets, compatible with the preexisting order and semigroup structures. To understand the role of the real numbers, we need to understand where they fit into the bigger picture of totally ordered semigroups. 

We now state the axioms for a totally ordered semigroup. It is a set \\(S\\) with a binary relation \\(<\\) and a law of composition so that for every \\(x,y,z\in S\\),

1. If \\(x < y \\) and \\(y < z \\), then \\(x < z \\).

2. Exactly one of the following holds: \\(x < y\\) or \\(x = y\\) or \\(y < x\\)

3. \\((xy)z=x(yz)\\)

4. If \\(x < y\\), then \\(xz < yz\\) and \\(zx < zy\\)

We have dropped the requirement that addition is commutative; as well shall see, this can derived from other assumptions.

## Removing Infinities
There are all sorts of wild totally ordered semigroups. When we measure things however, we expect our results to be finite. What does this mean for a totally ordered semigroup?

The Archimedean property states that for any given positive \\(a,b\in S\\), no matter how big \\(b\\) is if you add \\(a\\) to itself enough times the sum \\(a+a+...+a\\) will eventually be larger than \\(b\\). This definition works well for groups, but we are interested in semigroups, which are more general. The basic problem is that whilst the Archimedean property prevents elements from being "infinitely" big, it doesn't prevent elements from being "infinitessimally" close. The notion of an anomalous pair, due to Alimov, is what is needed to capture this.

Given \\(x,y\in S\\) with \\(x>y\\), we say that \\(x\\) and \\(y\\) form an anomalous pair if for every \\(n\in\mathbb N\\), either
\\[x^n < y^{n=1}\text{  or  }y^n > y^{n+1}.\\]
We now define a non-anomalous semigroup to be a totally ordered semigroup with no anomalous pairs. All non-anomalous semigroups are Archimedean. However, the converse of this statement holds only for Archimedean groups. A very interesting result, due to Alimov, is that all non-anomalous semigroups are commutative. This is why we dropped the assumption of commutativity previously. 

## The Reals are the Biggest Non-Anomalous Semigroup
The main point of the paper is to show that the real numbers are the biggest non-anomalous semigroup. The notion of what it means to be "the biggest" non-anomalous semigroup is formally encoded in category theory as the notion of a terminal object. The main difficulty of the paper is showing that such a terminal object exists: all the gory details can be found in the paper.

Informally, what we show is that any non-anomalous semigroup \\(S\\) can be embedded into the reals. Furthermore this embedding is unique up to the choice of a single (non-identity) element in \\(S\\). This makes clear the relationship between the real numbers and measurement. If we are measuring stuff using some non-anomalous semigroup \\(S\\), then we can always embed \\(S\\) into \\(\mathbb{R}\\) in a unique way, and then record our measurements as real numbers. In other words, we always have the freedom to use real numbers when measuring things. 

## What about the Other Properties of the Reals?
The rest of the paper focusses on proving that the reals have all the properties we expect of them. First we show that the reals are dense, complete and form a group. In this context, a dense total order \\(T\\) is one so that for every \\(x,y\in T\\) with \\(x < y\\), there exists some \\(z\in T\\) with \\(x< z< y\\). In fact, the reals are the only dense and complete totally ordered group. This explains why there are so many different constructions of the reals, using everything from decimals to Cauchy sequences to continued fractions. The point is that if you start with a totally ordered group (usually \\(\mathbb Z\\)), you make it dense (usually by constructing \\(\mathbb Q\\)), and then you complete it, then you get the reals.

The origin of multiplication in this approach is more interesting. Basically, if we take any copy of the reals with some distinguished element \\(1\\), then there is a unique into any other copy of the reals with some distinguished element \\(p\\) via some mapping \\(\alpha_p\\). The idea is to define multiplication using this function, writing
\\[p\times q = \alpha_p(q).\\]
There is of course a lot of things to check to show this actually defines multiplication, and the details are all in the paper. Once we have done this, it is then straightforward to prove that the reals are the unique complete ordered field. So many properties of the reals we take for granted, such as subtraction, multiplication and completeness, follow from our more elementary definition of the reals as the biggest non-anomalous semigroup.