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
			 <th><code>tab_display</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-14T10:58:43</code></th>
			 <th><code>tab_display</code></th>
			<td><a href="execution/1689332323/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689332323/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689332323/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689332323/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689332323/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689332323/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689332323/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-13T20:28:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689280109/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689280109/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689280109/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689280109/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689280109/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689280109/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689280109/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-13T16:41:05</code></th>
			 <th><code>query_convenience</code></th>
			<td><a href="execution/1689266465/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689266465/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689266465/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689266465/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689266465/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689266465/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689266465/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-13T11:53:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689249194/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689249194/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689249194/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689249194/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689249194/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689249194/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689249194/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-13T08:45:20</code></th>
			 <th><code>bom</code></th>
			<td><a href="execution/1689237920/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689237920/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689237920/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689237920/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689237920/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689237920/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689237920/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-12T16:15:43</code></th>
			 <th><code>bom</code></th>
			<td><a href="execution/1689178543/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689178543/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689178543/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689178543/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689178543/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689178543/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689178543/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-12T13:59:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689170341/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689170341/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689170341/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689170341/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689170341/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689170341/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689170341/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-12T13:36:26</code></th>
			 <th><code>diagram_controls</code></th>
			<td><a href="execution/1689168986/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689168986/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689168986/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689168986/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689168986/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689168986/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689168986/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-12T08:05:19</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689149119/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689149119/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689149119/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689149119/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689149119/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689149119/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689149119/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-12T04:26:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/semver-5.7.2</code></th>
			<td><a href="execution/1689135983/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689135983/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689135983/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689135983/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689135983/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689135983/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689135983/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:58:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689073103/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689073103/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689073103/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689073103/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689073103/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689073103/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689073103/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:39:21</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="execution/1689071961/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689071961/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689071961/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689071961/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689071961/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689071961/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689071961/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:17:46</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="execution/1689070666/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689070666/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689070666/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689070666/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689070666/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689070666/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689070666/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T16:05:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689005120/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689005120/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689005120/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689005120/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689005120/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689005120/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689005120/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T15:53:03</code></th>
			 <th><code>sonar_coverage</code></th>
			<td><a href="execution/1689004383/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689004383/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689004383/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689004383/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689004383/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689004383/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689004383/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T14:02:41</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1688997761/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1688997761/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1688997761/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1688997761/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1688997761/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1688997761/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1688997761/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T13:40:01</code></th>
			 <th><code>system_diagram_test</code></th>
			<td><a href="execution/1688996401/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1688996401/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1688996401/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1688996401/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1688996401/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1688996401/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1688996401/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T13:22:03</code></th>
			 <th><code>system_diagram_test</code></th>
			<td><a href="execution/1688995323/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1688995323/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1688995323/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1688995323/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1688995323/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1688995323/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1688995323/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T07:47:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1688975253/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1688975253/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1688975253/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1688975253/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1688975253/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1688975253/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1688975253/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-10T07:45:39</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1688975139/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1688975139/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1688975139/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1688975139/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1688975139/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1688975139/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1688975139/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>tab_display</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-14T11:06:50</code></th>
			 <th><code>tab_display</code></th>
			<td><a href="mutation/1689332810/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-14T09:11:55</code></th>
			 <th><code>tab_display</code></th>
			<td><a href="mutation/1689325915/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-13T20:34:24</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689280464/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-13T16:53:34</code></th>
			 <th><code>query_convenience</code></th>
			<td><a href="mutation/1689267214/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-13T10:49:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689245374/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-13T08:55:04</code></th>
			 <th><code>bom</code></th>
			<td><a href="mutation/1689238504/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-12T16:28:20</code></th>
			 <th><code>bom</code></th>
			<td><a href="mutation/1689179300/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-12T14:03:43</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689170623/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-12T13:44:00</code></th>
			 <th><code>diagram_controls</code></th>
			<td><a href="mutation/1689169440/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-12T13:21:10</code></th>
			 <th><code>diagram_controls</code></th>
			<td><a href="mutation/1689168070/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-12T08:08:08</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689149288/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-12T04:37:18</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/semver-5.7.2</code></th>
			<td><a href="mutation/1689136638/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-11T11:04:56</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689073496/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:46:03</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="mutation/1689072363/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:29:50</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="mutation/1689071390/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-11T09:59:48</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="mutation/1689069588/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-11T09:52:10</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="mutation/1689069130/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-10T16:13:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689005583/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-10T16:00:33</code></th>
			 <th><code>sonar_coverage</code></th>
			<td><a href="mutation/1689004833/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-10T14:10:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1688998201/mutation_report/index.html">mutation</a></td>
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
			 <th><code>tab_display</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-14T10:58:43</code></th>
			 <th><code>tab_display</code></th>
			<td><a href="ng_coverage/1689332323/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-13T20:28:29</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689280109/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-13T16:41:05</code></th>
			 <th><code>query_convenience</code></th>
			<td><a href="ng_coverage/1689266465/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-13T11:53:14</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689249194/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-13T08:45:20</code></th>
			 <th><code>bom</code></th>
			<td><a href="ng_coverage/1689237920/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-12T16:15:43</code></th>
			 <th><code>bom</code></th>
			<td><a href="ng_coverage/1689178543/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-12T13:59:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689170341/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-12T13:36:26</code></th>
			 <th><code>diagram_controls</code></th>
			<td><a href="ng_coverage/1689168986/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-12T08:05:19</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689149119/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-12T04:26:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/semver-5.7.2</code></th>
			<td><a href="ng_coverage/1689135983/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:58:23</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689073103/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:39:21</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="ng_coverage/1689071961/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-11T10:17:46</code></th>
			 <th><code>diagram_perf</code></th>
			<td><a href="ng_coverage/1689070666/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T16:05:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689005120/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T15:53:03</code></th>
			 <th><code>sonar_coverage</code></th>
			<td><a href="ng_coverage/1689004383/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T14:02:41</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1688997761/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T13:40:01</code></th>
			 <th><code>system_diagram_test</code></th>
			<td><a href="ng_coverage/1688996401/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T13:22:03</code></th>
			 <th><code>system_diagram_test</code></th>
			<td><a href="ng_coverage/1688995323/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T07:47:33</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1688975253/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-10T07:45:39</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1688975139/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->