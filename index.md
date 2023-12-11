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
		<tr> <th><code>2023-12-11T10:37:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1702291034/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702291034/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702291034/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702291034/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702291034/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702291034/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702291034/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-11T00:27:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.4</code></th>
			<td><a href="execution/1702254470/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702254470/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702254470/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702254470/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702254470/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702254470/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702254470/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T10:20:02</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701685202/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701685202/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701685202/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701685202/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701685202/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701685202/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701685202/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:39:08</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.0.0</code></th>
			<td><a href="execution/1701675548/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701675548/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701675548/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701675548/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701675548/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701675548/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701675548/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:37:28</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701675448/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701675448/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701675448/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701675448/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701675448/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701675448/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701675448/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:35:52</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701675352/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701675352/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701675352/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701675352/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701675352/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701675352/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701675352/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:34:15</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701675255/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701675255/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701675255/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701675255/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701675255/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701675255/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701675255/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:30:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.5</code></th>
			<td><a href="execution/1701653443/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701653443/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701653443/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701653443/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701653443/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701653443/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701653443/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:29:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.3</code></th>
			<td><a href="execution/1701653340/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701653340/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701653340/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701653340/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701653340/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701653340/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701653340/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T00:46:54</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.15.0</code></th>
			<td><a href="execution/1701650814/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701650814/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701650814/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701650814/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701650814/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701650814/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701650814/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-04T00:46:17</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.3</code></th>
			<td><a href="execution/1701650777/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701650777/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701650777/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701650777/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701650777/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701650777/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701650777/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-01T09:39:21</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701423561/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701423561/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701423561/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701423561/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701423561/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701423561/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701423561/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-01T05:21:08</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/adobe/css-tools-4.3.2</code></th>
			<td><a href="execution/1701408068/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701408068/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701408068/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701408068/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701408068/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701408068/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701408068/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-28T12:42:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701175338/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701175338/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701175338/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701175338/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701175338/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701175338/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701175338/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-28T12:41:03</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701175263/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701175263/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701175263/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701175263/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701175263/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701175263/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701175263/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-28T10:40:29</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.0</code></th>
			<td><a href="execution/1701168029/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701168029/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701168029/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701168029/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701168029/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701168029/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701168029/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-28T10:25:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1701167147/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701167147/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701167147/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701167147/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701167147/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701167147/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701167147/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-27T01:40:05</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.4</code></th>
			<td><a href="execution/1701049205/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701049205/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701049205/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701049205/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701049205/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701049205/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701049205/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-27T01:30:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.0</code></th>
			<td><a href="execution/1701048655/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701048655/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701048655/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701048655/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701048655/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701048655/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701048655/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-27T01:27:17</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.2</code></th>
			<td><a href="execution/1701048437/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1701048437/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1701048437/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1701048437/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1701048437/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1701048437/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1701048437/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.4</code></th>
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
		<tr> <th><code>2023-12-11T00:33:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.4</code></th>
			<td><a href="mutation/1702254813/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T07:41:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1701675697/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T07:41:07</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1701675667/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T01:35:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.5</code></th>
			<td><a href="mutation/1701653725/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T01:34:31</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.3</code></th>
			<td><a href="mutation/1701653671/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T01:28:08</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.0.0</code></th>
			<td><a href="mutation/1701653288/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T00:52:25</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.15.0</code></th>
			<td><a href="mutation/1701651145/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-04T00:51:40</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.3</code></th>
			<td><a href="mutation/1701651100/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-12-01T05:24:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/adobe/css-tools-4.3.2</code></th>
			<td><a href="mutation/1701408254/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-28T12:47:12</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1701175632/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-28T10:46:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.0</code></th>
			<td><a href="mutation/1701168385/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-28T10:32:20</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.2</code></th>
			<td></td>
			<td><a href="mutation/1701167540/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1701167540/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-11-28T10:30:51</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1701167451/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-27T01:44:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.4</code></th>
			<td><a href="mutation/1701049498/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-23T11:01:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700737301/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-23T10:31:42</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="mutation/1700735502/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-23T10:26:56</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="mutation/1700735216/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-22T14:57:58</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700665078/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-21T17:11:58</code></th>
			 <th><code>usage_diagram_improvement</code></th>
			<td><a href="mutation/1700586718/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T15:45:51</code></th>
			 <th><code>doc_automation</code></th>
			<td><a href="mutation/1700495151/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>main</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-11T10:37:14</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1702291034/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-11T00:27:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.4</code></th>
			<td><a href="ng_coverage/1702254470/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T10:20:02</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701685202/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:39:08</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.0.0</code></th>
			<td><a href="ng_coverage/1701675548/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:37:28</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701675448/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:35:52</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701675352/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:34:15</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701675255/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:30:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.5</code></th>
			<td><a href="ng_coverage/1701653443/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:29:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.3</code></th>
			<td><a href="ng_coverage/1701653340/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T00:46:54</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.15.0</code></th>
			<td><a href="ng_coverage/1701650814/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-04T00:46:17</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-javadoc-plugin-3.6.3</code></th>
			<td><a href="ng_coverage/1701650777/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-01T09:39:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701423561/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-01T05:21:08</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/adobe/css-tools-4.3.2</code></th>
			<td><a href="ng_coverage/1701408068/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-28T12:42:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701175338/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-28T12:41:03</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701175263/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-28T10:40:29</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.0</code></th>
			<td><a href="ng_coverage/1701168029/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-28T10:25:47</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1701167147/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-27T01:40:05</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.4</code></th>
			<td><a href="ng_coverage/1701049205/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-27T01:30:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.0</code></th>
			<td><a href="ng_coverage/1701048655/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-27T01:27:17</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.2</code></th>
			<td><a href="ng_coverage/1701048437/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->