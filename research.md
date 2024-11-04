---
layout: page
title: Research
permalink: /research/
---

# Research

My overall research goal is **to develop fast, effective, theoretically-grounded algorithms to power data science applications**.
At the moment, my focus is on improving algorithms for clustering, similarity search, and numerical linear algebra.

## Highlighted Projects

<div class="row cards vertical-align">
    <div class="col-md-3 card-image">
        <img src="/assets/images/sc2.png"/>
        <a href="https://github.com/pmacg/fast-spectral-clustering" class="label label-success big-button">Fast Spectral Clustering Code</a>
    </div>
    <div class="col-md-9 card-main">
        <h3>Improved Spectral Clustering</h3>
        <p>Spectral clustering has been used for over two decades for clustering graphs and other data. Unfortunately, it has suffered from some scalability issues which may have limited its adoption in practice. It also had limited theoretical guarantees until recently.</p>
        <p>In my recent work, I have (i) improved the theoretical analysis of spectral clustering and (ii) provided improved algorithms which allow spectral clustering to scale to large datasets with large numbers of clusters.</p>

        <p> [1] Macgregor, Peter, and He Sun. "A tighter analysis of spectral clustering, and beyond." <emph>International Conference on Machine Learning.</emph> PMLR, 2022.</p>
        <p> [2] Macgregor, Peter, and He Sun. "Fast approximation of similarity graphs with kernel density estimation." <emph>36th Advances in Neural Information Processing Systems (NeurIPS 2024).</emph></p>
        <p> [3] Macgregor, Peter. "Fast and simple spectral clustering in theory and practice." <emph>36th Advances in Neural Information Processing Systems (NeurIPS 2024).</emph></p>
    </div>
</div>

<div class="row cards vertical-align">
    <div class="col-md-3 card-image">
        <img src="/assets/images/staglogo.png"/>
        <a href="https://staglibrary.io/" class="label label-success big-button">STAG Library Website</a>
    </div>
    <div class="col-md-9 card-main">
        <h3>STAG Library</h3>
        <p>The Spectral Toolkit of Algorithms for Graphs (STAG) library is a C++ and Python library providing an easy-to-use implementation of several recently developed algorithms for graph and data analysis.</p>
        <p>As well as generic methods for constructing and working with graphs, STAG provides implementations of local graph clustering and spectral clustering, locality-sensitive hashing (LSH), and kernel density estimation (KDE).</p>
        <p>For more information on how to use STAG and to see some of its functionality, please refer to the technical reports available on the STAG website.</p>
    </div>
</div>

## All Publications

<div markdown="0">
{%- include all-publications.html -%}
</div>

