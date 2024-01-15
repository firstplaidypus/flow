# Build artifacts

One of the main features of the [flow testing framework](https://github.com/Mastercard/flow) is the production of rich execution reports.
Until such a time as [upload-artifact#14](https://github.com/actions/upload-artifact/issues/14) is addressed, we're reduced to abusing github pages to show these artifacts to best effect.
See [test.yml](https://github.com/Mastercard/flow/blob/main/.github/workflows/test.yml), [mutation.yml](https://github.com/Mastercard/flow/blob/main/.github/workflows/mutation.yml) and [regen_index.pl](https://github.com/Mastercard/flow/blob/pages/regen_index.pl) for the gory details.

## Execution reports

These reports are the result of comparing a unified model of system behaviour against:
 * an instance of the complete system (The "app-itest" report)
 * system components in isolation (everything else)

<!-- start:execution -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:54:16</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="execution/1705280056/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705280056/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705280056/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705280056/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705280056/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705280056/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705280056/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:52:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.0</code></th>
			<td><a href="execution/1705279978/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705279978/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705279978/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705279978/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705279978/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705279978/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705279978/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:52:05</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="execution/1705279925/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705279925/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705279925/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705279925/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705279925/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705279925/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705279925/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-10T09:01:41</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704877301/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704877301/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704877301/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704877301/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704877301/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704877301/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704877301/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-10T07:41:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.4</code></th>
			<td><a href="execution/1704872518/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704872518/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704872518/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704872518/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704872518/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704872518/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704872518/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-08T08:41:03</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704703263/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704703263/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704703263/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704703263/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704703263/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704703263/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704703263/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-08T01:07:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.7</code></th>
			<td><a href="execution/1704676053/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704676053/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704676053/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704676053/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704676053/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704676053/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704676053/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:31:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704450671/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704450671/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704450671/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704450671/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704450671/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704450671/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704450671/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:22:50</code></th>
			 <th><code>release_build_fix</code></th>
			<td><a href="execution/1704450170/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704450170/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704450170/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704450170/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704450170/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704450170/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704450170/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:03:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704449027/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704449027/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704449027/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704449027/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704449027/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704449027/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704449027/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-05T09:49:34</code></th>
			 <th><code>release_build_fix</code></th>
			<td><a href="execution/1704448174/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704448174/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704448174/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704448174/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704448174/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704448174/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704448174/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:36:39</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704368199/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704368199/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704368199/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704368199/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704368199/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704368199/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704368199/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:02:55</code></th>
			 <th><code>hash_mask</code></th>
			<td><a href="execution/1704366175/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704366175/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704366175/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704366175/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704366175/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704366175/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704366175/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:12:07</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269527/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269527/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269527/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269527/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269527/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269527/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269527/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:11:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269498/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269498/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269498/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269498/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269498/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269498/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269498/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:06:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269177/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269177/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269177/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269177/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269177/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269177/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269177/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:05:49</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269149/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269149/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269149/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269149/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269149/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269149/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269149/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.6</code></th>
			<td><a href="execution/1704070663/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704070663/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704070663/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704070663/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704070663/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704070663/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704070663/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.7</code></th>
			<td><a href="execution/1704070624/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704070624/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704070624/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704070624/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704070624/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704070624/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704070624/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:35:26</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.10</code></th>
			<td><a href="execution/1704069326/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704069326/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704069326/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704069326/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704069326/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704069326/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704069326/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.4</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-10T07:48:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.4</code></th>
			<td><a href="mutation/1704872923/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-08T08:47:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704703654/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-08T01:11:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.7</code></th>
			<td><a href="mutation/1704676266/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:35:16</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704450916/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:28:27</code></th>
			 <th><code>release_build_fix</code></th>
			<td><a href="mutation/1704450507/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:07:58</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704449278/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-05T09:53:10</code></th>
			 <th><code>release_build_fix</code></th>
			<td><a href="mutation/1704448390/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:40:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704368422/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:07:03</code></th>
			 <th><code>hash_mask</code></th>
			<td><a href="mutation/1704366423/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:16:16</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704269776/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:15:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704269746/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:12:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704269556/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T01:03:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.6</code></th>
			<td><a href="mutation/1704071008/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T01:03:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.7</code></th>
			<td><a href="mutation/1704070983/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:40:00</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.3</code></th>
			<td><a href="mutation/1704069600/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:39:04</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.10</code></th>
			<td><a href="mutation/1704069544/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:11:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491863/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:10:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491818/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:09:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491754/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:07:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491646/mutation_report/index.html">mutation</a></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:54:16</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="ng_coverage/1705280056/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:52:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.0</code></th>
			<td><a href="ng_coverage/1705279978/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:52:05</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="ng_coverage/1705279925/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-10T09:01:41</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704877301/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-10T07:41:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.4</code></th>
			<td><a href="ng_coverage/1704872518/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-08T08:41:03</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704703263/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-08T01:07:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.7</code></th>
			<td><a href="ng_coverage/1704676053/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:31:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704450671/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:22:50</code></th>
			 <th><code>release_build_fix</code></th>
			<td><a href="ng_coverage/1704450170/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-05T10:03:47</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704449027/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-05T09:49:34</code></th>
			 <th><code>release_build_fix</code></th>
			<td><a href="ng_coverage/1704448174/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:36:39</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704368199/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:02:55</code></th>
			 <th><code>hash_mask</code></th>
			<td><a href="ng_coverage/1704366175/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:12:07</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269527/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:11:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269498/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:06:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269177/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:05:49</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269149/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.6</code></th>
			<td><a href="ng_coverage/1704070663/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.7</code></th>
			<td><a href="ng_coverage/1704070624/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:35:26</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.10</code></th>
			<td><a href="ng_coverage/1704069326/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->