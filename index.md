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
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.10</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-17T01:18:07</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.10</code></th>
			<td><a href="execution/1718587087/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718587087/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718587087/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718587087/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718587087/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718587087/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718587087/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-17T01:17:47</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.7</code></th>
			<td><a href="execution/1718587067/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718587067/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718587067/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718587067/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718587067/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718587067/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718587067/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-17T00:50:20</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.3.0</code></th>
			<td><a href="execution/1718585420/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718585420/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718585420/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718585420/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718585420/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718585420/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718585420/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-17T00:49:46</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-release-plugin-3.1.0</code></th>
			<td><a href="execution/1718585386/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718585386/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718585386/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718585386/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718585386/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718585386/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718585386/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:16:04</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718280964/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718280964/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718280964/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718280964/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718280964/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718280964/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718280964/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:00:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/braces-3.0.3</code></th>
			<td><a href="execution/1718280024/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718280024/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718280024/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718280024/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718280024/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718280024/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718280024/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-13T11:59:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718279995/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718279995/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718279995/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718279995/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718279995/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718279995/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718279995/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-12T16:40:10</code></th>
			 <th><code>basis_cerrelation_fix</code></th>
			<td><a href="execution/1718210410/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718210410/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718210410/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718210410/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718210410/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718210410/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718210410/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T15:05:32</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718031932/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718031932/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718031932/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718031932/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718031932/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718031932/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718031932/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T14:50:39</code></th>
			 <th><code>filter_gui_tweaks</code></th>
			<td><a href="execution/1718031039/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718031039/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718031039/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718031039/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718031039/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718031039/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718031039/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T13:40:12</code></th>
			 <th><code>filter_gui_tweaks</code></th>
			<td><a href="execution/1718026812/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718026812/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718026812/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718026812/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718026812/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718026812/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718026812/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:48:12</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718005692/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718005692/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718005692/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718005692/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718005692/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718005692/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718005692/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:26:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="execution/1718004360/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718004360/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718004360/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718004360/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718004360/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718004360/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718004360/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:22:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="execution/1718004140/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718004140/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718004140/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718004140/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718004140/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718004140/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718004140/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:20:53</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718004053/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718004053/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718004053/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718004053/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718004053/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718004053/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718004053/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:20:35</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718004035/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718004035/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718004035/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718004035/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718004035/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718004035/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718004035/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:20:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1718004016/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1718004016/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1718004016/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1718004016/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1718004016/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1718004016/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1718004016/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:36:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.7</code></th>
			<td><a href="execution/1717983415/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717983415/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717983415/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717983415/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717983415/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717983415/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717983415/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:23:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="execution/1717982603/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717982603/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717982603/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717982603/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717982603/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717982603/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717982603/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:21:49</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.3</code></th>
			<td><a href="execution/1717982509/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1717982509/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1717982509/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1717982509/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1717982509/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1717982509/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1717982509/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.10</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-17T01:24:50</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.10</code></th>
			<td><a href="mutation/1718587490/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-17T00:56:10</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-release-plugin-3.1.0</code></th>
			<td><a href="mutation/1718585770/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-17T00:55:32</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.3.0</code></th>
			<td><a href="mutation/1718585732/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:22:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718281358/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:06:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718280405/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:06:27</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/braces-3.0.3</code></th>
			<td><a href="mutation/1718280387/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-12T16:47:01</code></th>
			 <th><code>basis_cerrelation_fix</code></th>
			<td><a href="mutation/1718210821/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T15:12:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718032338/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T14:56:42</code></th>
			 <th><code>filter_gui_tweaks</code></th>
			<td><a href="mutation/1718031402/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T13:46:34</code></th>
			 <th><code>filter_gui_tweaks</code></th>
			<td><a href="mutation/1718027194/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:54:30</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718006070/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:30:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="mutation/1718004652/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:28:49</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="mutation/1718004529/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:27:33</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718004453/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:27:11</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718004431/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:26:44</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718004404/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:25:28</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1718004328/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:42:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.7</code></th>
			<td><a href="mutation/1717983760/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:29:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="mutation/1717982991/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:27:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.3</code></th>
			<td><a href="mutation/1717982854/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.10</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-17T01:18:07</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-3.25.10</code></th>
			<td><a href="ng_coverage/1718587087/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-17T01:17:47</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.7</code></th>
			<td><a href="ng_coverage/1718587067/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-17T00:50:20</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.3.0</code></th>
			<td><a href="ng_coverage/1718585420/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-17T00:49:46</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-release-plugin-3.1.0</code></th>
			<td><a href="ng_coverage/1718585386/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:16:04</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718280964/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-13T12:00:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/braces-3.0.3</code></th>
			<td><a href="ng_coverage/1718280024/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-13T11:59:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718279995/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-12T16:40:10</code></th>
			 <th><code>basis_cerrelation_fix</code></th>
			<td><a href="ng_coverage/1718210410/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T15:05:32</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718031932/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T14:50:39</code></th>
			 <th><code>filter_gui_tweaks</code></th>
			<td><a href="ng_coverage/1718031039/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T13:40:12</code></th>
			 <th><code>filter_gui_tweaks</code></th>
			<td><a href="ng_coverage/1718026812/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:48:12</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718005692/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:26:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="ng_coverage/1718004360/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:22:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="ng_coverage/1718004140/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:20:53</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718004053/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:20:35</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718004035/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T07:20:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1718004016/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:36:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.7</code></th>
			<td><a href="ng_coverage/1717983415/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:23:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.7</code></th>
			<td><a href="ng_coverage/1717982603/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-06-10T01:21:49</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.3</code></th>
			<td><a href="ng_coverage/1717982509/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->