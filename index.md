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
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.1.2</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2023-06-05T11:03:03</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685962983/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:20:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685960416/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:19:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685960358/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:17:45</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685960265/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:17:12</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685960232/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:11:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685959877/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:09:14</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685959754/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-05T09:58:28</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685959108/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2023-06-05T10:26:47</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1685960807/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:16:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1685960206/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:15:38</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685960138/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T10:04:40</code></th>
			 <th><code>diff_component</code></th>
			<td><a href="mutation/1685959480/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T01:39:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.5.3</code></th>
			<td><a href="mutation/1685929150/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-05T01:38:42</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.3.6</code></th>
			<td><a href="mutation/1685929122/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.1.2</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
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