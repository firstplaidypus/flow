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
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-22T19:39:05</code></th>
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="execution/1695411545/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695411545/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695411545/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695411545/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695411545/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695411545/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695411545/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-21T15:05:32</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695308732/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695308732/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695308732/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695308732/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695308732/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695308732/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695308732/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-21T14:24:55</code></th>
			 <th><code>rm_avoid_on_release</code></th>
			<td><a href="execution/1695306295/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695306295/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695306295/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695306295/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695306295/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695306295/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695306295/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-21T12:16:09</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695298569/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695298569/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695298569/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695298569/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695298569/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695298569/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695298569/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-21T10:54:22</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="execution/1695293662/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695293662/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695293662/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695293662/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695293662/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695293662/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695293662/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-21T10:02:30</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="execution/1695290550/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695290550/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695290550/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695290550/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695290550/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695290550/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695290550/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-20T10:10:21</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="execution/1695204621/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695204621/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695204621/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695204621/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695204621/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695204621/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695204621/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-19T15:04:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695135887/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695135887/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695135887/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695135887/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695135887/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695135887/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695135887/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-19T14:06:39</code></th>
			 <th><code>sut_highlight</code></th>
			<td><a href="execution/1695132399/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695132399/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695132399/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695132399/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695132399/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695132399/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695132399/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2023-09-21T15:07:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695308843/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-21T14:31:27</code></th>
			 <th><code>rm_avoid_on_release</code></th>
			<td><a href="mutation/1695306687/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-21T12:53:33</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td><a href="mutation/1695300813/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1695300813/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-09-21T11:00:01</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="mutation/1695294001/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-21T10:08:27</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="mutation/1695290907/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-19T15:14:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695136480/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-19T14:13:32</code></th>
			 <th><code>sut_highlight</code></th>
			<td><a href="mutation/1695132812/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-18T11:10:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695035438/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-18T10:49:54</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.14.0</code></th>
			<td></td>
			<td><a href="mutation/1695034194/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1695034194/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-22T19:39:05</code></th>
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="ng_coverage/1695411545/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-21T15:05:32</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695308732/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-21T14:24:55</code></th>
			 <th><code>rm_avoid_on_release</code></th>
			<td><a href="ng_coverage/1695306295/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-21T12:16:09</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695298569/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-21T10:54:22</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="ng_coverage/1695293662/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-21T10:02:30</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="ng_coverage/1695290550/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-20T10:10:21</code></th>
			 <th><code>lazy_model_tagging_check</code></th>
			<td><a href="ng_coverage/1695204621/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-19T15:04:47</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695135887/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-19T14:06:39</code></th>
			 <th><code>sut_highlight</code></th>
			<td><a href="ng_coverage/1695132399/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->