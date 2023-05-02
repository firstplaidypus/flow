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
			 <th><code>dependabot/maven/org.junit.jupiter-junit-jupiter-5.9.3</code></th>
			<td><a href="execution/latest/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-02T09:30:51</code></th>
			 <th><code>dependabot/maven/org.junit.jupiter-junit-jupiter-5.9.3</code></th>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1683019851/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-01T01:24:31</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.16.3</code></th>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682904271/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-01T01:22:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.21.5</code></th>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682904143/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-01T01:20:10</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.3.2</code></th>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682904010/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-01T01:19:44</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.10</code></th>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682903984/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:47:35</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682326055/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:34:40</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682325280/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:32:06</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.3.1</code></th>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682325126/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:14:43</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682324083/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:10:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1682323829/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.16.3</code></th>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:31:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.16.3</code></th>
			<td><a href="mutation/1682904690/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:28:34</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.3.2</code></th>
			<td><a href="mutation/1682904514/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:27:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.21.5</code></th>
			<td><a href="mutation/1682904430/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:25:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/rxjs-7.8.1</code></th>
			<td><a href="mutation/1682904354/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:25:23</code></th>
			 <th><code>dependabot/maven/org.junit.platform-junit-platform-launcher-1.9.3</code></th>
			<td><a href="mutation/1682904323/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:21:53</code></th>
			 <th><code>dependabot/maven/org.junit.jupiter-junit-jupiter-5.9.3</code></th>
			<td><a href="mutation/1682904113/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-05-01T01:21:27</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.10</code></th>
			<td><a href="mutation/1682904087/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T08:54:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682326476/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T08:42:10</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682325730/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T08:22:31</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.13.0</code></th>
			<td></td>
			<td><a href="mutation/1682324551/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/aggregator/target/pit-reports/index.html">project_mutation_reports/aggregator/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/assert/assert-core/target/pit-reports/index.html">project_mutation_reports/assert/assert-core/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/assert/assert-filter/target/pit-reports/index.html">project_mutation_reports/assert/assert-filter/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/assert/assert-junit5/target/pit-reports/index.html">project_mutation_reports/assert/assert-junit5/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1682324551/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:17:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682324254/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T08:15:32</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682324132/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T08:03:50</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.0</code></th>
			<td></td>
			<td><a href="mutation/1682323430/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/aggregator/target/pit-reports/index.html">project_mutation_reports/aggregator/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/assert/assert-core/target/pit-reports/index.html">project_mutation_reports/assert/assert-core/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/assert/assert-filter/target/pit-reports/index.html">project_mutation_reports/assert/assert-filter/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/assert/assert-junit5/target/pit-reports/index.html">project_mutation_reports/assert/assert-junit5/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1682323430/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-04-24T08:03:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682323398/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T07:59:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-chrome-launcher-3.2.0</code></th>
			<td><a href="mutation/1682323190/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T07:58:47</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682323127/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T07:58:10</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682323090/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T07:57:06</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682323026/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T07:53:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1682322805/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-04-24T07:41:01</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.9.0</code></th>
			<td><a href="mutation/1682322061/mutation_report/index.html">mutation</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->
