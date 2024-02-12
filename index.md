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
		<tr> <th><code>2024-02-12T00:55:05</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.7</code></th>
			<td><a href="execution/1707699305/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707699305/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707699305/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707699305/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707699305/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707699305/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707699305/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-12T00:53:12</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.12</code></th>
			<td><a href="execution/1707699192/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707699192/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707699192/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707699192/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707699192/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707699192/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707699192/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-05T01:20:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.16</code></th>
			<td><a href="execution/1707096020/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707096020/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707096020/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707096020/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707096020/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707096020/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707096020/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-02-05T01:18:23</code></th>
			 <th><code>dependabot/maven/org.junit-junit-bom-5.10.2</code></th>
			<td><a href="execution/1707095903/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1707095903/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1707095903/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1707095903/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1707095903/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1707095903/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1707095903/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:54:28</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1706518468/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706518468/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706518468/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706518468/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706518468/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706518468/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706518468/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:20:45</code></th>
			 <th><code>rm_stepsec</code></th>
			<td><a href="execution/1706516445/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706516445/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706516445/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706516445/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706516445/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706516445/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706516445/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:00:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1706515257/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706515257/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706515257/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706515257/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706515257/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706515257/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706515257/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2024-02-12T01:22:30</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.1</code></th>
			<td><a href="mutation/1707700950/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:22:02</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.2</code></th>
			<td><a href="mutation/1707700922/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T01:21:12</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.2</code></th>
			<td><a href="mutation/1707700872/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T00:59:41</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.12</code></th>
			<td><a href="mutation/1707699581/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-12T00:59:17</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.7</code></th>
			<td><a href="mutation/1707699557/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-05T01:27:06</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.16</code></th>
			<td><a href="mutation/1707096426/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-02-05T01:21:40</code></th>
			 <th><code>dependabot/maven/org.junit-junit-bom-5.10.2</code></th>
			<td><a href="mutation/1707096100/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-29T09:00:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1706518840/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:27:02</code></th>
			 <th><code>rm_stepsec</code></th>
			<td><a href="mutation/1706516822/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:06:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1706515617/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:04:47</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1706515487/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2024-02-12T00:55:05</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.7</code></th>
			<td><a href="ng_coverage/1707699305/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-12T00:53:12</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.12</code></th>
			<td><a href="ng_coverage/1707699192/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-05T01:20:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.16</code></th>
			<td><a href="ng_coverage/1707096020/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-02-05T01:18:23</code></th>
			 <th><code>dependabot/maven/org.junit-junit-bom-5.10.2</code></th>
			<td><a href="ng_coverage/1707095903/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:54:28</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1706518468/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:20:45</code></th>
			 <th><code>rm_stepsec</code></th>
			<td><a href="ng_coverage/1706516445/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T08:00:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1706515257/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->