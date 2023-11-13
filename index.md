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
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.2</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:03:46</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.2</code></th>
			<td><a href="execution/1699837426/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699837426/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699837426/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699837426/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699837426/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699837426/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699837426/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:00:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.2</code></th>
			<td><a href="execution/1699837255/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699837255/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699837255/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699837255/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699837255/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699837255/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699837255/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-06T09:17:19</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699262239/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699262239/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699262239/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699262239/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699262239/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699262239/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699262239/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-06T08:45:15</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699260315/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699260315/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699260315/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699260315/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699260315/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699260315/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699260315/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-06T08:42:22</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699260142/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699260142/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699260142/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699260142/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699260142/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699260142/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699260142/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-06T01:25:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.10</code></th>
			<td><a href="execution/1699233954/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699233954/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699233954/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699233954/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699233954/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699233954/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699233954/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-06T01:10:24</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.3</code></th>
			<td><a href="execution/1699233024/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699233024/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699233024/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699233024/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699233024/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699233024/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699233024/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-06T01:06:35</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.1</code></th>
			<td><a href="execution/1699232795/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699232795/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699232795/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699232795/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699232795/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699232795/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699232795/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-03T08:13:35</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698999215/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698999215/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698999215/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698999215/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698999215/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698999215/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698999215/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-02T08:54:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698915273/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698915273/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698915273/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698915273/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698915273/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698915273/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698915273/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-02T08:33:31</code></th>
			 <th><code>linux_open_fix</code></th>
			<td><a href="execution/1698914011/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698914011/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698914011/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698914011/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698914011/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698914011/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698914011/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T11:17:31</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698664651/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698664651/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698664651/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698664651/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698664651/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698664651/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698664651/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T10:43:40</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698662620/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698662620/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698662620/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698662620/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698662620/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698662620/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698662620/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:51:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698659480/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698659480/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698659480/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698659480/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698659480/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698659480/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698659480/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:43:43</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698659023/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698659023/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698659023/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698659023/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698659023/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698659023/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698659023/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:31:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.6.0</code></th>
			<td><a href="execution/1698658295/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698658295/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698658295/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698658295/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698658295/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698658295/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698658295/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:12:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698657171/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698657171/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698657171/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698657171/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698657171/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698657171/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698657171/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:12:10</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698657130/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698657130/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698657130/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698657130/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698657130/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698657130/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698657130/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T08:53:39</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.1</code></th>
			<td><a href="execution/1698656019/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698656019/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698656019/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698656019/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698656019/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698656019/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698656019/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T08:52:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.4</code></th>
			<td><a href="execution/1698655974/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698655974/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698655974/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698655974/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698655974/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698655974/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698655974/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-06T09:20:32</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699262432/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-06T08:47:25</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.1</code></th>
			<td></td>
			<td><a href="mutation/1699260445/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-11-06T08:44:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699260276/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-06T08:43:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699260226/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-06T01:31:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.10</code></th>
			<td><a href="mutation/1699234293/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-06T01:20:27</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.3</code></th>
			<td><a href="mutation/1699233627/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-03T08:15:42</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698999342/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-02T09:08:53</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698916133/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-02T08:42:12</code></th>
			 <th><code>linux_open_fix</code></th>
			<td><a href="mutation/1698914532/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T11:23:58</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698665038/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T10:53:03</code></th>
			 <th><code>duct</code></th>
			<td><a href="mutation/1698663183/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T10:40:38</code></th>
			 <th><code>duct</code></th>
			<td></td>
			<td><a href="mutation/1698662438/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1698662438/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:57:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698659838/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T09:55:12</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698659712/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T09:36:07</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.6.0</code></th>
			<td><a href="mutation/1698658567/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T09:22:16</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698657736/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T09:18:43</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698657523/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T09:00:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698656446/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T08:59:31</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698656371/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-30T08:58:59</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.1</code></th>
			<td></td>
			<td><a href="mutation/1698656339/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1698656339/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
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
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.2</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:03:46</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.2</code></th>
			<td><a href="ng_coverage/1699837426/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:00:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.2</code></th>
			<td><a href="ng_coverage/1699837255/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-06T09:17:19</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699262239/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-06T08:45:15</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699260315/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-06T08:42:22</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699260142/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-06T01:25:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.10</code></th>
			<td><a href="ng_coverage/1699233954/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-06T01:10:24</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.3</code></th>
			<td><a href="ng_coverage/1699233024/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-06T01:06:35</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.1</code></th>
			<td><a href="ng_coverage/1699232795/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-03T08:13:35</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698999215/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-02T08:54:33</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698915273/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-02T08:33:31</code></th>
			 <th><code>linux_open_fix</code></th>
			<td><a href="ng_coverage/1698914011/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T11:17:31</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698664651/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T10:43:40</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698662620/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:51:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698659480/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:43:43</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698659023/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:31:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.6.0</code></th>
			<td><a href="ng_coverage/1698658295/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:12:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698657171/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T09:12:10</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698657130/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T08:53:39</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.1</code></th>
			<td><a href="ng_coverage/1698656019/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T08:52:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.4</code></th>
			<td><a href="ng_coverage/1698655974/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->