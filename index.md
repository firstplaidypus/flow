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
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2024-03-06T10:34:38</code></th>
			 <th><code>mutant_hunt</code></th>
			<td><a href="execution/1709721278/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709721278/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709721278/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709721278/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709721278/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709721278/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709721278/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-06T08:40:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709714457/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709714457/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709714457/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709714457/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709714457/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709714457/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709714457/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-05T17:19:46</code></th>
			 <th><code>sql_row_count</code></th>
			<td><a href="execution/1709659186/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709659186/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709659186/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709659186/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709659186/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709659186/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709659186/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:20:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709544018/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709544018/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709544018/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709544018/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709544018/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709544018/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709544018/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:19:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709543978/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709543978/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709543978/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709543978/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709543978/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709543978/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709543978/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:03:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709543035/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709543035/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709543035/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709543035/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709543035/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709543035/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709543035/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:03:31</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709543011/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709543011/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709543011/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709543011/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709543011/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709543011/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709543011/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:00:52</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709542852/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709542852/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709542852/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709542852/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709542852/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709542852/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709542852/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:33:08</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.24</code></th>
			<td><a href="execution/1709515988/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709515988/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709515988/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709515988/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709515988/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709515988/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709515988/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:22:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="execution/1709515350/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709515350/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709515350/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709515350/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709515350/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709515350/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709515350/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>local_node_install</code></th>
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
		<tr> <th><code>2024-03-04T09:07:23</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.4</code></th>
			<td></td>
			<td><a href="mutation/1709543243/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1709543243/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:39:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.24</code></th>
			<td><a href="mutation/1709516374/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-04T01:29:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="mutation/1709515765/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-03-04T00:32:04</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.1.0</code></th>
			<td><a href="mutation/1709512324/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-02-26T09:36:10</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708940170/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-02-26T09:22:09</code></th>
			 <th><code>mermaid_links_disable</code></th>
			<td></td>
			<td><a href="mutation/1708939329/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1708939329/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-02-26T08:38:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708936683/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-02-26T08:22:52</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708935772/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-02-26T08:22:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.20</code></th>
			<td></td>
			<td><a href="mutation/1708935748/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1708935748/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
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
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
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
		<tr> <th><code>2024-03-06T10:34:38</code></th>
			 <th><code>mutant_hunt</code></th>
			<td><a href="ng_coverage/1709721278/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-06T08:40:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709714457/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-05T17:19:46</code></th>
			 <th><code>sql_row_count</code></th>
			<td><a href="ng_coverage/1709659186/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:20:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709544018/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:19:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709543978/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:03:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709543035/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:03:31</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709543011/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T09:00:52</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709542852/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:33:08</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.24</code></th>
			<td><a href="ng_coverage/1709515988/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-04T01:22:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.0</code></th>
			<td><a href="ng_coverage/1709515350/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->