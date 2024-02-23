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
		<tr> <th><code>2024-02-23T10:14:19</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708683259/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708683259/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708683259/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708683259/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708683259/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708683259/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708683259/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:31:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="execution/1708680679/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708680679/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708680679/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708680679/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708680679/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708680679/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708680679/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:29:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1708680557/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708680557/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708680557/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708680557/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708680557/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708680557/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708680557/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:12:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.8.0</code></th>
			<td><a href="execution/1708679575/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708679575/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708679575/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708679575/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708679575/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708679575/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708679575/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:27:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.19</code></th>
			<td><a href="execution/1708306062/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708306062/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708306062/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708306062/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708306062/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708306062/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708306062/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:24:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.4</code></th>
			<td><a href="execution/1708305843/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708305843/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708305843/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708305843/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708305843/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708305843/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708305843/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:19:52</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.8</code></th>
			<td><a href="execution/1708305592/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1708305592/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1708305592/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1708305592/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1708305592/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1708305592/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1708305592/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:34:59</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1707726899/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707726899/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707726899/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707726899/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707726899/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707726899/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707726899/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:15:31</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1707725731/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725731/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725731/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725731/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725731/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725731/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725731/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:14:12</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="execution/1707725652/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725652/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725652/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725652/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725652/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725652/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725652/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:12:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1707725540/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725540/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725540/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725540/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725540/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725540/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725540/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:11:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="execution/1707725519/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725519/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725519/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725519/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725519/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725519/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725519/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:10:06</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1707725406/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725406/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725406/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725406/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725406/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725406/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725406/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:09:45</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1707725385/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725385/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725385/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725385/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725385/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725385/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725385/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:06:30</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1707725190/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725190/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725190/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725190/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725190/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725190/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725190/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:06:12</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.1</code></th>
			<td><a href="execution/1707725172/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707725172/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707725172/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707725172/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707725172/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707725172/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707725172/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:30:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="execution/1707701432/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707701432/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707701432/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707701432/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707701432/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707701432/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707701432/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:26:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.17</code></th>
			<td><a href="execution/1707701181/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707701181/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707701181/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707701181/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707701181/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707701181/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707701181/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:16:09</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.2</code></th>
			<td><a href="execution/1707700569/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707700569/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707700569/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707700569/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707700569/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707700569/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707700569/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:15:37</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.2</code></th>
			<td><a href="execution/1707700537/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707700537/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707700537/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707700537/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707700537/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707700537/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707700537/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		</tr>
		<tr> <th><code>2024-02-23T10:20:33</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708683633/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:35:09</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="mutation/1708680909/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:34:00</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708680840/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:17:18</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.8.0</code></th>
			<td><a href="mutation/1708679838/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-22T14:05:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708610745/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-22T14:01:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1708610494/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-21T03:35:29</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="mutation/1708486529/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:34:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.19</code></th>
			<td><a href="mutation/1708306476/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:30:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.4</code></th>
			<td><a href="mutation/1708306204/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:23:32</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.8</code></th>
			<td><a href="mutation/1708305812/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:41:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1707727274/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:20:48</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1707726048/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:20:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="mutation/1707726010/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:18:49</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1707725929/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:17:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="mutation/1707725820/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:13:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1707725614/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:12:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1707725558/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:11:35</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1707725495/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:36:39</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="mutation/1707701799/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:32:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.17</code></th>
			<td><a href="mutation/1707701554/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2024-02-23T10:14:19</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708683259/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:31:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/ip-2.0.1</code></th>
			<td><a href="ng_coverage/1708680679/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:29:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1708680557/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-23T09:12:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.8.0</code></th>
			<td><a href="ng_coverage/1708679575/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:27:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.19</code></th>
			<td><a href="ng_coverage/1708306062/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:24:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.4</code></th>
			<td><a href="ng_coverage/1708305843/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-19T01:19:52</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.8</code></th>
			<td><a href="ng_coverage/1708305592/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:34:59</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1707726899/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:15:31</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1707725731/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:14:12</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="ng_coverage/1707725652/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:12:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1707725540/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:11:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="ng_coverage/1707725519/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:10:06</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1707725406/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:09:45</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1707725385/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:06:30</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1707725190/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T08:06:12</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.1</code></th>
			<td><a href="ng_coverage/1707725172/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:30:32</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.2</code></th>
			<td><a href="ng_coverage/1707701432/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:26:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.17</code></th>
			<td><a href="ng_coverage/1707701181/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:16:09</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.2</code></th>
			<td><a href="ng_coverage/1707700569/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:15:37</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.2</code></th>
			<td><a href="ng_coverage/1707700537/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->