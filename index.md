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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:58:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="execution/1705885094/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705885094/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705885094/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705885094/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705885094/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705885094/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705885094/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:57:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.7.0</code></th>
			<td><a href="execution/1705885066/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705885066/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705885066/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705885066/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705885066/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705885066/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705885066/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:41:45</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.4</code></th>
			<td><a href="execution/1705884105/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705884105/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705884105/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705884105/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705884105/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705884105/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705884105/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:18:32</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.2.0</code></th>
			<td><a href="execution/1705882712/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705882712/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705882712/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705882712/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705882712/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705882712/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705882712/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:17:59</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.0</code></th>
			<td><a href="execution/1705882679/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705882679/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705882679/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705882679/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705882679/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705882679/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705882679/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-16T10:17:31</code></th>
			 <th><code>rm_yarn</code></th>
			<td><a href="execution/1705400251/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705400251/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705400251/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705400251/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705400251/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705400251/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705400251/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:37:08</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705311428/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705311428/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705311428/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705311428/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705311428/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705311428/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705311428/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:35:31</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705311331/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705311331/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705311331/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705311331/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705311331/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705311331/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705311331/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:32:24</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705311144/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705311144/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705311144/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705311144/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705311144/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705311144/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705311144/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:31:50</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705311110/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705311110/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705311110/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705311110/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705311110/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705311110/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705311110/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:31:09</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705311069/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705311069/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705311069/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705311069/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705311069/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705311069/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705311069/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:27:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705310838/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705310838/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705310838/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705310838/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705310838/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705310838/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705310838/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:26:25</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.1.0</code></th>
			<td><a href="execution/1705310785/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705310785/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705310785/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705310785/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705310785/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705310785/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705310785/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:20:43</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="execution/1705310443/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705310443/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705310443/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705310443/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705310443/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705310443/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705310443/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:18:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.1</code></th>
			<td><a href="execution/1705310313/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705310313/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705310313/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705310313/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705310313/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705310313/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705310313/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:15:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="execution/1705310155/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705310155/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705310155/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705310155/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705310155/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705310155/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705310155/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:13:14</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="execution/1705309994/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309994/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309994/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309994/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309994/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309994/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309994/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:50</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="execution/1705309910/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309910/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309910/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309910/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309910/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309910/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309910/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:24</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="execution/1705309884/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309884/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309884/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309884/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309884/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309884/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309884/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:01:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705309307/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705309307/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705309307/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705309307/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705309307/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705309307/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705309307/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.4</code></th>
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
		<tr> <th><code>2024-01-22T00:45:40</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.4</code></th>
			<td><a href="mutation/1705884340/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T00:25:48</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.2.0</code></th>
			<td><a href="mutation/1705883148/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T00:23:59</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.0</code></th>
			<td><a href="mutation/1705883039/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-16T10:32:10</code></th>
			 <th><code>rm_yarn</code></th>
			<td></td>
			<td><a href="mutation/1705401130/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1705401130/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:42:27</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311747/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:42:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311724/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:37:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311458/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:36:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311382/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:35:58</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311358/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:34:10</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311250/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:33:44</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705311224/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:26:53</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.1</code></th>
			<td><a href="mutation/1705310813/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:21:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="mutation/1705310512/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:21:21</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="mutation/1705310481/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:18:04</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.1.0</code></th>
			<td><a href="mutation/1705310284/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:17:37</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="mutation/1705310257/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:17:13</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="mutation/1705310233/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:16:22</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="mutation/1705310182/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T09:10:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705309823/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-15T08:48:29</code></th>
			 <th><code>sonar_java_bump</code></th>
			<td><a href="mutation/1705308509/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:58:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="ng_coverage/1705885094/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:57:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.7.0</code></th>
			<td><a href="ng_coverage/1705885066/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:41:45</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.4</code></th>
			<td><a href="ng_coverage/1705884105/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:18:32</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.2.0</code></th>
			<td><a href="ng_coverage/1705882712/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T00:17:59</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.0</code></th>
			<td><a href="ng_coverage/1705882679/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-16T10:17:31</code></th>
			 <th><code>rm_yarn</code></th>
			<td><a href="ng_coverage/1705400251/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:37:08</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705311428/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:35:31</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705311331/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:32:24</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705311144/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:31:50</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705311110/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:31:09</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705311069/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:27:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705310838/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:26:25</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.1.0</code></th>
			<td><a href="ng_coverage/1705310785/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:20:43</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.11</code></th>
			<td><a href="ng_coverage/1705310443/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:18:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.1</code></th>
			<td><a href="ng_coverage/1705310313/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:15:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.3</code></th>
			<td><a href="ng_coverage/1705310155/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:13:14</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.5</code></th>
			<td><a href="ng_coverage/1705309994/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:50</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.3</code></th>
			<td><a href="ng_coverage/1705309910/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:11:24</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.1</code></th>
			<td><a href="ng_coverage/1705309884/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-15T09:01:47</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705309307/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->