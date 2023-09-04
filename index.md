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
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.9</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:13:02</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.9</code></th>
			<td><a href="execution/1693789982/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693789982/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693789982/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693789982/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693789982/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693789982/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693789982/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:11:54</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.12.0</code></th>
			<td><a href="execution/1693789914/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693789914/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693789914/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693789914/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693789914/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693789914/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693789914/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T00:57:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.9</code></th>
			<td><a href="execution/1693789021/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693789021/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693789021/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693789021/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693789021/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693789021/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693789021/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-30T04:22:04</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693369324/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693369324/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693369324/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693369324/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693369324/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693369324/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693369324/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-30T01:24:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/adobe/css-tools-4.3.1</code></th>
			<td><a href="execution/1693358655/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693358655/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693358655/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693358655/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693358655/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693358655/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693358655/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T10:04:10</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693303450/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693303450/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693303450/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693303450/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693303450/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693303450/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693303450/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:45:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.4.0</code></th>
			<td><a href="execution/1693302351/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693302351/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693302351/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693302351/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693302351/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693302351/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693302351/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:35:53</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693301753/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693301753/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693301753/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693301753/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693301753/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693301753/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693301753/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:29:07</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693301347/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693301347/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693301347/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693301347/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693301347/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693301347/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693301347/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:27:27</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693301247/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693301247/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693301247/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693301247/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693301247/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693301247/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693301247/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:26:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693301176/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693301176/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693301176/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693301176/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693301176/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693301176/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693301176/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:24:36</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693301076/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693301076/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693301076/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693301076/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693301076/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693301076/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693301076/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:48:02</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.6.0</code></th>
			<td><a href="execution/1693298882/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693298882/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693298882/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693298882/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693298882/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693298882/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693298882/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:37:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.1</code></th>
			<td><a href="execution/1693298234/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693298234/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693298234/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693298234/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693298234/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693298234/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693298234/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:31:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693297871/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693297871/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693297871/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693297871/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693297871/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693297871/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693297871/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:27:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.11</code></th>
			<td><a href="execution/1693297675/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693297675/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693297675/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693297675/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693297675/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693297675/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693297675/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:23:02</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.1</code></th>
			<td><a href="execution/1693297382/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693297382/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693297382/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693297382/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693297382/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693297382/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693297382/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:21:51</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.5</code></th>
			<td><a href="execution/1693297311/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693297311/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693297311/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693297311/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693297311/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693297311/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693297311/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:21:11</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.0</code></th>
			<td><a href="execution/1693297271/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693297271/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693297271/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693297271/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693297271/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693297271/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693297271/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:06:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.7</code></th>
			<td><a href="execution/1693296417/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693296417/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693296417/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693296417/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693296417/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693296417/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693296417/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.9</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:08:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.9</code></th>
			<td><a href="mutation/1693789714/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-30T04:09:42</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693368582/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-30T01:31:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/adobe/css-tools-4.3.1</code></th>
			<td><a href="mutation/1693359070/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T10:07:06</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693303626/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:46:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.4.0</code></th>
			<td><a href="mutation/1693302418/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:39:43</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693301983/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:36:24</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693301784/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:34:00</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693301640/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:33:31</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693301611/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:33:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693301581/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:46:47</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.1</code></th>
			<td><a href="mutation/1693298807/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:38:57</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693298337/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:34:49</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.11</code></th>
			<td><a href="mutation/1693298089/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:32:11</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.1</code></th>
			<td><a href="mutation/1693297931/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:27:16</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.0</code></th>
			<td><a href="mutation/1693297636/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:26:07</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.6.0</code></th>
			<td><a href="mutation/1693297567/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:25:23</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.5</code></th>
			<td><a href="mutation/1693297523/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:18:02</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.7</code></th>
			<td><a href="mutation/1693297082/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-29T07:33:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693294381/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-08-28T00:58:11</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.5.2</code></th>
			<td><a href="mutation/1693184291/mutation_report/index.html">mutation</a></td>
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
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.9</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:13:02</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.9</code></th>
			<td><a href="ng_coverage/1693789982/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:11:54</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.12.0</code></th>
			<td><a href="ng_coverage/1693789914/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T00:57:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.9</code></th>
			<td><a href="ng_coverage/1693789021/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-30T04:22:04</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693369324/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-30T01:24:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/adobe/css-tools-4.3.1</code></th>
			<td><a href="ng_coverage/1693358655/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T10:04:10</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693303450/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:45:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/mermaid-10.4.0</code></th>
			<td><a href="ng_coverage/1693302351/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:35:53</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693301753/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:29:07</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693301347/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:27:27</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693301247/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:26:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693301176/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T09:24:36</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693301076/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:48:02</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.6.0</code></th>
			<td><a href="ng_coverage/1693298882/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:37:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.1</code></th>
			<td><a href="ng_coverage/1693298234/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:31:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693297871/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:27:55</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.11</code></th>
			<td><a href="ng_coverage/1693297675/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:23:02</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.1</code></th>
			<td><a href="ng_coverage/1693297382/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:21:51</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.5</code></th>
			<td><a href="ng_coverage/1693297311/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:21:11</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.0</code></th>
			<td><a href="ng_coverage/1693297271/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-08-29T08:06:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.5.7</code></th>
			<td><a href="ng_coverage/1693296417/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->