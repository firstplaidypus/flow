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
			 <th><code>junit-bom</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:33:36</code></th>
			 <th><code>junit-bom</code></th>
			<td><a href="execution/1690187616/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690187616/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690187616/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690187616/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690187616/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690187616/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690187616/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:08:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690186109/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690186109/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690186109/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690186109/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690186109/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690186109/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690186109/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:04:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690185894/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690185894/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690185894/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690185894/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690185894/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690185894/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690185894/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:16:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.0</code></th>
			<td><a href="execution/1690161370/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690161370/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690161370/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690161370/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690161370/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690161370/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690161370/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:14:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.4</code></th>
			<td><a href="execution/1690161276/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690161276/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690161276/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690161276/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690161276/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690161276/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690161276/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:59:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689580795/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689580795/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689580795/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689580795/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689580795/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689580795/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689580795/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:58:06</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689580686/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689580686/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689580686/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689580686/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689580686/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689580686/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689580686/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:22:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.2</code></th>
			<td><a href="execution/1689556956/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689556956/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689556956/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689556956/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689556956/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689556956/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689556956/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:21:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.9</code></th>
			<td><a href="execution/1689556919/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689556919/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689556919/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689556919/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689556919/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689556919/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689556919/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-14T11:43:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689335003/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689335003/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689335003/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689335003/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689335003/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689335003/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689335003/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2023-07-24T08:18:42</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690186722/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:12:39</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690186359/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:24:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.4</code></th>
			<td><a href="mutation/1690161874/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:22:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.0</code></th>
			<td><a href="mutation/1690161755/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-17T08:06:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689581206/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-17T08:06:05</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689581165/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:29:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.2</code></th>
			<td><a href="mutation/1689557361/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:28:48</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.9</code></th>
			<td><a href="mutation/1689557328/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-14T11:33:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689334418/mutation_report/index.html">mutation</a></td>
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
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>junit-bom</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:33:36</code></th>
			 <th><code>junit-bom</code></th>
			<td><a href="ng_coverage/1690187616/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:08:29</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690186109/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:04:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690185894/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:16:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.0</code></th>
			<td><a href="ng_coverage/1690161370/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:14:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.4</code></th>
			<td><a href="ng_coverage/1690161276/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:59:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689580795/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:58:06</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689580686/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:22:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.2</code></th>
			<td><a href="ng_coverage/1689556956/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:21:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.9</code></th>
			<td><a href="ng_coverage/1689556919/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-14T11:43:23</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689335003/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->