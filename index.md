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
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.3.0</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:17:11</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.3.0</code></th>
			<td><a href="execution/1716769031/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716769031/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716769031/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716769031/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716769031/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716769031/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716769031/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-20T09:03:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716195803/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716195803/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716195803/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716195803/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716195803/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716195803/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716195803/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-20T09:02:43</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716195763/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716195763/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716195763/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716195763/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716195763/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716195763/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716195763/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:50:23</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-4.0.0</code></th>
			<td><a href="execution/1716166223/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716166223/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716166223/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716166223/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716166223/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716166223/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716166223/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:48:45</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.6</code></th>
			<td><a href="execution/1716166125/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716166125/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716166125/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716166125/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716166125/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716166125/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716166125/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:48:21</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.5</code></th>
			<td><a href="execution/1716166101/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716166101/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716166101/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716166101/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716166101/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716166101/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716166101/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:59:59</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715587199/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715587199/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715587199/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715587199/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715587199/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715587199/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715587199/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:58:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715587094/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715587094/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715587094/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715587094/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715587094/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715587094/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715587094/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:57:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715587071/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715587071/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715587071/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715587071/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715587071/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715587071/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715587071/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:56:21</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715586981/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715586981/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715586981/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715586981/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715586981/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715586981/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715586981/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:55:49</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715586949/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715586949/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715586949/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715586949/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715586949/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715586949/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715586949/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:58:27</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.11</code></th>
			<td><a href="execution/1715561907/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715561907/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715561907/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715561907/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715561907/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715561907/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715561907/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:51:14</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="execution/1715561474/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715561474/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715561474/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715561474/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715561474/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715561474/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715561474/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:50:55</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.1</code></th>
			<td><a href="execution/1715561455/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715561455/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715561455/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715561455/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715561455/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715561455/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715561455/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:11:20</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.3</code></th>
			<td><a href="execution/1715559080/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715559080/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715559080/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715559080/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715559080/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715559080/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715559080/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:10:47</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.5</code></th>
			<td><a href="execution/1715559047/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715559047/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715559047/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715559047/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715559047/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715559047/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715559047/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:03:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079781/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079781/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079781/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079781/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079781/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079781/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079781/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079651/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079651/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079651/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079651/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079651/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079651/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079651/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:30</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079630/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079630/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079630/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079630/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079630/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079630/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079630/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T10:56:40</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079400/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079400/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079400/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079400/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079400/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079400/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079400/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2024-05-20T09:09:06</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1716196146/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-20T09:08:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1716196109/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:55:57</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-4.0.0</code></th>
			<td><a href="mutation/1716166557/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:55:40</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.6</code></th>
			<td><a href="mutation/1716166540/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:55:15</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.5</code></th>
			<td><a href="mutation/1716166515/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T08:07:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715587634/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T08:04:56</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715587496/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T08:04:39</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715587479/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T08:03:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715587403/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T08:02:59</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715587379/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T01:03:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.11</code></th>
			<td><a href="mutation/1715562234/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:57:16</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.1</code></th>
			<td><a href="mutation/1715561836/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:56:42</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="mutation/1715561802/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:17:56</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.5</code></th>
			<td><a href="mutation/1715559476/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:16:54</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.3</code></th>
			<td><a href="mutation/1715559414/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:08:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080081/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:07:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080061/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:07:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080043/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:06:54</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080014/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:02:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715079745/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.3.0</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:17:11</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.3.0</code></th>
			<td><a href="ng_coverage/1716769031/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-20T09:03:23</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716195803/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-20T09:02:43</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716195763/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:50:23</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-4.0.0</code></th>
			<td><a href="ng_coverage/1716166223/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:48:45</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.6</code></th>
			<td><a href="ng_coverage/1716166125/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-20T00:48:21</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.5</code></th>
			<td><a href="ng_coverage/1716166101/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:59:59</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715587199/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:58:14</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715587094/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:57:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715587071/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:56:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715586981/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T07:55:49</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715586949/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:58:27</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.11</code></th>
			<td><a href="ng_coverage/1715561907/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:51:14</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="ng_coverage/1715561474/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:50:55</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.1</code></th>
			<td><a href="ng_coverage/1715561455/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:11:20</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.3</code></th>
			<td><a href="ng_coverage/1715559080/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:10:47</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.5</code></th>
			<td><a href="ng_coverage/1715559047/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:03:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079781/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079651/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:30</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079630/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T10:56:40</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079400/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->