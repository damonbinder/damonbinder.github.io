---
layout: page
title: "2D Ising Model"
modified:
categories: articles
excerpt:
tags: []
image:
  feature:
date: 2016-08-16T08:08:50-04:00
---

test writing

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>


<div>
	<label>Temperature: </label><span id="tempdisplay"></span><br><input style="width:400px;" type="range" name="temperature" id="temperature" min="0" max="2" value="1" step="0.001"><br>
	<label>Magnetism: </label><span id="magdisplay"></span><br><input style="width:400px;" type="range" name="magnetism" id="magnetism" min="-3" max="3" value="0" step="0.01"><br>
</div>

<script type="text/javascript" src="/scripts/boltzmann.js"></script>