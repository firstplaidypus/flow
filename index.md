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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:15:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="execution/1705310155/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705310155/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705310155/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705310155/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705310155/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705310155/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705310155/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:13:14</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="execution/1705309994/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309994/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309994/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309994/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309994/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309994/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309994/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:50</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="execution/1705309910/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309910/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309910/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309910/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309910/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309910/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309910/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:24</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="execution/1705309884/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309884/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309884/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309884/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309884/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309884/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309884/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:01:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705309307/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309307/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309307/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309307/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309307/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309307/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309307/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T08:42:39</code></th>
			 <th><code>sonar_java_bump</code></th>
			<td><a href="execution/1705308159/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705308159/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705308159/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705308159/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705308159/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705308159/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705308159/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:03:07</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="execution/1705280587/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705280587/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705280587/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705280587/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705280587/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705280587/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705280587/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:02:41</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="execution/1705280561/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705280561/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705280561/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705280561/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705280561/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705280561/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705280561/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:55:08</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="execution/1705280108/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705280108/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705280108/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705280108/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705280108/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705280108/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705280108/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.1.0</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:18:04</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.1.0</code></th>
			<td><a href="mutation/1705310284/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:17:37</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="mutation/1705310257/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:17:13</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="mutation/1705310233/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:16:22</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="mutation/1705310182/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:10:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705309823/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T08:48:29</code></th>
			 <th><code>sonar_java_bump</code></th>
			<td><a href="mutation/1705308509/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:09:37</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="mutation/1705280977/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:09:13</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="mutation/1705280953/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:08:46</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.1.0</code></th>
			<td><a href="mutation/1705280926/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:59:23</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="mutation/1705280363/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:58:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="mutation/1705280338/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:58:32</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="mutation/1705280312/mutation_report/index.html">mutation</a></td>
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
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:15:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="ng_coverage/1705310155/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:13:14</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="ng_coverage/1705309994/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:50</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="ng_coverage/1705309910/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:24</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="ng_coverage/1705309884/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:01:47</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705309307/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T08:42:39</code></th>
			 <th><code>sonar_java_bump</code></th>
			<td><a href="ng_coverage/1705308159/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:03:07</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="ng_coverage/1705280587/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T01:02:41</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="ng_coverage/1705280561/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T00:55:08</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="ng_coverage/1705280108/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->