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
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:45:08</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694411108/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694411108/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694411108/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694411108/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694411108/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694411108/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694411108/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:44:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694411041/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694411041/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694411041/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694411041/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694411041/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694411041/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694411041/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:42:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1694410975/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694410975/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694410975/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694410975/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694410975/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694410975/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694410975/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:34:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.1</code></th>
			<td><a href="execution/1694410495/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694410495/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694410495/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694410495/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694410495/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694410495/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694410495/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:20:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.17</code></th>
			<td><a href="execution/1694395200/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694395200/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694395200/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694395200/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694395200/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694395200/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694395200/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:18:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.0</code></th>
			<td><a href="execution/1694395095/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694395095/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694395095/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694395095/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694395095/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694395095/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694395095/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:15:09</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.12.1</code></th>
			<td><a href="execution/1694394909/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694394909/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694394909/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694394909/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694394909/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694394909/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694394909/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:14:26</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.2</code></th>
			<td><a href="execution/1694394866/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694394866/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694394866/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694394866/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694394866/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694394866/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694394866/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:10:01</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-3.1.3</code></th>
			<td><a href="execution/1694394601/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1694394601/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1694394601/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1694394601/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1694394601/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1694394601/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1694394601/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:47:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693817233/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693817233/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693817233/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693817233/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693817233/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693817233/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693817233/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:46:03</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693817163/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693817163/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693817163/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693817163/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693817163/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693817163/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693817163/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:44:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693817094/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693817094/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693817094/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693817094/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693817094/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693817094/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693817094/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:43:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1693816994/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693816994/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693816994/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693816994/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693816994/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693816994/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693816994/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:15:43</code></th>
			 <th><code>dependabot/maven/com.h2database-h2-2.2.222</code></th>
			<td><a href="execution/1693790143/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693790143/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693790143/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693790143/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693790143/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693790143/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693790143/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:14:41</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.5.3</code></th>
			<td><a href="execution/1693790081/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1693790081/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1693790081/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1693790081/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1693790081/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1693790081/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1693790081/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-3.1.3</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:37:47</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-3.1.3</code></th>
			<td><a href="mutation/1694410667/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:26:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.17</code></th>
			<td><a href="mutation/1694395612/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:21:45</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.0</code></th>
			<td><a href="mutation/1694395305/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:20:37</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.0.0</code></th>
			<td><a href="mutation/1694395237/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:19:26</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.1</code></th>
			<td><a href="mutation/1694395166/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:18:56</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.12.1</code></th>
			<td><a href="mutation/1694395136/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:16:06</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.2</code></th>
			<td><a href="mutation/1694394966/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:58:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693817920/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:57:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693817865/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:53:11</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693817591/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:52:31</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693817551/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:50:48</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1693817448/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:23:33</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.12.0</code></th>
			<td><a href="mutation/1693790613/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:20:37</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.9</code></th>
			<td><a href="mutation/1693790437/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:20:00</code></th>
			 <th><code>dependabot/maven/com.h2database-h2-2.2.222</code></th>
			<td><a href="mutation/1693790400/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:19:17</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.5.3</code></th>
			<td><a href="mutation/1693790357/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-09-11T05:45:08</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694411108/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:44:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694411041/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:42:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1694410975/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T05:34:55</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-enforcer-plugin-3.4.1</code></th>
			<td><a href="ng_coverage/1694410495/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:20:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.17</code></th>
			<td><a href="ng_coverage/1694395200/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:18:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.6.0</code></th>
			<td><a href="ng_coverage/1694395095/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:15:09</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.12.1</code></th>
			<td><a href="ng_coverage/1694394909/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:14:26</code></th>
			 <th><code>dependabot/github_actions/actions/cache-3.3.2</code></th>
			<td><a href="ng_coverage/1694394866/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-11T01:10:01</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-3.1.3</code></th>
			<td><a href="ng_coverage/1694394601/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:47:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693817233/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:46:03</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693817163/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:44:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693817094/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T08:43:14</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1693816994/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:15:43</code></th>
			 <th><code>dependabot/maven/com.h2database-h2-2.2.222</code></th>
			<td><a href="ng_coverage/1693790143/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-09-04T01:14:41</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.5.3</code></th>
			<td><a href="ng_coverage/1693790081/report/index.html">ng_coverage</a></td>
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
	</tbody>
</table>
<!-- end:ng_coverage -->