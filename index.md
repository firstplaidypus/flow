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
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.0</code></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><a href="execution/latest/assert/assert-core/target/mctf/latest/index.html">assert/assert-core</a></td>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">example/app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">example/app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">example/app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">example/app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">example/app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">example/app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">example/app-web-ui</a></td>
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
		<tr> <th><code>2023-10-02T07:37:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1696232275/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696232275/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696232275/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696232275/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696232275/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696232275/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696232275/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-02T07:37:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1696232236/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696232236/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696232236/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696232236/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696232236/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696232236/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696232236/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-02T00:45:31</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.0</code></th>
			<td><a href="execution/1696207531/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696207531/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696207531/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696207531/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696207531/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696207531/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696207531/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-02T00:39:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.0</code></th>
			<td><a href="execution/1696207194/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696207194/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696207194/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696207194/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696207194/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696207194/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696207194/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-02T00:19:51</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.13.0</code></th>
			<td><a href="execution/1696205991/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696205991/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696205991/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696205991/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696205991/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696205991/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696205991/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-30T09:54:58</code></th>
			 <th><code>report_naming_api</code></th>
			<td><a href="execution/1696067698/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696067698/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696067698/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696067698/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696067698/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696067698/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696067698/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-29T17:07:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1696007258/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696007258/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696007258/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696007258/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696007258/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696007258/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696007258/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-29T16:41:37</code></th>
			 <th><code>actor_fix</code></th>
			<td><a href="execution/1696005697/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696005697/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696005697/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696005697/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696005697/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696005697/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696005697/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-25T08:01:19</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695628879/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695628879/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695628879/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695628879/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695628879/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695628879/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695628879/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-25T08:00:25</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695628825/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695628825/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695628825/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695628825/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695628825/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695628825/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695628825/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-25T07:48:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695628094/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695628094/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695628094/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695628094/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695628094/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695628094/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695628094/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-09-25T07:41:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1695627678/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1695627678/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1695627678/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1695627678/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1695627678/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1695627678/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1695627678/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.0</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:11:34</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.0</code></th>
			<td><a href="mutation/1696813894/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-09T01:10:27</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.0</code></th>
			<td><a href="mutation/1696813827/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-06T15:38:39</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="mutation/1696606719/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-06T15:08:45</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="mutation/1696604925/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-06T14:08:50</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="mutation/1696601330/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-02T07:54:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696233297/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-02T07:44:52</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696232692/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-02T07:44:11</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696232651/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-02T00:52:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.0</code></th>
			<td><a href="mutation/1696207940/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-02T00:46:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.0</code></th>
			<td><a href="mutation/1696207575/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-02T00:26:40</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.13.0</code></th>
			<td><a href="mutation/1696206400/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-30T10:06:41</code></th>
			 <th><code>report_naming_api</code></th>
			<td><a href="mutation/1696068401/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-29T17:14:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696007641/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-29T16:48:47</code></th>
			 <th><code>actor_fix</code></th>
			<td><a href="mutation/1696006127/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-25T08:10:02</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695629402/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-25T08:09:21</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695629361/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:53:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695628402/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:48:48</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.1</code></th>
			<td><a href="mutation/1695628128/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:47:05</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695628025/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:46:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1695627985/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.0</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
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
		<tr> <th><code>2023-10-02T07:37:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696232275/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-02T07:37:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696232236/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-02T00:45:31</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.0</code></th>
			<td><a href="ng_coverage/1696207531/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-02T00:39:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.0</code></th>
			<td><a href="ng_coverage/1696207194/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-02T00:19:51</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.13.0</code></th>
			<td><a href="ng_coverage/1696205991/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-30T09:54:58</code></th>
			 <th><code>report_naming_api</code></th>
			<td><a href="ng_coverage/1696067698/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-29T17:07:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696007258/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-29T16:41:37</code></th>
			 <th><code>actor_fix</code></th>
			<td><a href="ng_coverage/1696005697/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T08:01:19</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695628879/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T08:00:25</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695628825/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:48:14</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695628094/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-25T07:41:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1695627678/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->