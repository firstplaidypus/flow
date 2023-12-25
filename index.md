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
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:11:09</code></th>
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="execution/1703466669/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466669/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466669/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466669/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466669/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466669/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466669/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:42</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="execution/1703466642/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466642/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466642/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466642/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466642/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466642/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466642/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:14</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.1</code></th>
			<td><a href="execution/1703466614/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466614/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466614/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466614/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466614/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466614/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466614/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:09:44</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.0</code></th>
			<td><a href="execution/1703466584/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466584/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466584/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466584/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466584/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466584/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466584/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T09:25:34</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1702891534/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702891534/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702891534/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702891534/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702891534/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702891534/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702891534/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:47:08</code></th>
			 <th><code>updowngrade</code></th>
			<td><a href="execution/1702889228/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702889228/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702889228/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702889228/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702889228/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702889228/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702889228/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:43:21</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1702889001/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702889001/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702889001/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702889001/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702889001/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702889001/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702889001/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:41:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1702888917/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702888917/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702888917/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702888917/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702888917/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702888917/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702888917/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:39:28</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1702888768/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702888768/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702888768/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702888768/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702888768/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702888768/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702888768/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T01:08:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.6</code></th>
			<td><a href="execution/1702861699/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702861699/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702861699/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702861699/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702861699/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702861699/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702861699/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T00:59:27</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.5</code></th>
			<td><a href="execution/1702861167/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702861167/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702861167/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702861167/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702861167/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702861167/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702861167/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T00:43:04</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.3</code></th>
			<td><a href="execution/1702860184/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702860184/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702860184/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702860184/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702860184/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702860184/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702860184/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T07:56:33</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="mutation/1703490993/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:17:02</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.1</code></th>
			<td><a href="mutation/1703467022/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:14:34</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.0</code></th>
			<td><a href="mutation/1703466874/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:14:07</code></th>
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="mutation/1703466847/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T09:31:17</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702891877/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:50:49</code></th>
			 <th><code>updowngrade</code></th>
			<td><a href="mutation/1702889449/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:46:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702889164/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:45:08</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702889108/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:44:39</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702889079/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T01:12:46</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.6</code></th>
			<td><a href="mutation/1702861966/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T01:06:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.5</code></th>
			<td><a href="mutation/1702861575/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T00:47:28</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.3</code></th>
			<td><a href="mutation/1702860448/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-11T10:42:47</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702291367/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-11T00:33:33</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.4</code></th>
			<td><a href="mutation/1702254813/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:41:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1701675697/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-04T07:41:07</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1701675667/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:35:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.5</code></th>
			<td><a href="mutation/1701653725/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:34:31</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.3</code></th>
			<td><a href="mutation/1701653671/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-04T01:28:08</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.0.0</code></th>
			<td><a href="mutation/1701653288/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-04T00:52:25</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.15.0</code></th>
			<td><a href="mutation/1701651145/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:11:09</code></th>
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="ng_coverage/1703466669/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:42</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="ng_coverage/1703466642/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:14</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.1</code></th>
			<td><a href="ng_coverage/1703466614/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:09:44</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.0</code></th>
			<td><a href="ng_coverage/1703466584/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T09:25:34</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1702891534/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:47:08</code></th>
			 <th><code>updowngrade</code></th>
			<td><a href="ng_coverage/1702889228/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:43:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1702889001/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:41:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1702888917/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:39:28</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1702888768/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T01:08:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.6</code></th>
			<td><a href="ng_coverage/1702861699/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T00:59:27</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.5</code></th>
			<td><a href="ng_coverage/1702861167/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T00:43:04</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-surefire-plugin-3.2.3</code></th>
			<td><a href="ng_coverage/1702860184/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->