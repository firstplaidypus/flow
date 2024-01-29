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
		<tr> <th><code>2024-01-29T07:10:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1706512254/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706512254/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706512254/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706512254/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706512254/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706512254/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706512254/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T07:10:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1706512226/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706512226/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706512226/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706512226/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706512226/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706512226/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706512226/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T01:11:37</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.6</code></th>
			<td><a href="execution/1706490697/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706490697/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706490697/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706490697/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706490697/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706490697/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706490697/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T01:05:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.10</code></th>
			<td><a href="execution/1706490315/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706490315/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706490315/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706490315/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706490315/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706490315/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706490315/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T01:00:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.9</code></th>
			<td><a href="execution/1706490000/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706490000/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706490000/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706490000/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706490000/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706490000/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706490000/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T00:57:22</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.0</code></th>
			<td><a href="execution/1706489842/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706489842/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706489842/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706489842/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706489842/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706489842/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706489842/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-29T00:56:43</code></th>
			 <th><code>dependabot/github_actions/rhysd/changelog-from-release-3.7.2</code></th>
			<td><a href="execution/1706489803/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1706489803/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1706489803/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1706489803/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1706489803/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1706489803/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1706489803/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T11:15:57</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705922157/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705922157/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705922157/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705922157/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705922157/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705922157/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705922157/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T11:15:24</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705922124/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705922124/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705922124/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705922124/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705922124/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705922124/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705922124/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:39:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="execution/1705912794/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705912794/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705912794/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705912794/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705912794/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705912794/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705912794/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:39:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705912756/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705912756/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705912756/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705912756/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705912756/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705912756/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705912756/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:37:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705912653/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705912653/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705912653/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705912653/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705912653/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705912653/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705912653/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:31:53</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1705912313/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705912313/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705912313/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705912313/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705912313/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705912313/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705912313/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:31:02</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.0</code></th>
			<td><a href="execution/1705912262/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1705912262/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1705912262/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1705912262/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1705912262/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1705912262/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1705912262/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-29T07:16:28</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1706512588/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-29T01:17:25</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.6</code></th>
			<td><a href="mutation/1706491045/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-29T01:10:47</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.10</code></th>
			<td><a href="mutation/1706490647/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-29T01:05:42</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.9</code></th>
			<td><a href="mutation/1706490342/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-29T01:04:08</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.0</code></th>
			<td><a href="mutation/1706490248/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T11:22:19</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705922539/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T11:21:24</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705922484/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T08:46:46</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.0</code></th>
			<td></td>
			<td><a href="mutation/1705913206/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1705913206/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:43:08</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705912988/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T08:37:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="mutation/1705912624/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T08:36:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1705912589/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T01:05:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="mutation/1705885501/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-22T01:03:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.7.0</code></th>
			<td><a href="mutation/1705885406/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-01-29T07:10:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1706512254/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T07:10:26</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1706512226/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T01:11:37</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.6</code></th>
			<td><a href="ng_coverage/1706490697/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T01:05:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.10</code></th>
			<td><a href="ng_coverage/1706490315/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T01:00:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.9</code></th>
			<td><a href="ng_coverage/1706490000/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T00:57:22</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.0</code></th>
			<td><a href="ng_coverage/1706489842/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-29T00:56:43</code></th>
			 <th><code>dependabot/github_actions/rhysd/changelog-from-release-3.7.2</code></th>
			<td><a href="ng_coverage/1706489803/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T11:15:57</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705922157/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T11:15:24</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705922124/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:39:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.5</code></th>
			<td><a href="ng_coverage/1705912794/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:39:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705912756/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:37:33</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705912653/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:31:53</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1705912313/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-22T08:31:02</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.0</code></th>
			<td><a href="ng_coverage/1705912262/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->