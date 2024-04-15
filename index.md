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
		<tr> <th><code>2024-04-15T08:20:15</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713169215/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713169215/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713169215/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713169215/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713169215/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713169215/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713169215/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:55:07</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="execution/1713142507/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142507/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142507/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142507/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142507/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142507/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142507/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:54:41</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.13</code></th>
			<td><a href="execution/1713142481/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142481/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142481/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142481/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142481/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142481/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142481/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:51:27</code></th>
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.5</code></th>
			<td><a href="execution/1713142287/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142287/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142287/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142287/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142287/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142287/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142287/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:50:59</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.3</code></th>
			<td><a href="execution/1713142259/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142259/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142259/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142259/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142259/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142259/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142259/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:50:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.7</code></th>
			<td><a href="execution/1713142240/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142240/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142240/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142240/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142240/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142240/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142240/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:50:17</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.0</code></th>
			<td><a href="execution/1713142217/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713142217/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713142217/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713142217/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713142217/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713142217/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713142217/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:02:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1712570574/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712570574/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712570574/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712570574/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712570574/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712570574/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712570574/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:00:07</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1712570407/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712570407/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712570407/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712570407/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712570407/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712570407/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712570407/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T09:58:37</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1712570317/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712570317/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712570317/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712570317/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712570317/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712570317/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712570317/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T09:58:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1712570293/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712570293/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712570293/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712570293/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712570293/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712570293/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712570293/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T09:57:15</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1712570235/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712570235/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712570235/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712570235/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712570235/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712570235/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712570235/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:24:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.5</code></th>
			<td><a href="execution/1712539494/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712539494/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712539494/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712539494/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712539494/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712539494/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712539494/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:10:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.4</code></th>
			<td><a href="execution/1712538624/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712538624/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712538624/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712538624/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712538624/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712538624/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712538624/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:10:03</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.12</code></th>
			<td><a href="execution/1712538603/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712538603/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712538603/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712538603/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712538603/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712538603/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712538603/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:09:44</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-source-plugin-3.3.1</code></th>
			<td><a href="execution/1712538584/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712538584/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712538584/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712538584/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712538584/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712538584/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712538584/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:09:20</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.8.0</code></th>
			<td><a href="execution/1712538560/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1712538560/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1712538560/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1712538560/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1712538560/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1712538560/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1712538560/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-01T07:29:16</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1711956556/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711956556/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711956556/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711956556/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711956556/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711956556/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711956556/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-01T07:28:46</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1711956526/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711956526/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711956526/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711956526/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711956526/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711956526/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711956526/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-01T01:21:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.2</code></th>
			<td><a href="execution/1711934490/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711934490/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711934490/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711934490/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711934490/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711934490/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711934490/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-15T01:01:15</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="mutation/1713142875/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:58:06</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.13</code></th>
			<td><a href="mutation/1713142686/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:57:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.7</code></th>
			<td><a href="mutation/1713142655/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:57:15</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.0</code></th>
			<td><a href="mutation/1713142635/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:56:26</code></th>
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.5</code></th>
			<td><a href="mutation/1713142586/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:08:17</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1712570897/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:06:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1712570797/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:04:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1712570678/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:04:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1712570658/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:03:58</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1712570638/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:31:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.5</code></th>
			<td><a href="mutation/1712539894/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:16:41</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-source-plugin-3.3.1</code></th>
			<td><a href="mutation/1712539001/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:16:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.4</code></th>
			<td><a href="mutation/1712538981/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:16:00</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.12</code></th>
			<td><a href="mutation/1712538960/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:15:21</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.8.0</code></th>
			<td><a href="mutation/1712538921/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-01T07:36:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711956964/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-01T07:35:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711956945/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-01T01:27:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.2</code></th>
			<td><a href="mutation/1711934879/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-01T00:43:11</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.2</code></th>
			<td><a href="mutation/1711932191/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-27T08:57:20</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711529840/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2024-04-15T08:20:15</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713169215/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:55:07</code></th>
			 <th><code>dependabot/github_actions/stefanzweifel/git-auto-commit-action-5.0.1</code></th>
			<td><a href="ng_coverage/1713142507/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:54:41</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.13</code></th>
			<td><a href="ng_coverage/1713142481/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:51:27</code></th>
			 <th><code>dependabot/maven/com.github.vertical-blank-sql-formatter-2.0.5</code></th>
			<td><a href="ng_coverage/1713142287/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:50:59</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.3</code></th>
			<td><a href="ng_coverage/1713142259/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:50:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.7</code></th>
			<td><a href="ng_coverage/1713142240/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-15T00:50:17</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.0</code></th>
			<td><a href="ng_coverage/1713142217/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:02:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1712570574/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T10:00:07</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1712570407/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T09:58:37</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1712570317/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T09:58:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1712570293/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T09:57:15</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1712570235/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:24:54</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.5</code></th>
			<td><a href="ng_coverage/1712539494/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:10:24</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.4</code></th>
			<td><a href="ng_coverage/1712538624/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:10:03</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.12</code></th>
			<td><a href="ng_coverage/1712538603/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:09:44</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-source-plugin-3.3.1</code></th>
			<td><a href="ng_coverage/1712538584/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-08T01:09:20</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.8.0</code></th>
			<td><a href="ng_coverage/1712538560/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-01T07:29:16</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1711956556/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-01T07:28:46</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1711956526/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-01T01:21:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.2</code></th>
			<td><a href="ng_coverage/1711934490/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->