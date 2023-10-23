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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:02:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="execution/1698022971/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698022971/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698022971/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698022971/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698022971/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698022971/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698022971/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:55:44</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="execution/1698022544/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698022544/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698022544/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698022544/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698022544/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698022544/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698022544/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:52:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.1</code></th>
			<td><a href="execution/1698022333/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698022333/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698022333/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698022333/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698022333/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698022333/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698022333/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:51:37</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.11</code></th>
			<td><a href="execution/1698022297/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698022297/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698022297/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698022297/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698022297/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698022297/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698022297/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:16:20</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.1</code></th>
			<td><a href="execution/1698020180/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698020180/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698020180/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698020180/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698020180/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698020180/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698020180/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-19T11:03:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697713418/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697713418/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697713418/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697713418/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697713418/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697713418/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697713418/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-19T10:27:12</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="execution/1697711232/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697711232/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697711232/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697711232/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697711232/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697711232/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697711232/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-19T09:58:45</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="execution/1697709525/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697709525/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697709525/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697709525/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697709525/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697709525/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697709525/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:45:50</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697445950/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697445950/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697445950/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697445950/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697445950/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697445950/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697445950/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:44:14</code></th>
			 <th><code>link_fix</code></th>
			<td><a href="execution/1697445854/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697445854/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697445854/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697445854/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697445854/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697445854/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697445854/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:04:48</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697443488/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697443488/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697443488/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697443488/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697443488/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697443488/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697443488/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:03:36</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697443416/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697443416/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697443416/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697443416/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697443416/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697443416/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697443416/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:00:36</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1697443236/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697443236/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697443236/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697443236/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697443236/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697443236/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697443236/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:22:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.2</code></th>
			<td><a href="execution/1697419378/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1697419378/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1697419378/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1697419378/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1697419378/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1697419378/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1697419378/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:06:11</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="mutation/1698023171/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:05:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="mutation/1698023140/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:24:26</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.1</code></th>
			<td><a href="mutation/1698020666/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-19T11:10:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697713822/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-19T10:37:29</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="mutation/1697711849/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-19T10:13:11</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="mutation/1697710391/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:57:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697446654/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:53:35</code></th>
			 <th><code>link_fix</code></th>
			<td><a href="mutation/1697446415/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:11:51</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697443911/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:11:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697443864/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:08:35</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697443715/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:08:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697443681/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:29:45</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.2</code></th>
			<td><a href="mutation/1697419785/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:28:48</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.6</code></th>
			<td><a href="mutation/1697419728/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:23:47</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.1</code></th>
			<td><a href="mutation/1697419427/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:21:57</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.3</code></th>
			<td><a href="mutation/1697419317/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-13T15:46:52</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697212012/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-13T09:06:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697187986/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-12T16:13:58</code></th>
			 <th><code>doc_tweaks</code></th>
			<td><a href="mutation/1697127238/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-10-10T16:32:48</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1696955568/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:02:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="ng_coverage/1698022971/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:55:44</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="ng_coverage/1698022544/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:52:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.1</code></th>
			<td><a href="ng_coverage/1698022333/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:51:37</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.11</code></th>
			<td><a href="ng_coverage/1698022297/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:16:20</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.1</code></th>
			<td><a href="ng_coverage/1698020180/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-19T11:03:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697713418/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-19T10:27:12</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="ng_coverage/1697711232/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-19T09:58:45</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="ng_coverage/1697709525/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:45:50</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697445950/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:44:14</code></th>
			 <th><code>link_fix</code></th>
			<td><a href="ng_coverage/1697445854/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:04:48</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697443488/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:03:36</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697443416/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T08:00:36</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1697443236/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-16T01:22:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.2</code></th>
			<td><a href="ng_coverage/1697419378/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->