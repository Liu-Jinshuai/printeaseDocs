import{_ as e,v as t,b as a,R as r}from"./chunks/framework.cfa95d4c.js";const p=JSON.parse('{"title":"Class: JavaScriptImagePixelInformation","description":"","frontmatter":{},"headers":[],"relativePath":"src/api/ImagePixelInformation/JavaScriptImagePixelInformation.md","filePath":"src/api/ImagePixelInformation/JavaScriptImagePixelInformation.md"}'),i={name:"src/api/ImagePixelInformation/JavaScriptImagePixelInformation.md"},o=r('<h1 id="class-javascriptimagepixelinformation" tabindex="-1">Class: JavaScriptImagePixelInformation <a class="header-anchor" href="#class-javascriptimagepixelinformation" aria-label="Permalink to &quot;Class: JavaScriptImagePixelInformation&quot;">​</a></h1><p><strong><code>Classdesc</code></strong></p><p>JavaScript gets image pixel information</p><p><strong><code>Implements</code></strong></p><p>ImagePixelInformationInterface</p><p><strong><code>Classes</code></strong></p><p>JavaScriptImagePixelInformation</p><p><strong><code>Param</code></strong></p><p>grayscale threshold（default 100）</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><code>ImagePixelInformation</code></p><p>↳ <strong><code>JavaScriptImagePixelInformation</code></strong></p></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new JavaScriptImagePixelInformation</strong>(<code>grayThreshold</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grayThreshold</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p>ImagePixelInformation.constructor</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L60" target="_blank" rel="noreferrer">components/imagePixelInformation/index.ts:60</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="graythreshold" tabindex="-1">grayThreshold <a class="header-anchor" href="#graythreshold" aria-label="Permalink to &quot;grayThreshold&quot;">​</a></h3><p>• <strong>grayThreshold</strong>: <code>number</code></p><p>@description: grayscale threshold（default 100）</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L59" target="_blank" rel="noreferrer">components/imagePixelInformation/index.ts:59</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getimagedata" tabindex="-1">getImageData <a class="header-anchor" href="#getimagedata" aria-label="Permalink to &quot;getImageData&quot;">​</a></h3><p>▸ <strong>getImageData</strong>(<code>imageResource</code>, <code>width?</code>, <code>height?</code>, <code>callback</code>): <code>void</code></p><p>@description: Get image pixel information（rgba）</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>imageResource</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">image path</td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>256</code></td><td style="text-align:left;">The width of the rectangle from which the pixel data will be retrieved;</td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>256</code></td><td style="text-align:left;">The height of the rectangle from which the pixel data will be retrieved</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>pixelInformation</code>: <code>object</code>) =&gt; <code>void</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">callback function</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p>ImagePixelInformation.getImageData</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L64" target="_blank" rel="noreferrer">components/imagePixelInformation/index.ts:64</a></p><hr><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>ImagePixelInformation.uniGetImageData</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L8" target="_blank" rel="noreferrer">components/imagePixelInformation/index.ts:8</a></p>',43),n=[o];function d(l,s,c,h,m,f){return t(),a("div",null,n)}const x=e(i,[["render",d]]);export{p as __pageData,x as default};
