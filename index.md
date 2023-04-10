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
			 <th><code>main</code></th>
			<td><a href="execution/latest/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:54:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681113287/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:53:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681113181/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:51:22</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681113082/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:50:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681113020/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:23:24</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.11</code></th>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681089804/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:22:08</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.3.0</code></th>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681089728/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:20:09</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.9</code></th>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681089609/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:19:14</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.3.0</code></th>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681089554/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:18:50</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.2</code></th>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1681089530/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T07:59:25</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680508765/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T07:56:45</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680508605/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T07:55:03</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680508503/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T07:53:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680508413/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T07:52:45</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680508365/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:37:11</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.11.0</code></th>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1680485831/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2023-04-10T07:55:50</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1681113350/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:49:43</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.12.0</code></th>
			<td><a href="mutation/1681112983/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T07:46:56</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.2</code></th>
			<td><a href="mutation/1681112816/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:28:51</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.11</code></th>
			<td><a href="mutation/1681090131/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:26:20</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.3.0</code></th>
			<td><a href="mutation/1681089980/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:24:30</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.9</code></th>
			<td><a href="mutation/1681089870/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-10T01:23:54</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.3.0</code></th>
			<td><a href="mutation/1681089834/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T08:03:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1680508994/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T08:02:48</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1680508968/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T08:02:06</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1680508926/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T08:01:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1680508863/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T07:57:24</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1680508644/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:43:15</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.11.0</code></th>
			<td><a href="mutation/1680486195/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:41:32</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.1.3</code></th>
			<td><a href="mutation/1680486092/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:41:04</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.2.9</code></th>
			<td><a href="mutation/1680486064/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-04-03T01:38:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-18.15.11</code></th>
			<td><a href="mutation/1680485906/mutation_report/index.html">mutation</a></td>
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
	</tbody>
</table>
<!-- end:mutation -->
