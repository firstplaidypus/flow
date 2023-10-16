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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.6</code></th>
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
		<tr> <th><code>2023-10-16T01:21:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.6</code></th>
			<td><a href="execution/1697419283/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697419283/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697419283/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697419283/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697419283/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697419283/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697419283/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-16T01:17:31</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.1</code></th>
			<td><a href="execution/1697419051/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697419051/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697419051/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697419051/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697419051/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697419051/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697419051/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-16T01:14:35</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.3</code></th>
			<td><a href="execution/1697418875/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697418875/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697418875/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697418875/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697418875/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697418875/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697418875/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-13T15:40:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697211617/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697211617/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697211617/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697211617/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697211617/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697211617/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697211617/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-13T15:39:32</code></th>
			 <th><code>link_fix</code></th>
			<td><a href="execution/1697211572/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697211572/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697211572/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697211572/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697211572/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697211572/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697211572/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-13T08:53:50</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697187230/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697187230/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697187230/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697187230/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697187230/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697187230/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697187230/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-12T15:59:41</code></th>
			 <th><code>doc_tweaks</code></th>
			<td><a href="execution/1697126381/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697126381/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697126381/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697126381/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697126381/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697126381/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697126381/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-10T16:24:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1696955057/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696955057/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696955057/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696955057/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696955057/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696955057/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696955057/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-10T16:07:07</code></th>
			 <th><code>one_point_oh</code></th>
			<td><a href="execution/1696954027/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696954027/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696954027/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696954027/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696954027/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696954027/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696954027/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-10-09T14:40:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1696862438/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1696862438/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1696862438/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1696862438/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1696862438/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1696862438/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1696862438/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.3</code></th>
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
		<tr> <th><code>2023-10-16T01:21:57</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.3</code></th>
			<td><a href="mutation/1697419317/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-13T15:46:52</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697212012/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-13T09:06:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697187986/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-12T16:13:58</code></th>
			 <th><code>doc_tweaks</code></th>
			<td><a href="mutation/1697127238/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-10T16:32:48</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696955568/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-10T16:10:57</code></th>
			 <th><code>one_point_oh</code></th>
			<td><a href="mutation/1696954257/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T14:50:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696863041/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-09T13:39:45</code></th>
			 <th><code>diff_demo</code></th>
			<td><a href="mutation/1696858785/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.6</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:21:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.6</code></th>
			<td><a href="ng_coverage/1697419283/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:17:31</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.1</code></th>
			<td><a href="ng_coverage/1697419051/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:14:35</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.3</code></th>
			<td><a href="ng_coverage/1697418875/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-13T15:40:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697211617/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-13T15:39:32</code></th>
			 <th><code>link_fix</code></th>
			<td><a href="ng_coverage/1697211572/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-13T08:53:50</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697187230/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-12T15:59:41</code></th>
			 <th><code>doc_tweaks</code></th>
			<td><a href="ng_coverage/1697126381/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-10T16:24:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696955057/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-10T16:07:07</code></th>
			 <th><code>one_point_oh</code></th>
			<td><a href="ng_coverage/1696954027/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-09T14:40:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1696862438/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->