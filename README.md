isomorphic-ui-benchmarks
========================================

This repo includes multiple benchmarks for various UI libraries. Each benchmark is designed to measure rendering performance (on the server and in the browser) and the time that it takes to update the DOM (client-side only).

# Current results

Below are the results of a run on March 3, 2017

Environment:

- Node.js v7.5.0
- MacBook Pro (15-inch, 2016)
- Processor: 2.9 GHz Intel Core i7
- Memory: 16 GB 2133 MHz LPDDR3
- macOS Sierra: 10.12.3 (16D32)
- Google Chrome Version 56.0.2924.87 (64-bit)

## Server-side

```
Warming up...

Warmup complete.

Running "color-picker"...

Running benchmark "inferno"...

inferno x 2,053 ops/sec ±0.69% (86 runs sampled)

Running benchmark "marko"...

marko x 5,088 ops/sec ±6.54% (59 runs sampled)

Running benchmark "preact"...

preact x 3,252 ops/sec ±0.84% (88 runs sampled)

Running benchmark "react"...

react x 228 ops/sec ±2.84% (73 runs sampled)

Running benchmark "svelte"...

svelte x 14,911 ops/sec ±2.25% (80 runs sampled)

Running benchmark "vue"...

vue x 1,297 ops/sec ±3.68% (76 runs sampled)

Fastest is svelte

--------------


Warming up...

Warmup complete.

Running "search-results"...

Running benchmark "inferno"...

inferno x 408 ops/sec ±0.64% (84 runs sampled)

Running benchmark "marko"...

marko x 1,993 ops/sec ±5.77% (62 runs sampled)

Running benchmark "preact"...

preact x 399 ops/sec ±0.94% (82 runs sampled)

Running benchmark "react"...

react x 37.00 ops/sec ±2.35% (48 runs sampled)

Running benchmark "svelte"...

svelte x 5,710 ops/sec ±3.54% (76 runs sampled)

Running benchmark "vue"...

vue x 166 ops/sec ±4.39% (70 runs sampled)

Fastest is svelte

--------------
```

# Client-side

## Search results

### Google Chrome

```
Warming up...
Warmup complete.
Running "search-results"...
Running benchmark "inferno"...
inferno x 165 ops/sec ±2.39% (55 runs sampled)
Running benchmark "marko"...
marko x 211 ops/sec ±1.56% (56 runs sampled)
Running benchmark "preact"...
preact x 188 ops/sec ±1.59% (56 runs sampled)
Running benchmark "react"...
react x 158 ops/sec ±2.16% (55 runs sampled)
Running benchmark "svelte"...
svelte x 332 ops/sec ±1.11% (57 runs sampled)
Fastest is svelte
```

## Color picker

### Google Chrome

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "inferno"...
inferno x 2,766 ops/sec ±1.19% (59 runs sampled)
Running benchmark "marko"...
marko x 4,057 ops/sec ±2.76% (55 runs sampled)
Running benchmark "preact"...
preact x 2,719 ops/sec ±0.90% (60 runs sampled)
Running benchmark "react"...
react x 2,171 ops/sec ±1.66% (56 runs sampled)
Running benchmark "svelte"...
svelte x 7,449 ops/sec ±1.64% (40 runs sampled)
Fastest is svelte
```
# Additional details

## Included libraries

The following UI libraries are currently included:

- [inferno](https://github.com/infernojs/inferno)
- [marko](https://github.com/marko-js/marko)
- [preact](https://github.com/developit/preact)
- [react](https://github.com/facebook/react)
- [vue](https://github.com/vuejs/vue)
- [svelte](https://github.com/sveltejs/svelte)

## Included benchmarks

This repo currently includes the following benchmarks

### Search Results

This benchmark measures the time it takes to render pages of search results. Each page includes 100 search result items. Every iteration renders an entirely new set of search results. As a result of rendering new search results for every cycle, a significant number of DOM nodes must be updated.

### Color Picker

This benchmark measures the time it takes to cycle through a selected color. The selected color index changes every cycle. When the selected color index changes two things happen:

- The new selected color is highlighted
- The old selected color is unhighlighted
- The selected color is shown at the end

Compared to the search results benchmark, there are a relatively small number of changes to the DOM for every cycle.

# Running the benchmarks

## Install

```bash
git clone https://github.com/marko-js/isomorphic-ui-benchmarks.git
cd isomorphic-ui-benchmarks
npm install
npm run build # Build client-side JS bundles
```

## Run server-side benchmarks

```bash
npm run benchmarks
```

## Run client-side benchmarks

Start

```bash
npm start
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser and choose a benchmark to run.

# Contributions and Feedback

If you see any problems or have any suggestions please let us know. Every effort was made to be as fair and accurate as possible, but mistakes do happen. If you find a problem please open a Github issue to discuss.
