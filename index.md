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
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T11:08:28</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695035308/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695035308/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695035308/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695035308/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695035308/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695035308/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695035308/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:38:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695033481/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695033481/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695033481/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695033481/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695033481/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695033481/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695033481/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:25:33</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.14.0</code></th>
			<td><a href="execution/1695032733/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695032733/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695032733/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695032733/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695032733/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695032733/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695032733/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:22:49</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695032569/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695032569/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695032569/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695032569/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695032569/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695032569/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695032569/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:20:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695032426/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695032426/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695032426/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695032426/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695032426/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695032426/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695032426/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:19:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695032351/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695032351/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695032351/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695032351/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695032351/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695032351/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695032351/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:18:12</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.6</code></th>
			<td><a href="execution/1695032292/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695032292/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695032292/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695032292/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695032292/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695032292/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695032292/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T01:23:41</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.20</code></th>
			<td><a href="execution/1695000221/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695000221/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695000221/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695000221/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695000221/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695000221/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695000221/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T01:20:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.2</code></th>
			<td><a href="execution/1695000001/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695000001/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695000001/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695000001/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695000001/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695000001/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695000001/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T01:19:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.6</code></th>
			<td><a href="execution/1694999965/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694999965/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694999965/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694999965/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694999965/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694999965/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694999965/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-18T00:33:53</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.0</code></th>
			<td><a href="execution/1694997233/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694997233/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694997233/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694997233/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694997233/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694997233/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694997233/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-17T18:21:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694974861/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694974861/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694974861/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694974861/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694974861/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694974861/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694974861/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-17T18:18:06</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694974686/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694974686/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694974686/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694974686/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694974686/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694974686/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694974686/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-17T18:08:17</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.0.0</code></th>
			<td><a href="execution/1694974097/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694974097/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694974097/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694974097/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694974097/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694974097/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694974097/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:47:35</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694411255/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694411255/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694411255/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694411255/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694411255/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694411255/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694411255/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:46:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694411177/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694411177/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694411177/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694411177/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694411177/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694411177/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694411177/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:45:08</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694411108/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694411108/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694411108/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694411108/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694411108/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694411108/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694411108/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:44:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694411041/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694411041/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694411041/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694411041/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694411041/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694411041/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694411041/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:42:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694410975/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694410975/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694410975/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694410975/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694410975/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694410975/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694410975/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:34:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.1</code></th>
			<td><a href="execution/1694410495/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694410495/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694410495/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694410495/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694410495/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694410495/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694410495/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.14.0</code></th>
			<td></td>
			<td><a href="mutation/latest/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/latest/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/latest/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/latest/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/latest/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/latest/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/latest/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:49:54</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.14.0</code></th>
			<td></td>
			<td><a href="mutation/1695034194/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:45:55</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695033955/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T10:30:28</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695033028/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T10:26:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.6</code></th>
			<td><a href="mutation/1695032785/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T10:23:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695032637/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T10:23:19</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695032599/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T01:30:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.20</code></th>
			<td><a href="mutation/1695000610/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T01:26:44</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.2</code></th>
			<td><a href="mutation/1695000404/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T01:26:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.6</code></th>
			<td><a href="mutation/1695000374/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-18T00:39:44</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.0</code></th>
			<td><a href="mutation/1694997584/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-17T18:29:55</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694975395/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-17T18:24:42</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694975082/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T05:55:42</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694411742/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T05:55:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694411704/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T05:54:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694411666/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T05:52:55</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694411575/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T05:51:06</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1694411466/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T05:37:47</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-3.1.3</code></th>
			<td><a href="mutation/1694410667/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T01:26:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.17</code></th>
			<td><a href="mutation/1694395612/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-11T01:21:45</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.0</code></th>
			<td><a href="mutation/1694395305/mutation_report/index.html">mutation</a></td>
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
			 <th><code>main</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T11:08:28</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695035308/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:38:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695033481/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:25:33</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.14.0</code></th>
			<td><a href="ng_coverage/1695032733/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:22:49</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695032569/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:20:26</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695032426/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:19:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695032351/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T10:18:12</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.6</code></th>
			<td><a href="ng_coverage/1695032292/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T01:23:41</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.20</code></th>
			<td><a href="ng_coverage/1695000221/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T01:20:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.2</code></th>
			<td><a href="ng_coverage/1695000001/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T01:19:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.6</code></th>
			<td><a href="ng_coverage/1694999965/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-18T00:33:53</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.0</code></th>
			<td><a href="ng_coverage/1694997233/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-17T18:21:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694974861/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-17T18:18:06</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694974686/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-17T18:08:17</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.0.0</code></th>
			<td><a href="ng_coverage/1694974097/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:47:35</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694411255/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:46:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694411177/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:45:08</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694411108/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:44:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694411041/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:42:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694410975/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:34:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.1</code></th>
			<td><a href="ng_coverage/1694410495/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->