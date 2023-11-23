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
		<tr> <th><code>2023-11-23T10:56:19</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700736979/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700736979/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700736979/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700736979/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700736979/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700736979/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700736979/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-23T10:26:25</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="execution/1700735185/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700735185/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700735185/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700735185/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700735185/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700735185/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700735185/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-23T10:21:53</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="execution/1700734913/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700734913/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700734913/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700734913/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700734913/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700734913/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700734913/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-23T10:08:22</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="execution/1700734102/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700734102/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700734102/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700734102/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700734102/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700734102/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700734102/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-22T15:02:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700665338/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700665338/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700665338/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700665338/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700665338/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700665338/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700665338/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-21T17:07:07</code></th>
			 <th><code>usage_diagram_improvement</code></th>
			<td><a href="execution/1700586427/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700586427/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700586427/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700586427/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700586427/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700586427/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700586427/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T15:41:01</code></th>
			 <th><code>doc_automation</code></th>
			<td><a href="execution/1700494861/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700494861/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700494861/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700494861/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700494861/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700494861/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700494861/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:43:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700473393/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700473393/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700473393/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700473393/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700473393/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700473393/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700473393/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:41:39</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700473299/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700473299/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700473299/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700473299/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700473299/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700473299/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700473299/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:21:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700472061/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700472061/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700472061/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700472061/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700472061/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700472061/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700472061/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:09:56</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.0</code></th>
			<td><a href="execution/1700471396/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700471396/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700471396/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700471396/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700471396/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700471396/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700471396/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T08:52:09</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700470329/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700470329/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700470329/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700470329/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700470329/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700470329/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700470329/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T08:50:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700470216/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700470216/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700470216/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700470216/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700470216/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700470216/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700470216/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T08:49:37</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1700470177/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700470177/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700470177/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700470177/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700470177/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700470177/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700470177/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T01:14:10</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.1.1</code></th>
			<td><a href="execution/1700442850/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700442850/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700442850/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700442850/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700442850/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700442850/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700442850/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T01:09:11</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.1</code></th>
			<td><a href="execution/1700442551/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700442551/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700442551/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700442551/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700442551/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700442551/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700442551/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T01:03:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.9.2</code></th>
			<td><a href="execution/1700442204/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700442204/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700442204/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700442204/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700442204/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700442204/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700442204/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T00:54:11</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.3</code></th>
			<td><a href="execution/1700441651/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700441651/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700441651/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700441651/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700441651/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700441651/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700441651/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-20T00:53:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.6.1</code></th>
			<td><a href="execution/1700441615/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1700441615/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1700441615/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1700441615/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1700441615/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1700441615/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1700441615/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-11-13T10:06:27</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1699869987/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1699869987/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1699869987/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1699869987/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1699869987/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1699869987/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1699869987/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>mermaid_links</code></th>
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
		<tr> <th><code>2023-11-20T09:48:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700473698/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T09:26:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700472406/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T09:18:39</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.3</code></th>
			<td></td>
			<td><a href="mutation/1700471919/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1700471919/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:15:58</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.0</code></th>
			<td><a href="mutation/1700471758/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T08:57:54</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700470674/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T08:55:55</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700470555/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T08:54:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1700470477/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T01:19:02</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.1.1</code></th>
			<td><a href="mutation/1700443142/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T01:14:40</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.1</code></th>
			<td><a href="mutation/1700442880/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T01:08:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.9.2</code></th>
			<td><a href="mutation/1700442481/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-20T01:01:08</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.6.1</code></th>
			<td><a href="mutation/1700442068/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T10:15:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699870541/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T10:03:54</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699869834/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T10:00:33</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699869633/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-13T09:53:59</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1699869239/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-11-23T10:56:19</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700736979/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-23T10:26:25</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="ng_coverage/1700735185/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-23T10:21:53</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="ng_coverage/1700734913/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-23T10:08:22</code></th>
			 <th><code>mermaid_links</code></th>
			<td><a href="ng_coverage/1700734102/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-22T15:02:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700665338/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-21T17:07:07</code></th>
			 <th><code>usage_diagram_improvement</code></th>
			<td><a href="ng_coverage/1700586427/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T15:41:01</code></th>
			 <th><code>doc_automation</code></th>
			<td><a href="ng_coverage/1700494861/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:43:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700473393/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:41:39</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700473299/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:21:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700472061/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T09:09:56</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.0</code></th>
			<td><a href="ng_coverage/1700471396/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T08:52:09</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700470329/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T08:50:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700470216/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T08:49:37</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1700470177/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T01:14:10</code></th>
			 <th><code>dependabot/maven/org.codehaus.mojo-exec-maven-plugin-3.1.1</code></th>
			<td><a href="ng_coverage/1700442850/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T01:09:11</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.6.1</code></th>
			<td><a href="ng_coverage/1700442551/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T01:03:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.9.2</code></th>
			<td><a href="ng_coverage/1700442204/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T00:54:11</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.3</code></th>
			<td><a href="ng_coverage/1700441651/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-20T00:53:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.6.1</code></th>
			<td><a href="ng_coverage/1700441615/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-11-13T10:06:27</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1699869987/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->