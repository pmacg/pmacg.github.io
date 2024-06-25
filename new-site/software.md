---
layout: page
title: Software
permalink: /software/
---

# Software

## STAG: Spectral Toolkit of Algorithms for Graphs
STAG is an open-source C++ and Python library for efficient spectral graph algorithms which I am developing with He Sun. The project is under active development and the [project website](https://staglibrary.io/) will be kept up to date with the latest status. To get started with using STAG, see the documentation. 

* [STAG C++](https://staglibrary.io/docs/cpp/index.html)
* [STAG Python](https://staglibrary.io/docs/python/)

The technical reports include a users guide and some example applications.

## Local Clustering
The STAG library provides an easy-to-use implementation of the ACL local graph clustering algorithm. In our paper "Local Algorithms for Finding Densely Connected Clusters", we introduce a variant of the ACL algorithm which finds clusters in a graph with many edges between them. 

The [web-app here](https://staglibrary.io/clustering-demo.html) is implemented with STAG and gives an interactive demonstration of our algorithm on the military disputes dataset.
The source code for the demo is available [here](https://github.com/pmacg/mid-clustering). 

![Image of the local clustering web-app.](/assets/images/conflict_webapp.png){:width="500px" style="display:block; margin-left: auto; margin-right: auto"}
