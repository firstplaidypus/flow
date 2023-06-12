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
		<tr> <th><code>2023-06-12T07:22:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554571/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554571/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554571/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554571/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554571/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554571/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554571/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:22:10</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554530/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554530/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554530/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554530/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554530/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554530/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554530/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:20:05</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554405/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554405/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554405/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554405/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554405/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554405/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554405/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:18:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554300/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554300/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554300/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554300/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554300/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554300/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554300/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:10:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.5</code></th>
			<td><a href="execution/1686553810/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686553810/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686553810/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686553810/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686553810/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686553810/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686553810/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:40:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="execution/1686534016/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686534016/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686534016/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686534016/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686534016/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686534016/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686534016/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:35</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.13.4</code></th>
			<td><a href="execution/1686533555/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686533555/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686533555/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686533555/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686533555/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686533555/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686533555/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:08</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.3</code></th>
			<td><a href="execution/1686533528/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686533528/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686533528/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686533528/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686533528/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686533528/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686533528/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:30:31</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.1.2</code></th>
			<td><a href="execution/1686533431/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686533431/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686533431/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686533431/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686533431/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686533431/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686533431/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:24:26</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.10.0</code></th>
			<td><a href="execution/1686533066/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686533066/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686533066/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686533066/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686533066/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686533066/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686533066/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-09T08:34:48</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686299688/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686299688/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686299688/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686299688/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686299688/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686299688/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686299688/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-09T08:18:37</code></th>
			 <th><code>fix_link</code></th>
			<td><a href="execution/1686298717/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686298717/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686298717/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686298717/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686298717/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686298717/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686298717/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-07T13:45:56</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686145556/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686145556/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686145556/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686145556/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686145556/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686145556/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686145556/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-07T13:11:40</code></th>
			 <th><code>angular_tests</code></th>
			<td><a href="execution/1686143500/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686143500/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686143500/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686143500/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686143500/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686143500/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686143500/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-06T15:44:53</code></th>
			 <th><code>angular_tests</code></th>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686066293/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T14:30:37</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685975437/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T14:15:41</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685974541/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T13:02:46</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685970166/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T12:26:56</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685968016/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T12:15:44</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685967344/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:46:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="mutation/1686534400/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:41:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.0</code></th>
			<td><a href="mutation/1686534103/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:39:13</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.13.4</code></th>
			<td><a href="mutation/1686533953/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:38:40</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.3</code></th>
			<td><a href="mutation/1686533920/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:34:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.5</code></th>
			<td><a href="mutation/1686533666/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:30:56</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.1.2</code></th>
			<td><a href="mutation/1686533456/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-09T08:43:15</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686300195/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-09T08:25:58</code></th>
			 <th><code>fix_link</code></th>
			<td><a href="mutation/1686299158/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-07T13:52:32</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686145952/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-07T13:18:05</code></th>
			 <th><code>angular_tests</code></th>
			<td><a href="mutation/1686143885/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-06T15:51:24</code></th>
			 <th><code>angular_tests</code></th>
			<td><a href="mutation/1686066684/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T14:39:43</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1685975983/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T14:21:31</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685974891/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T13:08:39</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685970519/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T12:39:10</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685968750/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T12:32:14</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685968334/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T12:23:23</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685967803/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T11:05:29</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685963129/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:28:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1685960914/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:27:16</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1685960836/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-06-12T07:22:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554571/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:22:10</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554530/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:20:05</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554405/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:18:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554300/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:10:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.5</code></th>
			<td><a href="ng_coverage/1686553810/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:40:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="ng_coverage/1686534016/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:35</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.13.4</code></th>
			<td><a href="ng_coverage/1686533555/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:08</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.3</code></th>
			<td><a href="ng_coverage/1686533528/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:30:31</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.1.2</code></th>
			<td><a href="ng_coverage/1686533431/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:24:26</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.10.0</code></th>
			<td><a href="ng_coverage/1686533066/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-09T08:34:48</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686299688/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-09T08:18:37</code></th>
			 <th><code>fix_link</code></th>
			<td><a href="ng_coverage/1686298717/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-07T13:45:56</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686145556/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-07T13:11:40</code></th>
			 <th><code>angular_tests</code></th>
			<td><a href="ng_coverage/1686143500/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->