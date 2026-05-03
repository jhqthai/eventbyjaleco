# Chart Type Guide — 25 Types

## Accessibility Ratings
- **AAA** = Fully accessible, works for everyone
- **AA** = Accessible with small additions
- **B** = Requires alternatives for accessibility
- **C** = Complex, needs table fallback
- **D** = Poor accessibility — always provide table alternative

## Performance at Scale
- ⚡ Excellent = SVG, works at any count
- ✓ Good = Works with large datasets
- ⚠ Caution = Performance degrades, use canvas above threshold

---

## Quick Selection Table

| Goal | Chart Type | Accessibility | Rendering | Best Library |
|------|-----------|---------------|-----------|--------------|
| Trend over time | Line Chart | AAA | SVG | Chart.js, Recharts |
| Category comparison | Bar/Column Chart | AAA | SVG | Chart.js, Recharts |
| Part of whole | Donut/Pie Chart | AA | SVG | Chart.js, Nivo |
| Correlation | Scatter Plot | AA | SVG/Canvas | D3.js, Plotly |
| Geographic data | Choropleth Map | B | SVG/Canvas | D3.js, Mapbox |
| Flow / process | Sankey Diagram | B | SVG | D3.js, Highcharts |
| Hierarchical data | Treemap | B | SVG/Canvas | D3.js, Recharts |
| Part comparison | Stacked Bar 100% | AA | SVG | Chart.js, Recharts |
| Variance / gap | Waterfall Chart | AA | SVG | ApexCharts, Highcharts |
| Multi-attribute | Radar/Spider | B | SVG | Chart.js, Recharts |
| Financial OHLC | Candlestick | B | Canvas | Lightweight Charts, ApexCharts |
| Network/relationships | Network Graph | D | Canvas | D3.js, Vis.js, Cytoscape |
| Distribution | Box Plot | AA | SVG | Plotly, D3.js |
| KPI vs target | Bullet Chart | AAA | SVG | D3.js, Plotly |
| % progress | Waffle Chart | AA | CSS Grid | D3.js, Custom |
| Nested hierarchy | Sunburst Chart | C | SVG/Canvas | D3.js, ApexCharts |
| Drill-down metric | Decomposition Tree | AA | SVG | React-Flow, Power BI |
| 3D spatial | 3D Scatter | D | WebGL | Three.js, Deck.gl |
| Real-time live | Streaming Area | B | Canvas | D3.js, CanvasJS |
| NLP/text | Word Cloud | C | Canvas | D3-cloud, Highcharts |
| Process mining | Process Map | B | Canvas | React-Flow, Cytoscape |
| Cell comparison | Heat Map | AA | SVG/Canvas | D3.js, Recharts |
| Time distribution | Calendar Heat Map | AA | SVG | D3.js, Custom |
| Rank comparison | Bumps/Slope Chart | AA | SVG | D3.js, Recharts |
| Decomposition | Icicle Chart | B | SVG | D3.js |

---

## Detailed Specs

### 1. Line Chart (Trend)
- **When**: Continuous time-series; up to 5–6 lines
- **When NOT**: Fewer than 3 data points; non-chronological categories
- **Rendering**: SVG ≤500 points; Canvas beyond
- **Colors**: Each line distinct, 4.5:1 contrast. Fill area at 20% opacity for area variant
- **Accessibility**: AAA — provide data table fallback
- **Libraries**: Chart.js, Recharts, Highcharts

### 2. Bar/Column Chart (Comparison)
- **When**: Up to 15 discrete categories; ranking/comparison
- **Variants**: Grouped (≤4 series), Stacked (≤5 series), 100% Stacked
- **When NOT**: Time-series with many points (use line chart); too many categories
- **Colors**: Categorical — each bar distinct accessible color; highlight key bar with contrast
- **Accessibility**: AAA — always show labels
- **Libraries**: Chart.js, Recharts, ApexCharts

