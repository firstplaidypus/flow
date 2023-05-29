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
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.4</code></th>
			<td><a href="execution/latest/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-29T01:26:31</code></th>
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.4</code></th>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685323591/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-25T15:27:02</code></th>
			 <th><code>coverage_metric</code></th>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1685028422/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-24T08:05:40</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684915540/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-24T00:35:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/socket.io-parser-4.2.3</code></th>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684888552/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T13:19:47</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684761587/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T13:04:37</code></th>
			 <th><code>mutant_fix</code></th>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684760677/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T09:19:02</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684747142/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T09:02:16</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.0</code></th>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684746136/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T09:00:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684746029/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T08:54:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684745666/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T08:53:56</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684745636/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T08:52:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684745553/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T08:47:39</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.1</code></th>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684745259/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:34:18</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.5.2</code></th>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684719258/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:31:08</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.2.3</code></th>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684719068/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:26:30</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.0</code></th>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684718790/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:25:40</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-source-plugin-3.3.0</code></th>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684718740/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:25:04</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-junit5-plugin-1.2.0</code></th>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684718704/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-19T12:45:36</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684500336/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-05-19T11:03:23</code></th>
			 <th><code>material_bump</code></th>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1684494203/flow_execution_reports/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>coverage_metric</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-25T15:33:00</code></th>
			 <th><code>coverage_metric</code></th>
			<td><a href="mutation/1685028780/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-24T04:35:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684902918/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-24T00:42:41</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/socket.io-parser-4.2.3</code></th>
			<td><a href="mutation/1684888961/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T13:24:43</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684761883/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T13:11:52</code></th>
			 <th><code>mutant_fix</code></th>
			<td><a href="mutation/1684761112/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T09:09:15</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684746555/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T09:06:21</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.0</code></th>
			<td><a href="mutation/1684746381/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T09:03:21</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684746201/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T08:59:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684745981/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T08:58:54</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684745934/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:40:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.5.2</code></th>
			<td><a href="mutation/1684719619/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:36:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.2.3</code></th>
			<td><a href="mutation/1684719411/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:32:31</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.15.1</code></th>
			<td><a href="mutation/1684719151/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-22T01:31:34</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-source-plugin-3.3.0</code></th>
			<td><a href="mutation/1684719094/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-19T12:50:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684500657/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-19T11:11:32</code></th>
			 <th><code>material_bump</code></th>
			<td><a href="mutation/1684494692/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-19T10:04:24</code></th>
			 <th><code>material_bump</code></th>
			<td><a href="mutation/1684490664/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-15T07:06:59</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684134419/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-15T06:41:07</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684132867/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-05-15T06:40:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1684132840/mutation_report/index.html">mutation</a></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->
