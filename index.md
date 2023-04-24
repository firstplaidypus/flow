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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-chrome-launcher-3.2.0</code></th>
			<td><a href="execution/latest/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:53:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-chrome-launcher-3.2.0</code></th>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682322831/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:52:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682322777/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:49:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682322563/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:48:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.16.0</code></th>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682322504/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:47:46</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682322466/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:41:57</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.9.0</code></th>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682322117/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:39:35</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.3</code></th>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682321975/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:28:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-chrome-launcher-3.2.0</code></th>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682299706/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:23:09</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-6.4.2</code></th>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682299389/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:22:35</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.3.0</code></th>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682299355/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:22:08</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.13.0</code></th>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682299328/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:18:38</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.0</code></th>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682299118/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-17T10:16:46</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681726606/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-17T09:43:07</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681724587/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-17T09:42:26</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.12</code></th>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681724546/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-17T01:17:35</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.12</code></th>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681694255/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-17T01:17:06</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.2</code></th>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681694226/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-13T09:20:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681377611/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-13T08:47:01</code></th>
			 <th><code>mermaid_details</code></th>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681375621/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T08:19:37</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681114777/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>main</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:57:06</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682323026/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:53:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682322805/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:41:01</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.9.0</code></th>
			<td><a href="mutation/1682322061/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T07:38:18</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.3</code></th>
			<td><a href="mutation/1682321898/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:34:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-chrome-launcher-3.2.0</code></th>
			<td><a href="mutation/1682300072/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:29:45</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.3.0</code></th>
			<td><a href="mutation/1682299785/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:29:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-6.4.2</code></th>
			<td><a href="mutation/1682299756/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:26:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.16.0</code></th>
			<td><a href="mutation/1682299581/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-24T01:25:50</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.3.1</code></th>
			<td><a href="mutation/1682299550/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-21T10:17:59</code></th>
			 <th><code>ng_bump</code></th>
			<td><a href="mutation/1682072279/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-17T10:21:56</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681726916/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-17T09:49:05</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.12</code></th>
			<td><a href="mutation/1681724945/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-17T09:48:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681724916/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-17T01:23:55</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.2</code></th>
			<td><a href="mutation/1681694635/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-17T01:23:23</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.12</code></th>
			<td><a href="mutation/1681694603/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-13T09:24:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681377877/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-13T08:52:07</code></th>
			 <th><code>mermaid_details</code></th>
			<td><a href="mutation/1681375927/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T08:24:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681115041/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T08:02:08</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681113728/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:59:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681113574/mutation_report/index.html">mutation</a></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->
