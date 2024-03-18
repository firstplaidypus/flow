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
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:22:00</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="execution/1710724920/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710724920/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710724920/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710724920/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710724920/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710724920/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710724920/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:20:43</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.2.1</code></th>
			<td><a href="execution/1710724843/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710724843/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710724843/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710724843/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710724843/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710724843/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710724843/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:56:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="execution/1710723375/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710723375/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710723375/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710723375/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710723375/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710723375/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710723375/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:47:39</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.0</code></th>
			<td><a href="execution/1710722859/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710722859/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710722859/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710722859/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710722859/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710722859/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710722859/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-17T07:34:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710660857/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710660857/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710660857/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710660857/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710660857/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710660857/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710660857/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-16T23:48:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.6</code></th>
			<td><a href="execution/1710632931/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710632931/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710632931/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710632931/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710632931/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710632931/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710632931/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-14T15:50:02</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710431402/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710431402/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710431402/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710431402/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710431402/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710431402/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710431402/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-14T13:58:20</code></th>
			 <th><code>unit_test_fix</code></th>
			<td><a href="execution/1710424700/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710424700/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710424700/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710424700/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710424700/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710424700/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710424700/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:58:49</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710323929/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710323929/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710323929/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710323929/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710323929/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710323929/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710323929/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:25:31</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="execution/1710321931/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710321931/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710321931/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710321931/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710321931/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710321931/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710321931/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:17:58</code></th>
			 <th><code>diff_doc</code></th>
			<td><a href="execution/1710321478/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710321478/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710321478/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710321478/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710321478/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710321478/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710321478/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:56:21</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710147381/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710147381/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710147381/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710147381/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710147381/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710147381/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710147381/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:31:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.0</code></th>
			<td><a href="execution/1710145873/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710145873/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710145873/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710145873/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710145873/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710145873/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710145873/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:24:24</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710145464/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710145464/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710145464/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710145464/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710145464/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710145464/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710145464/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710144973/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710144973/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710144973/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710144973/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710144973/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710144973/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710144973/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:30:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.25</code></th>
			<td><a href="execution/1710120610/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710120610/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710120610/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710120610/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710120610/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710120610/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710120610/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:15:23</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.2</code></th>
			<td><a href="execution/1710119723/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710119723/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710119723/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710119723/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710119723/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710119723/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710119723/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:14:33</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.1</code></th>
			<td><a href="execution/1710119673/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710119673/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710119673/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710119673/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710119673/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710119673/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710119673/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:32:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1709821940/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709821940/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709821940/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709821940/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709821940/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709821940/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709821940/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:14:16</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="execution/1709820856/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1709820856/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1709820856/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1709820856/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1709820856/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1709820856/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1709820856/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:02:22</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="mutation/1710723742/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:51:56</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.0</code></th>
			<td><a href="mutation/1710723116/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-17T07:39:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710661186/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-16T23:54:53</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.6</code></th>
			<td><a href="mutation/1710633293/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-14T15:55:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710431740/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-14T14:03:34</code></th>
			 <th><code>unit_test_fix</code></th>
			<td><a href="mutation/1710425014/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-13T10:04:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710324265/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:31:37</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="mutation/1710322297/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:23:35</code></th>
			 <th><code>diff_doc</code></th>
			<td><a href="mutation/1710321815/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T09:03:13</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710147793/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:37:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.0</code></th>
			<td><a href="mutation/1710146262/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:27:55</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710145675/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:21:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710145301/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:36:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.25</code></th>
			<td><a href="mutation/1710121003/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:19:16</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.2</code></th>
			<td><a href="mutation/1710119956/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:18:53</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.1</code></th>
			<td><a href="mutation/1710119933/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:36:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1709822186/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:20:43</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="mutation/1709821243/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-07T10:52:12</code></th>
			 <th><code>local_node_install</code></th>
			<td><a href="mutation/1709808732/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-07T09:44:26</code></th>
			 <th><code>sysout_noise</code></th>
			<td><a href="mutation/1709804666/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:22:00</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="ng_coverage/1710724920/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:20:43</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.2.1</code></th>
			<td><a href="ng_coverage/1710724843/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:56:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="ng_coverage/1710723375/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:47:39</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.0</code></th>
			<td><a href="ng_coverage/1710722859/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-17T07:34:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710660857/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-16T23:48:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.6</code></th>
			<td><a href="ng_coverage/1710632931/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-14T15:50:02</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710431402/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-14T13:58:20</code></th>
			 <th><code>unit_test_fix</code></th>
			<td><a href="ng_coverage/1710424700/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:58:49</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710323929/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:25:31</code></th>
			 <th><code>diff_demo_lowercase_only</code></th>
			<td><a href="ng_coverage/1710321931/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-13T09:17:58</code></th>
			 <th><code>diff_doc</code></th>
			<td><a href="ng_coverage/1710321478/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:56:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710147381/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:31:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.9.0</code></th>
			<td><a href="ng_coverage/1710145873/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:24:24</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710145464/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T08:16:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710144973/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:30:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.25</code></th>
			<td><a href="ng_coverage/1710120610/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:15:23</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.2</code></th>
			<td><a href="ng_coverage/1710119723/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-11T01:14:33</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.4.1</code></th>
			<td><a href="ng_coverage/1710119673/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:32:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1709821940/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-07T14:14:16</code></th>
			 <th><code>restore_mermaid_link</code></th>
			<td><a href="ng_coverage/1709820856/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->