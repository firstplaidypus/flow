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
			 <th><code>diff_demo</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-09T13:34:32</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="execution/1696858472/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696858472/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696858472/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696858472/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696858472/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696858472/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696858472/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-09T10:48:59</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="execution/1696848539/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696848539/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696848539/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696848539/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696848539/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696848539/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696848539/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-09T08:08:54</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696838934/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696838934/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696838934/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696838934/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696838934/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696838934/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696838934/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696838934/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:26:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696836403/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696836403/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696836403/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696836403/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696836403/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696836403/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696836403/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696836403/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:25:27</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696836327/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696836327/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696836327/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696836327/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696836327/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696836327/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696836327/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696836327/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:23:03</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696836183/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696836183/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696836183/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696836183/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696836183/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696836183/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696836183/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696836183/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:20:24</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696836024/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696836024/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696836024/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696836024/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696836024/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696836024/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696836024/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696836024/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:19:02</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696835942/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696835942/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696835942/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696835942/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696835942/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696835942/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696835942/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696835942/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:18:21</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696835901/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696835901/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696835901/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696835901/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696835901/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696835901/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696835901/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696835901/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:24:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.3</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696814653/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696814653/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696814653/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696814653/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696814653/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696814653/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696814653/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696814653/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:20:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696814419/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696814419/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696814419/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696814419/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696814419/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696814419/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696814419/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696814419/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:14:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.5.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696814041/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696814041/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696814041/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696814041/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696814041/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696814041/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696814041/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696814041/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:07:42</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696813662/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696813662/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696813662/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696813662/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696813662/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696813662/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696813662/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696813662/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:05:45</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696813545/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696813545/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696813545/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696813545/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696813545/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696813545/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696813545/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696813545/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:04:10</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/1696813450/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/1696813450/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/1696813450/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/1696813450/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/1696813450/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/1696813450/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/1696813450/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/1696813450/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-06T15:40:17</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="execution/1696606817/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696606817/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696606817/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696606817/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696606817/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696606817/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696606817/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-06T15:33:41</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="execution/1696606421/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696606421/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696606421/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696606421/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696606421/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696606421/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696606421/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-06T15:01:51</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="execution/1696604511/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696604511/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696604511/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696604511/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696604511/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696604511/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696604511/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-06T13:59:12</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="execution/1696600752/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696600752/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696600752/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696600752/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696600752/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696600752/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696600752/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-02T07:42:40</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1696232560/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696232560/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696232560/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696232560/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696232560/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696232560/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696232560/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>diff_demo</code></th>
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
		<tr> <th><code>2023-10-09T10:55:47</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="mutation/1696848947/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T10:24:07</code></th>
			 <th><code>diff_demo</code></th>
			<td></td>
			<td><a href="mutation/1696847047/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1696847047/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-10-09T08:15:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696839338/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T07:37:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td><a href="mutation/1696837077/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T07:37:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696837042/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T07:31:20</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696836680/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T07:30:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td><a href="mutation/1696836604/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T07:27:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696836461/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T07:24:24</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696836264/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T01:33:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td><a href="mutation/1696815180/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T01:32:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.3</code></th>
			<td><a href="mutation/1696815144/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T01:27:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.5.0</code></th>
			<td><a href="mutation/1696814872/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T01:17:49</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.0</code></th>
			<td><a href="mutation/1696814269/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T01:11:34</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.0</code></th>
			<td><a href="mutation/1696813894/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T01:10:27</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.0</code></th>
			<td><a href="mutation/1696813827/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-06T15:38:39</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="mutation/1696606719/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-06T15:08:45</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="mutation/1696604925/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-06T14:08:50</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="mutation/1696601330/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-02T07:54:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696233297/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-02T07:44:52</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696232692/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>diff_demo</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T13:34:32</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="ng_coverage/1696858472/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T10:48:59</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="ng_coverage/1696848539/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T08:08:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696838934/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:26:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td><a href="ng_coverage/1696836403/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:25:27</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696836327/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:23:03</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696836183/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:20:24</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696836024/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:19:02</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696835942/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T07:18:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696835901/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:24:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.3</code></th>
			<td><a href="ng_coverage/1696814653/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:20:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.0</code></th>
			<td><a href="ng_coverage/1696814419/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:14:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.5.0</code></th>
			<td><a href="ng_coverage/1696814041/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:07:42</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.0</code></th>
			<td><a href="ng_coverage/1696813662/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:05:45</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.0</code></th>
			<td><a href="ng_coverage/1696813545/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:04:10</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.0</code></th>
			<td><a href="ng_coverage/1696813450/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-06T15:40:17</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="ng_coverage/1696606817/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-06T15:33:41</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="ng_coverage/1696606421/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-06T15:01:51</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="ng_coverage/1696604511/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-06T13:59:12</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="ng_coverage/1696600752/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-02T07:42:40</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696232560/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->