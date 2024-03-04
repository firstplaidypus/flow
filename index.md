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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:22:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="execution/1709515350/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709515350/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709515350/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709515350/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709515350/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709515350/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709515350/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T00:26:07</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.4</code></th>
			<td><a href="execution/1709511967/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709511967/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709511967/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709511967/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709511967/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709511967/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709511967/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T00:25:42</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.1</code></th>
			<td><a href="execution/1709511942/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709511942/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709511942/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709511942/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709511942/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709511942/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709511942/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T00:25:19</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.1.0</code></th>
			<td><a href="execution/1709511919/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709511919/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709511919/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709511919/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709511919/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709511919/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709511919/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T09:29:25</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708939765/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708939765/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708939765/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708939765/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708939765/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708939765/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708939765/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T09:06:32</code></th>
			 <th><code>mermaid_links_disable</code></th>
			<td><a href="execution/1708938392/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708938392/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708938392/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708938392/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708938392/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708938392/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708938392/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:31:59</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708936319/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708936319/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708936319/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708936319/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708936319/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708936319/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708936319/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:16:39</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708935399/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708935399/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708935399/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708935399/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708935399/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708935399/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708935399/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708935373/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708935373/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708935373/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708935373/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708935373/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708935373/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708935373/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:15:12</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708935312/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708935312/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708935312/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708935312/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708935312/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708935312/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708935312/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:43:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-6.4.3</code></th>
			<td><a href="execution/1708908226/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708908226/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708908226/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708908226/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708908226/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708908226/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708908226/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:38:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.20</code></th>
			<td><a href="execution/1708907901/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708907901/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708907901/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708907901/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708907901/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708907901/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708907901/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:15:11</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.0</code></th>
			<td><a href="execution/1708906511/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708906511/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708906511/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708906511/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708906511/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708906511/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708906511/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:13:58</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.2</code></th>
			<td><a href="execution/1708906438/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708906438/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708906438/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708906438/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708906438/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708906438/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708906438/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:13:30</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.2.0</code></th>
			<td><a href="execution/1708906410/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708906410/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708906410/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708906410/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708906410/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708906410/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708906410/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T10:14:19</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708683259/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708683259/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708683259/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708683259/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708683259/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708683259/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708683259/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:31:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="execution/1708680679/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708680679/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708680679/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708680679/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708680679/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708680679/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708680679/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:29:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708680557/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708680557/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708680557/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708680557/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708680557/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708680557/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708680557/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:12:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.8.0</code></th>
			<td><a href="execution/1708679575/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708679575/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708679575/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708679575/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708679575/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708679575/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708679575/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:27:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.19</code></th>
			<td><a href="execution/1708306062/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708306062/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708306062/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708306062/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708306062/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708306062/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708306062/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-03-04T01:29:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="mutation/1709515765/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-03-04T00:32:04</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.1.0</code></th>
			<td><a href="mutation/1709512324/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T09:36:10</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708940170/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T09:22:09</code></th>
			 <th><code>mermaid_links_disable</code></th>
			<td></td>
			<td><a href="mutation/1708939329/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:38:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708936683/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T08:22:52</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708935772/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T08:22:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.20</code></th>
			<td></td>
			<td><a href="mutation/1708935748/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:19:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708935541/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T00:49:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-6.4.3</code></th>
			<td><a href="mutation/1708908583/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T00:20:09</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.2.0</code></th>
			<td><a href="mutation/1708906809/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T00:19:51</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.0</code></th>
			<td><a href="mutation/1708906791/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-26T00:19:35</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.2</code></th>
			<td><a href="mutation/1708906775/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-23T10:20:33</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708683633/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-23T09:35:09</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="mutation/1708680909/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-23T09:34:00</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708680840/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-23T09:17:18</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.8.0</code></th>
			<td><a href="mutation/1708679838/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-22T14:05:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708610745/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-22T14:01:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708610494/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-21T03:35:29</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="mutation/1708486529/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-02-19T01:34:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.19</code></th>
			<td><a href="mutation/1708306476/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:22:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="ng_coverage/1709515350/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T00:26:07</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.4</code></th>
			<td><a href="ng_coverage/1709511967/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T00:25:42</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.1</code></th>
			<td><a href="ng_coverage/1709511942/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T00:25:19</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.1.0</code></th>
			<td><a href="ng_coverage/1709511919/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T09:29:25</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708939765/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T09:06:32</code></th>
			 <th><code>mermaid_links_disable</code></th>
			<td><a href="ng_coverage/1708938392/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:31:59</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708936319/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:16:39</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708935399/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708935373/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:15:12</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708935312/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:43:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-6.4.3</code></th>
			<td><a href="ng_coverage/1708908226/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:38:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.20</code></th>
			<td><a href="ng_coverage/1708907901/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:15:11</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.0</code></th>
			<td><a href="ng_coverage/1708906511/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:13:58</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.2</code></th>
			<td><a href="ng_coverage/1708906438/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-26T00:13:30</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.2.0</code></th>
			<td><a href="ng_coverage/1708906410/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T10:14:19</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708683259/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:31:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="ng_coverage/1708680679/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:29:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708680557/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:12:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.8.0</code></th>
			<td><a href="ng_coverage/1708679575/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:27:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.19</code></th>
			<td><a href="ng_coverage/1708306062/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->