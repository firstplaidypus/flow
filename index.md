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
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:08:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="execution/1714352896/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352896/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352896/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352896/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352896/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352896/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352896/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:51</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="execution/1714352871/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352871/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352871/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352871/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352871/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352871/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352871/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:28</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.3</code></th>
			<td><a href="execution/1714352848/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352848/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352848/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352848/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352848/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352848/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352848/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:13:48</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713770028/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713770028/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713770028/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713770028/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713770028/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713770028/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713770028/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:12:44</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713769964/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769964/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769964/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769964/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769964/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769964/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769964/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:11:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713769871/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769871/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769871/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769871/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769871/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769871/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769871/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:10:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713769838/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769838/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769838/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769838/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769838/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769838/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769838/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:06:00</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.5</code></th>
			<td><a href="execution/1713769560/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769560/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769560/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769560/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769560/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769560/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769560/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:56:36</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.3</code></th>
			<td><a href="execution/1713747396/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713747396/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713747396/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713747396/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713747396/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713747396/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713747396/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:55:59</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.2</code></th>
			<td><a href="execution/1713747359/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713747359/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713747359/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713747359/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713747359/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713747359/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713747359/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:51:24</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.4</code></th>
			<td><a href="execution/1713747084/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713747084/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713747084/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713747084/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713747084/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713747084/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713747084/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:24:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713263041/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713263041/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713263041/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713263041/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713263041/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713263041/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713263041/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:23:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713262993/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713262993/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713262993/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713262993/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713262993/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713262993/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713262993/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:23:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713169409/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713169409/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713169409/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713169409/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713169409/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713169409/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713169409/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:22:31</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713169351/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713169351/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713169351/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713169351/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713169351/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713169351/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713169351/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:20:50</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713169250/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713169250/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713169250/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713169250/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713169250/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713169250/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713169250/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:20:15</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713169215/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713169215/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713169215/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713169215/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713169215/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713169215/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713169215/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:55:07</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="execution/1713142507/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142507/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142507/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142507/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142507/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142507/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142507/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:54:41</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.13</code></th>
			<td><a href="execution/1713142481/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142481/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142481/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142481/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142481/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142481/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142481/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:51:27</code></th>
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.5</code></th>
			<td><a href="execution/1713142287/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142287/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142287/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142287/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142287/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142287/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142287/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-04-29T01:13:10</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="mutation/1714353190/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:20:32</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770432/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:18:13</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770293/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:17:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770258/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:17:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770234/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:04:22</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.3</code></th>
			<td><a href="mutation/1713769462/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T01:03:39</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.5</code></th>
			<td><a href="mutation/1713747819/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T01:03:16</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.2</code></th>
			<td><a href="mutation/1713747796/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T00:57:16</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.4</code></th>
			<td><a href="mutation/1713747436/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-16T10:59:06</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td><a href="mutation/1713265146/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/aggregator/target/pit-reports/index.html">project_mutation_reports/aggregator/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/assert/assert-core/target/pit-reports/index.html">project_mutation_reports/assert/assert-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/assert/assert-filter/target/pit-reports/index.html">project_mutation_reports/assert/assert-filter/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/assert/assert-junit5/target/pit-reports/index.html">project_mutation_reports/assert/assert-junit5/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/report/duct/target/pit-reports/index.html">project_mutation_reports/report/duct/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:29:44</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713263384/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-16T10:16:45</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.3</code></th>
			<td><a href="mutation/1713262605/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T08:32:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713169956/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T08:28:33</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713169713/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T08:27:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713169621/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T08:26:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713169597/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T01:01:15</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="mutation/1713142875/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T00:58:06</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.13</code></th>
			<td><a href="mutation/1713142686/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T00:57:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.7</code></th>
			<td><a href="mutation/1713142655/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T00:57:15</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.0</code></th>
			<td><a href="mutation/1713142635/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:08:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="ng_coverage/1714352896/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:51</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="ng_coverage/1714352871/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:28</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.3</code></th>
			<td><a href="ng_coverage/1714352848/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:13:48</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713770028/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:12:44</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713769964/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:11:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713769871/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:10:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713769838/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:06:00</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.5</code></th>
			<td><a href="ng_coverage/1713769560/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:56:36</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.3</code></th>
			<td><a href="ng_coverage/1713747396/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:55:59</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.2</code></th>
			<td><a href="ng_coverage/1713747359/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:51:24</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.4</code></th>
			<td><a href="ng_coverage/1713747084/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:24:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713263041/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:23:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713262993/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:23:29</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713169409/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:22:31</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713169351/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:20:50</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713169250/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T08:20:15</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713169215/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:55:07</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="ng_coverage/1713142507/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:54:41</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.13</code></th>
			<td><a href="ng_coverage/1713142481/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:51:27</code></th>
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.5</code></th>
			<td><a href="ng_coverage/1713142287/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->