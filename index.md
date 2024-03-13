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
			 <th><code>diff_doc</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:17:58</code></th>
			 <th><code>diff_doc</code></th>
			<td><a href="execution/1710321478/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710321478/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710321478/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710321478/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710321478/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710321478/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710321478/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:56:21</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710147381/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710147381/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710147381/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710147381/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710147381/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710147381/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710147381/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:31:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.0</code></th>
			<td><a href="execution/1710145873/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710145873/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710145873/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710145873/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710145873/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710145873/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710145873/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:24:24</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710145464/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710145464/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710145464/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710145464/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710145464/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710145464/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710145464/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710144973/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710144973/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710144973/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710144973/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710144973/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710144973/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710144973/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:30:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.25</code></th>
			<td><a href="execution/1710120610/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710120610/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710120610/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710120610/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710120610/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710120610/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710120610/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:15:23</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.2</code></th>
			<td><a href="execution/1710119723/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710119723/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710119723/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710119723/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710119723/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710119723/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710119723/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:14:33</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.1</code></th>
			<td><a href="execution/1710119673/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710119673/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710119673/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710119673/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710119673/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710119673/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710119673/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:32:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709821940/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709821940/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709821940/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709821940/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709821940/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709821940/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709821940/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:14:16</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="execution/1709820856/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709820856/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709820856/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709820856/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709820856/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709820856/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709820856/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T13:53:35</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="execution/1709819615/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709819615/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709819615/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709819615/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709819615/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709819615/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709819615/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T13:09:48</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="execution/1709816988/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709816988/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709816988/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709816988/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709816988/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709816988/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709816988/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:56:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709808973/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709808973/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709808973/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709808973/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709808973/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709808973/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709808973/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:49:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709808573/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709808573/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709808573/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709808573/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709808573/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709808573/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709808573/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:45:29</code></th>
			 <th><code>local_node_install</code></th>
			<td><a href="execution/1709808329/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709808329/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709808329/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709808329/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709808329/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709808329/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709808329/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:39:18</code></th>
			 <th><code>sysout_noise</code></th>
			<td><a href="execution/1709804358/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709804358/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709804358/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709804358/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709804358/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709804358/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709804358/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:28:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709803737/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709803737/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709803737/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709803737/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709803737/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709803737/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709803737/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:28:37</code></th>
			 <th><code>release_node_version</code></th>
			<td><a href="execution/1709803717/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709803717/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709803717/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709803717/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709803717/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709803717/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709803717/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-06T11:02:42</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709722962/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709722962/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709722962/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709722962/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709722962/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709722962/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709722962/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-06T10:42:00</code></th>
			 <th><code>mutant_hunt</code></th>
			<td><a href="execution/1709721720/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709721720/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709721720/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709721720/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709721720/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709721720/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709721720/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			<td></td>
		</tr>
		<tr> <th><code>2024-03-11T09:03:13</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710147793/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-11T08:37:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.0</code></th>
			<td><a href="mutation/1710146262/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-11T08:27:55</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710145675/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-11T08:21:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710145301/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-11T01:36:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.25</code></th>
			<td><a href="mutation/1710121003/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-11T01:19:16</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.2</code></th>
			<td><a href="mutation/1710119956/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-11T01:18:53</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.1</code></th>
			<td><a href="mutation/1710119933/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-07T14:36:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1709822186/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-07T14:20:43</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="mutation/1709821243/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-07T10:52:12</code></th>
			 <th><code>local_node_install</code></th>
			<td><a href="mutation/1709808732/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-07T09:44:26</code></th>
			 <th><code>sysout_noise</code></th>
			<td><a href="mutation/1709804666/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-07T09:34:35</code></th>
			 <th><code>release_node_version</code></th>
			<td><a href="mutation/1709804075/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-06T11:08:56</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1709723336/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-06T10:48:51</code></th>
			 <th><code>mutant_hunt</code></th>
			<td><a href="mutation/1709722131/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-06T10:40:55</code></th>
			 <th><code>mutant_hunt</code></th>
			<td><a href="mutation/1709721655/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-06T09:03:22</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td><a href="mutation/1709715802/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1709715802/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-03-05T17:26:30</code></th>
			 <th><code>sql_row_count</code></th>
			<td><a href="mutation/1709659590/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-04T09:27:05</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1709544425/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-04T09:10:28</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1709543428/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-04T09:08:56</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.1</code></th>
			<td></td>
			<td><a href="mutation/1709543336/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1709543336/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
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
			 <th><code>diff_doc</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:17:58</code></th>
			 <th><code>diff_doc</code></th>
			<td><a href="ng_coverage/1710321478/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:56:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710147381/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:31:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.0</code></th>
			<td><a href="ng_coverage/1710145873/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:24:24</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710145464/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710144973/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:30:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.25</code></th>
			<td><a href="ng_coverage/1710120610/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:15:23</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.2</code></th>
			<td><a href="ng_coverage/1710119723/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:14:33</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.1</code></th>
			<td><a href="ng_coverage/1710119673/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:32:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709821940/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:14:16</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="ng_coverage/1709820856/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T13:53:35</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="ng_coverage/1709819615/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T13:09:48</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="ng_coverage/1709816988/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:56:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709808973/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:49:33</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709808573/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:45:29</code></th>
			 <th><code>local_node_install</code></th>
			<td><a href="ng_coverage/1709808329/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:39:18</code></th>
			 <th><code>sysout_noise</code></th>
			<td><a href="ng_coverage/1709804358/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:28:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709803737/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:28:37</code></th>
			 <th><code>release_node_version</code></th>
			<td><a href="ng_coverage/1709803717/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-06T11:02:42</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709722962/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-06T10:42:00</code></th>
			 <th><code>mutant_hunt</code></th>
			<td><a href="ng_coverage/1709721720/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->