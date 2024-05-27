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
		<tr> <th><code>2024-05-27T09:12:52</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716801172/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716801172/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716801172/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716801172/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716801172/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716801172/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716801172/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:10:43</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716801043/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716801043/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716801043/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716801043/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716801043/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716801043/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716801043/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:10:04</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716801004/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716801004/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716801004/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716801004/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716801004/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716801004/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716801004/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:09:43</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716800983/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716800983/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716800983/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716800983/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716800983/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716800983/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716800983/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:09:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1716800960/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716800960/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716800960/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716800960/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716800960/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716800960/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716800960/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:10:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.6</code></th>
			<td><a href="execution/1716772243/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716772243/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716772243/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716772243/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716772243/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716772243/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716772243/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:07:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.1</code></th>
			<td><a href="execution/1716772040/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716772040/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716772040/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716772040/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716772040/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716772040/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716772040/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:03:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.12</code></th>
			<td><a href="execution/1716771839/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716771839/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716771839/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716771839/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716771839/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716771839/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716771839/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:59:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.6</code></th>
			<td><a href="execution/1716771574/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716771574/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716771574/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716771574/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716771574/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716771574/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716771574/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:50:29</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.6</code></th>
			<td><a href="execution/1716771029/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1716771029/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1716771029/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1716771029/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1716771029/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1716771029/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1716771029/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.6</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:16:44</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.6</code></th>
			<td><a href="mutation/1716772604/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:13:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.1</code></th>
			<td><a href="mutation/1716772434/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:11:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.12</code></th>
			<td><a href="mutation/1716772283/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:06:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.6</code></th>
			<td><a href="mutation/1716772000/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:56:53</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.6</code></th>
			<td><a href="mutation/1716771413/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:23:53</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.3.0</code></th>
			<td><a href="mutation/1716769433/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2024-05-27T09:12:52</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716801172/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:10:43</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716801043/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:10:04</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716801004/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:09:43</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716800983/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:09:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1716800960/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:10:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.6</code></th>
			<td><a href="ng_coverage/1716772243/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:07:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.1</code></th>
			<td><a href="ng_coverage/1716772040/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T01:03:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.12</code></th>
			<td><a href="ng_coverage/1716771839/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:59:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.6</code></th>
			<td><a href="ng_coverage/1716771574/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-27T00:50:29</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.6</code></th>
			<td><a href="ng_coverage/1716771029/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->