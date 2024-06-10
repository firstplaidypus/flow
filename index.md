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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.2</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:20:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.2</code></th>
			<td><a href="execution/1717982406/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717982406/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717982406/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717982406/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717982406/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717982406/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717982406/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T00:14:19</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.8</code></th>
			<td><a href="execution/1717978459/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717978459/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717978459/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717978459/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717978459/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717978459/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717978459/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-07T11:56:41</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717761401/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717761401/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717761401/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717761401/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717761401/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717761401/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717761401/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-07T09:39:45</code></th>
			 <th><code>autobom</code></th>
			<td><a href="execution/1717753185/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717753185/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717753185/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717753185/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717753185/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717753185/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717753185/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-07T09:31:18</code></th>
			 <th><code>autobom</code></th>
			<td><a href="execution/1717752678/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717752678/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717752678/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717752678/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717752678/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717752678/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717752678/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-07T07:16:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717744583/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717744583/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717744583/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717744583/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717744583/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717744583/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717744583/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-06T15:59:49</code></th>
			 <th><code>dep_inherit</code></th>
			<td><a href="execution/1717689589/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717689589/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717689589/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717689589/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717689589/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717689589/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717689589/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:39:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717490353/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717490353/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717490353/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717490353/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717490353/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717490353/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717490353/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:37:44</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717490264/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717490264/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717490264/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717490264/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717490264/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717490264/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717490264/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:37:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717490236/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717490236/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717490236/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717490236/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717490236/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717490236/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717490236/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:36:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717490198/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717490198/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717490198/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717490198/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717490198/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717490198/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717490198/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:20:49</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1717489249/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717489249/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717489249/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717489249/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717489249/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717489249/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717489249/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-03T01:20:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.0</code></th>
			<td><a href="execution/1717377635/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717377635/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717377635/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717377635/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717377635/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717377635/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717377635/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:57:34</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.7</code></th>
			<td><a href="execution/1717376254/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717376254/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717376254/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717376254/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717376254/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717376254/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717376254/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:15:02</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.6.0</code></th>
			<td><a href="execution/1717373702/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717373702/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717373702/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717373702/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717373702/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717373702/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717373702/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:14:35</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.7.0</code></th>
			<td><a href="execution/1717373675/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717373675/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717373675/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717373675/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717373675/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717373675/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717373675/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:14:06</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.5.0</code></th>
			<td><a href="execution/1717373646/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717373646/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717373646/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717373646/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717373646/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717373646/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717373646/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.8</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T00:19:59</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.8</code></th>
			<td><a href="mutation/1717978799/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-07T12:02:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717761758/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-07T09:46:07</code></th>
			 <th><code>autobom</code></th>
			<td><a href="mutation/1717753567/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-07T09:37:18</code></th>
			 <th><code>autobom</code></th>
			<td><a href="mutation/1717753038/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-07T07:22:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717744965/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-06T16:05:54</code></th>
			 <th><code>dep_inherit</code></th>
			<td><a href="mutation/1717689954/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:44:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717490697/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:44:13</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717490653/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:43:51</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717490631/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:43:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717490609/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:27:21</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1717489641/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-03T01:27:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.0</code></th>
			<td><a href="mutation/1717378043/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-03T01:04:24</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.7</code></th>
			<td><a href="mutation/1717376664/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:21:07</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.5.0</code></th>
			<td><a href="mutation/1717374067/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:20:11</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.6.0</code></th>
			<td><a href="mutation/1717374011/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:19:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.7.0</code></th>
			<td><a href="mutation/1717373995/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:20:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1716801625/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:17:16</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1716801436/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:16:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1716801417/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-27T09:16:00</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1716801360/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.2</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:20:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.2</code></th>
			<td><a href="ng_coverage/1717982406/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T00:14:19</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.8</code></th>
			<td><a href="ng_coverage/1717978459/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-07T11:56:41</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717761401/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-07T09:39:45</code></th>
			 <th><code>autobom</code></th>
			<td><a href="ng_coverage/1717753185/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-07T09:31:18</code></th>
			 <th><code>autobom</code></th>
			<td><a href="ng_coverage/1717752678/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-07T07:16:23</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717744583/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-06T15:59:49</code></th>
			 <th><code>dep_inherit</code></th>
			<td><a href="ng_coverage/1717689589/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:39:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717490353/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:37:44</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717490264/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:37:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717490236/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:36:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717490198/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-04T08:20:49</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1717489249/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-03T01:20:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.14.0</code></th>
			<td><a href="ng_coverage/1717377635/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:57:34</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.7</code></th>
			<td><a href="ng_coverage/1717376254/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:15:02</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.6.0</code></th>
			<td><a href="ng_coverage/1717373702/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:14:35</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.7.0</code></th>
			<td><a href="ng_coverage/1717373675/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-03T00:14:06</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.5.0</code></th>
			<td><a href="ng_coverage/1717373646/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->