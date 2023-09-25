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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.1</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:38:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.1</code></th>
			<td><a href="execution/1695627495/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695627495/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695627495/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695627495/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695627495/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695627495/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695627495/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:33:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695627227/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695627227/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695627227/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695627227/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695627227/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695627227/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695627227/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:31:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695627117/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695627117/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695627117/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695627117/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695627117/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695627117/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695627117/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:24:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.3</code></th>
			<td><a href="execution/1695626646/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695626646/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695626646/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695626646/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695626646/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695626646/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695626646/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:23:25</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695626605/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695626605/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695626605/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695626605/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695626605/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695626605/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695626605/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:22:43</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
			<td><a href="execution/1695626563/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695626563/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695626563/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695626563/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695626563/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695626563/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695626563/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:22:02</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.1</code></th>
			<td><a href="execution/1695626522/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695626522/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695626522/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695626522/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695626522/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695626522/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695626522/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:18:25</code></th>
			 <th><code>dependabot/maven/com.h2database-h2-2.2.224</code></th>
			<td><a href="execution/1695626305/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695626305/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695626305/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695626305/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695626305/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695626305/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695626305/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T01:22:18</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.13.0</code></th>
			<td><a href="execution/1695604938/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695604938/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695604938/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695604938/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695604938/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695604938/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695604938/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T01:16:49</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
			<td><a href="execution/1695604609/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695604609/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695604609/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695604609/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695604609/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695604609/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695604609/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-25T01:13:22</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.5</code></th>
			<td><a href="execution/1695604402/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695604402/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695604402/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695604402/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695604402/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695604402/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695604402/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-22T21:42:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695418946/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695418946/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695418946/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695418946/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695418946/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695418946/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695418946/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-22T21:11:04</code></th>
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="execution/1695417064/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695417064/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695417064/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695417064/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695417064/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695417064/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695417064/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
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
		<tr> <th><code>2023-09-25T07:32:50</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
			<td><a href="mutation/1695627170/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-25T07:27:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.5</code></th>
			<td><a href="mutation/1695626835/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-25T01:34:40</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.13.0</code></th>
			<td><a href="mutation/1695605680/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-25T01:24:41</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
			<td><a href="mutation/1695605081/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-25T01:21:39</code></th>
			 <th><code>dependabot/maven/com.h2database-h2-2.2.224</code></th>
			<td><a href="mutation/1695604899/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-25T01:17:28</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.1</code></th>
			<td><a href="mutation/1695604648/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-25T01:14:05</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.3</code></th>
			<td><a href="mutation/1695604445/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-22T21:48:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695419325/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-22T21:19:15</code></th>
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="mutation/1695417555/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-09-22T19:46:54</code></th>
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="mutation/1695412014/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.1</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:38:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.1</code></th>
			<td><a href="ng_coverage/1695627495/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:33:47</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695627227/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:31:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695627117/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:24:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/dompurify-3.0.3</code></th>
			<td><a href="ng_coverage/1695626646/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:23:25</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695626605/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:22:43</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
			<td><a href="ng_coverage/1695626563/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:22:02</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.1</code></th>
			<td><a href="ng_coverage/1695626522/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:18:25</code></th>
			 <th><code>dependabot/maven/com.h2database-h2-2.2.224</code></th>
			<td><a href="ng_coverage/1695626305/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T01:22:18</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.13.0</code></th>
			<td><a href="ng_coverage/1695604938/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T01:16:49</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.0</code></th>
			<td><a href="ng_coverage/1695604609/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T01:13:22</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.5</code></th>
			<td><a href="ng_coverage/1695604402/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-22T21:42:26</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695418946/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-22T21:11:04</code></th>
			 <th><code>linux_bad_file_read</code></th>
			<td><a href="ng_coverage/1695417064/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->