### 3. Donut/Pie Chart (Part of Whole)
- **When**: 2–5 slices only; parts must sum to 100%
- **When NOT**: More than 5 slices (use bar chart); values too similar
- **Rule**: Donut > Pie (better readability, center KPI space)
- **Colors**: Max 5 distinct accessible colors; lightest slice ≥ 3:1 contrast on bg
- **Accessibility**: AA — include percentage labels visible always, not just on hover
- **Libraries**: Chart.js, Nivo, ApexCharts

### 4. Scatter Plot (Correlation)
- **When**: Two continuous variables; identifying patterns/outliers
- **Rendering**: SVG ≤1000 pts; Canvas/WebGL for more
- **Accessibility**: AA — provide trend line annotation; color + shape encoding
- **Libraries**: D3.js, Plotly, Recharts

### 5. Choropleth Map (Geographic)
- **When**: Geographic distribution; regional comparison
- **Color scale**: Sequential (single hue, 5–7 steps) or diverging (for ±values)
- **Accessibility**: B — provide sortable table; never use rainbow scale
- **Libraries**: D3.js + topojson, Mapbox, Leaflet

### 6. Sankey Diagram (Flow)
- **When**: Flow between categories (budget allocation, user journey, conversion funnel)
- **When NOT**: Cyclical flows; more than 20 nodes
- **Max nodes**: 20; max 5 flow levels
- **Colors**: Source node defines flow color; opacity 60%
- **Accessibility**: B — table of source → destination → value
- **Libraries**: D3.js, Highcharts, Plotly

### 7. Treemap (Hierarchy + Size)
- **When**: Hierarchical data where size matters; 10–200 items
- **Rendering**: SVG ≤200 leaves; Canvas for more
- **Colors**: Categorical for parent groups; sequential for value within group
- **Accessibility**: B — collapsible tree list alternative required
- **Libraries**: D3.js, Recharts, Nivo

