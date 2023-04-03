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
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.1.3</code></th>
			<td><a href="execution/latest/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:35:57</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.1.3</code></th>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680485757/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:35:17</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.9</code></th>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680485717/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:33:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.15.11</code></th>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680485605/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:32:53</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.21.4</code></th>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680485573/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-31T14:25:46</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680272746/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-31T14:08:27</code></th>
			 <th><code>diff_load_batch</code></th>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680271707/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T09:19:48</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679908788/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:24:16</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.8</code></th>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679905456/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:20:50</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.8</code></th>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679905250/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:20:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679905220/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:17:10</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679905030/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:14:12</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679904852/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:11:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679904683/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:10:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679904614/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:10:00</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.11.7</code></th>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679904600/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:06:13</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.8</code></th>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679904373/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:01:02</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679904062/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T07:55:39</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679903739/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T07:52:53</code></th>
			 <th><code>pages_mutex</code></th>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679903573/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-03-27T07:36:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.15.10</code></th>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1679902580/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.21.4</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:36:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.21.4</code></th>
			<td><a href="mutation/1680485802/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-31T14:30:09</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1680273009/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-31T14:04:32</code></th>
			 <th><code>diff_load_batch</code></th>
			<td><a href="mutation/1680271472/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T09:24:44</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679909084/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:29:51</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.8</code></th>
			<td><a href="mutation/1679905791/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:25:47</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.8</code></th>
			<td><a href="mutation/1679905547/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:25:21</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679905521/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:21:19</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679905279/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:19:21</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679905161/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:18:53</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679905133/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679904973/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:13:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679904783/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:11:08</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679904668/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:01:24</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.8.3</code></th>
			<td><a href="mutation/1679904084/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T08:00:11</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1679904011/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T07:59:19</code></th>
			 <th><code>pages_mutex</code></th>
			<td><a href="mutation/1679903959/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T07:48:12</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.1</code></th>
			<td><a href="mutation/1679903292/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T01:46:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.15.10</code></th>
			<td><a href="mutation/1679881619/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T01:44:03</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.0</code></th>
			<td><a href="mutation/1679881443/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-03-27T01:43:30</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.8</code></th>
			<td><a href="mutation/1679881410/mutation_report/index.html">mutation</a></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->
