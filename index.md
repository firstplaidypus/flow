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
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T09:31:59</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1692610319/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692610319/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692610319/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692610319/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692610319/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692610319/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692610319/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T09:30:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1692610251/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692610251/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692610251/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692610251/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692610251/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692610251/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692610251/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T09:29:42</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1692610182/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692610182/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692610182/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692610182/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692610182/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692610182/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692610182/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T01:16:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.1</code></th>
			<td><a href="execution/1692580573/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692580573/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692580573/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692580573/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692580573/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692580573/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692580573/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T01:12:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.2</code></th>
			<td><a href="execution/1692580355/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692580355/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692580355/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692580355/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692580355/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692580355/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692580355/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T00:49:28</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-3.8.1</code></th>
			<td><a href="execution/1692578968/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692578968/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692578968/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692578968/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692578968/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692578968/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692578968/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-21T00:39:31</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.4</code></th>
			<td><a href="execution/1692578371/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692578371/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692578371/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692578371/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692578371/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692578371/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692578371/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T08:02:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1692000131/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1692000131/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1692000131/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1692000131/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1692000131/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1692000131/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1692000131/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:40:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.3.1</code></th>
			<td><a href="execution/1691998820/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691998820/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691998820/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691998820/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691998820/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691998820/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691998820/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:31:52</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1691998312/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691998312/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691998312/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691998312/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691998312/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691998312/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691998312/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:31:09</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1691998269/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691998269/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691998269/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691998269/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691998269/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691998269/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691998269/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:29:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1691998197/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691998197/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691998197/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691998197/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691998197/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691998197/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691998197/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:33:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.0</code></th>
			<td><a href="execution/1691976812/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691976812/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691976812/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691976812/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691976812/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691976812/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691976812/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:28:41</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.10</code></th>
			<td><a href="execution/1691976521/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691976521/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691976521/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691976521/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691976521/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691976521/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691976521/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:18:38</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.3</code></th>
			<td><a href="execution/1691975918/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691975918/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691975918/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691975918/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691975918/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691975918/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691975918/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:16:37</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.1</code></th>
			<td><a href="execution/1691975797/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691975797/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691975797/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691975797/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691975797/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691975797/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691975797/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-07T05:52:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1691387537/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691387537/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691387537/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691387537/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691387537/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691387537/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691387537/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-07T05:49:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1691387357/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691387357/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691387357/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691387357/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691387357/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691387357/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691387357/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-07T01:25:30</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.11.0</code></th>
			<td><a href="execution/1691371530/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691371530/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691371530/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691371530/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691371530/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691371530/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691371530/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-07T01:10:22</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.8</code></th>
			<td><a href="execution/1691370622/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1691370622/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1691370622/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1691370622/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1691370622/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1691370622/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1691370622/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.1</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-21T01:20:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.1</code></th>
			<td><a href="mutation/1692580857/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-21T01:18:02</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.2</code></th>
			<td><a href="mutation/1692580682/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-21T00:59:51</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-3.8.1</code></th>
			<td><a href="mutation/1692579591/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-21T00:50:09</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.4</code></th>
			<td><a href="mutation/1692579009/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T08:09:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1692000581/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:46:37</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.3.1</code></th>
			<td><a href="mutation/1691999197/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:43:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1691998984/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:41:05</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1691998865/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:35:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1691998537/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:34:54</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1691998494/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:44:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.0</code></th>
			<td><a href="mutation/1691977483/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:36:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.10</code></th>
			<td><a href="mutation/1691976981/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:30:08</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.3</code></th>
			<td><a href="mutation/1691976608/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:25:18</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.1</code></th>
			<td><a href="mutation/1691976318/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-07T06:07:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1691388438/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-07T05:57:15</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1691387835/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-07T01:31:08</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.11.0</code></th>
			<td><a href="mutation/1691371868/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-07T01:17:05</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.8</code></th>
			<td><a href="mutation/1691371025/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-31T09:22:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690795346/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-07-31T08:37:02</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.3.0</code></th>
			<td><a href="mutation/1690792622/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-08-21T09:31:59</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1692610319/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-21T09:30:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1692610251/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-21T09:29:42</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1692610182/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-21T01:16:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.1</code></th>
			<td><a href="ng_coverage/1692580573/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-21T01:12:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.2</code></th>
			<td><a href="ng_coverage/1692580355/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-21T00:49:28</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-3.8.1</code></th>
			<td><a href="ng_coverage/1692578968/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-21T00:39:31</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.4</code></th>
			<td><a href="ng_coverage/1692578371/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T08:02:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1692000131/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:40:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.3.1</code></th>
			<td><a href="ng_coverage/1691998820/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:31:52</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1691998312/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:31:09</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1691998269/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T07:29:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1691998197/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:33:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.0</code></th>
			<td><a href="ng_coverage/1691976812/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:28:41</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.10</code></th>
			<td><a href="ng_coverage/1691976521/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:18:38</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.3</code></th>
			<td><a href="ng_coverage/1691975918/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-14T01:16:37</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.1</code></th>
			<td><a href="ng_coverage/1691975797/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-07T05:52:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1691387537/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-07T05:49:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1691387357/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-07T01:25:30</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.11.0</code></th>
			<td><a href="ng_coverage/1691371530/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-07T01:10:22</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.8</code></th>
			<td><a href="ng_coverage/1691370622/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->