### 8. Heat Map (Matrix Comparison)
- **When**: Comparing two categorical axes; correlation matrix; time-of-week patterns
- **When NOT**: Sparse matrix (use bubble chart); more than 20×20 cells on mobile
- **Colors**: Sequential (one color ± intensity) or diverging (#EF4444 → #FFFFFF → #22C55E)
- **Accessibility**: AA — always show cell value text; provide sortable table
- **Libraries**: D3.js, Recharts, ApexCharts

### 9. Waterfall Chart (Changes)
- **When**: Cumulative effect of sequential positive/negative values (P&L, budget variance)
- **Max bars**: 4–12 (aggregate minor items beyond 12)
- **Colors**: Increases #4CAF50, Decreases #F44336, Start total #2196F3, End total #0D47A1
- **Accessibility**: AA — directional arrow icon per bar, labels on every bar
- **Libraries**: ApexCharts, Highcharts, Plotly

### 10. Radar/Spider Chart (Multi-Variable)
- **When**: Comparing 2–3 entities across 5–8 fixed attributes
- **When NOT**: Axes > 8; precise comparison needed; unfamiliar audience
- **Colors**: Single dataset #0080FF at 20% fill; multiple: distinct hues 30% fill
- **Accessibility**: B — always provide grouped bar chart as mandatory alternative
- **Libraries**: Chart.js, Recharts, ApexCharts

### 11. Candlestick / OHLC (Financial)
- **When**: Open/High/Low/Close financial time-series; trading product context only
- **When NOT**: Non-financial audience; no OHLC data
- **Max candles**: 500 visible at once
- **Colors**: Bullish #26A69A (filled), Bearish #EF5350 (filled/hollow pattern for accessibility)
- **Accessibility**: B — provide OHLC data table with sortable columns
- **Libraries**: Lightweight Charts (TradingView), ApexCharts

### 12. Network Graph (Relationships)
- **When**: Mapping connections between entities; social graph; network topology
- **Rendering**: ≤100 nodes SVG; 101–500 Canvas; >500 must cluster first
- **Colors**: Node types categorical; edges #90A4AE at 60% opacity; highlight path #F59E0B
- **Accessibility**: D — ALWAYS provide adjacency list table. Never as sole representation.
- **Libraries**: D3.js (d3-force), Vis.js, Cytoscape.js

### 13. Box Plot (Distribution)
- **When**: Showing spread, median, outliers across groups; min 20 data points per group
- **Colors**: Box fill #BBDEFB, border #1976D2, median line #D32F2F bold, outliers #F44336
- **Accessibility**: AA — stats summary table (min/Q1/median/Q3/max/mean)
- **Libraries**: Plotly, D3.js, Chart.js (plugin)

### 14. Bullet Chart (KPI vs Target)
- **When**: Dashboard with multiple KPIs; space-constrained vs gauge
- **Ideal count**: 3–10 bullet charts in a grid
- **Colors**: Qualitative ranges: #FFCDD2/#FFF9C4/#C8E6C9 (bad/ok/good). Performance bar #1976D2. Target: black 3px marker
- **Accessibility**: AAA — numerical values always visible; color ranges labeled with threshold text
- **Libraries**: D3.js, Plotly, Custom SVG

### 15. Waffle Chart (Proportion)
- **When**: Percentage progress; what fraction is filled; 2–5 categories max
- **Grid**: 10×10 standard (100 cells)
- **Colors**: 2–5 categories with distinct accessible color pairs; 2–3px gap between cells
- **Accessibility**: AA — percentage text always visible; grid cells have aria-label
- **Libraries**: D3.js, React-Waffle, Custom CSS Grid

### 16. Sunburst Chart (Hierarchical Proportion)
- **When**: Nested proportions where hierarchy AND size matter (e.g., org spend breakdown)
- **When NOT**: More than 3 hierarchy levels; precision over overview; mobile
- **Rendering**: <100 nodes SVG; 100–500 Canvas; >500 filter first
- **Colors**: Center to outer: darker to lighter hue; 15–20% lighter per level
- **Accessibility**: C — mandatory table alternative for ANY production use
- **Libraries**: D3.js, Recharts, ApexCharts

### 17. Streaming Area Chart (Real-Time)
- **When**: Live monitoring; IoT/ops data at ≥1 Hz; current value at a glance
- **When NOT**: Update frequency < 1/min; flashing without reduced-motion support
- **Rendering**: Canvas/WebGL required; buffer last 60–300s; downsample older data
- **Colors**: Current pulse #00FF00 (dark) or #0080FF (light); history fading opacity
- **Accessibility**: B — pause/resume control required; current value as large text KPI
- **Libraries**: Smoothed D3.js, CanvasJS

### 18. Calendar Heat Map (Time Distribution)
- **When**: Activity patterns over time; contribution graphs; daily/weekly habits
- **When NOT**: Fewer than 3 months of data
- **Colors**: Empty #EBEDF0; low #9BE9A8; medium #40C463; high #30A14E; max #216E39
- **Accessibility**: AA — provide list view of dates with activity count
- **Libraries**: D3.js, react-activity-calendar, Custom SVG

### 19. Decomposition Tree (Root Cause Analysis)
- **When**: Decomposing a metric into contributing factors; AI-assisted drill-down
- **Max depth**: 5 levels; limit 20 visible nodes per level; lazy-load deeper
- **Colors**: Positive impact #2563EB; negative impact #EF4444; neutral connectors #94A3B8
- **Accessibility**: AA — keyboard-navigable expand/collapse; screen reader announces value + % contribution
- **Libraries**: Power BI (native), React-Flow, Custom D3.js

---

## Color Accessibility Rules for Charts

1. **Never use red+green as the only differentiator** — add shapes, labels, or patterns
2. **Minimum contrast**: 3:1 for data colors against background; 4.5:1 for text labels
3. **Colorblind-safe palettes**: Use ColorBrewer or IBM accessible palette
4. **Dark theme charts**: Reduce brightness by 20%; increase border contrast
5. **Always include**: Data labels or tooltips as text alternatives

## Library CDN Quick-Start

```html
<!-- Chart.js (most versatile) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Recharts (React) -->
npm install recharts

<!-- Plotly (scientific) -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<!-- ApexCharts (feature-rich) -->
npm install apexcharts react-apexcharts

<!-- D3.js (custom) -->
npm install d3

<!-- Lightweight Charts (financial) -->
npm install lightweight-charts
```
