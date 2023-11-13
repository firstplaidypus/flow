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
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:50:05</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699869005/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699869005/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699869005/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699869005/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699869005/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699869005/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699869005/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:29:29</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.2</code></th>
			<td><a href="execution/1699867769/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699867769/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699867769/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699867769/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699867769/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699867769/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699867769/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:24:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.3</code></th>
			<td><a href="execution/1699867492/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699867492/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699867492/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699867492/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699867492/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699867492/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699867492/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:24:06</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699867446/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699867446/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699867446/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699867446/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699867446/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699867446/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699867446/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:22:35</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699867355/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699867355/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699867355/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699867355/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699867355/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699867355/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699867355/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:22:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699867321/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699867321/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699867321/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699867321/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699867321/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699867321/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699867321/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:15:26</code></th>
			 <th><code>dependabot/maven/org.junit-junit-bom-5.10.1</code></th>
			<td><a href="execution/1699866926/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699866926/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699866926/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699866926/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699866926/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699866926/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699866926/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T02:21:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.5</code></th>
			<td><a href="execution/1699842115/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699842115/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699842115/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699842115/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699842115/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699842115/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699842115/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:29:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.2</code></th>
			<td><a href="execution/1699838986/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699838986/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699838986/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699838986/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699838986/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699838986/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699838986/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:29:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.3</code></th>
			<td><a href="execution/1699838946/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699838946/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699838946/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699838946/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699838946/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699838946/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699838946/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:23:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.9.0</code></th>
			<td><a href="execution/1699838612/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699838612/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699838612/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699838612/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699838612/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699838612/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699838612/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.2</code></th>
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
			<td></td>
		</tr>
		<tr> <th><code>2023-11-13T09:45:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.2</code></th>
			<td><a href="mutation/1699868757/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T09:35:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.3</code></th>
			<td><a href="mutation/1699868155/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T09:34:52</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.2</code></th>
			<td></td>
			<td><a href="mutation/1699868092/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/aggregator/target/pit-reports/index.html">project_mutation_reports/aggregator/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/assert/assert-core/target/pit-reports/index.html">project_mutation_reports/assert/assert-core/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/assert/assert-filter/target/pit-reports/index.html">project_mutation_reports/assert/assert-filter/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/assert/assert-junit5/target/pit-reports/index.html">project_mutation_reports/assert/assert-junit5/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/report/duct/target/pit-reports/index.html">project_mutation_reports/report/duct/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1699868092/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:32:09</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699867929/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T09:26:05</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699867565/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T01:40:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.5</code></th>
			<td><a href="mutation/1699839642/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T01:39:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.9.0</code></th>
			<td><a href="mutation/1699839590/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T01:39:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.2</code></th>
			<td><a href="mutation/1699839543/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T01:15:27</code></th>
			 <th><code>dependabot/maven/org.junit-junit-bom-5.10.1</code></th>
			<td><a href="mutation/1699838127/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T01:08:48</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.2</code></th>
			<td><a href="mutation/1699837728/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T01:04:29</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.2</code></th>
			<td><a href="mutation/1699837469/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			<td></td>
			<td><a href="mutation/1699260445/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="mutation/1699260445/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1699260445/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T09:50:05</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699869005/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:29:29</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.2</code></th>
			<td><a href="ng_coverage/1699867769/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:24:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.3</code></th>
			<td><a href="ng_coverage/1699867492/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:24:06</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699867446/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:22:35</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699867355/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:22:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699867321/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T09:15:26</code></th>
			 <th><code>dependabot/maven/org.junit-junit-bom-5.10.1</code></th>
			<td><a href="ng_coverage/1699866926/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T02:21:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.5</code></th>
			<td><a href="ng_coverage/1699842115/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:29:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.2</code></th>
			<td><a href="ng_coverage/1699838986/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:29:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.3</code></th>
			<td><a href="ng_coverage/1699838946/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T01:23:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.9.0</code></th>
			<td><a href="ng_coverage/1699838612/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->