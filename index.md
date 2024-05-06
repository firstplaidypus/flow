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
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:38:15</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="execution/1714955895/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714955895/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714955895/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714955895/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714955895/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714955895/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714955895/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:37:54</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
			<td><a href="execution/1714955874/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714955874/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714955874/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714955874/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714955874/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714955874/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714955874/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:16:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392986/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392986/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392986/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392986/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392986/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392986/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392986/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:15:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392954/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392954/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392954/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392954/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392954/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392954/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392954/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:30</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392870/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392870/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392870/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392870/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392870/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392870/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392870/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392851/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392851/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392851/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392851/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392851/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392851/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392851/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:18:29</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.3</code></th>
			<td><a href="execution/1714353509/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714353509/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714353509/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714353509/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714353509/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714353509/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714353509/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:08:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="execution/1714352896/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352896/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352896/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352896/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352896/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352896/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352896/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:51</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="execution/1714352871/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352871/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352871/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352871/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352871/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352871/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352871/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:28</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.3</code></th>
			<td><a href="execution/1714352848/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352848/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352848/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352848/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352848/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352848/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352848/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:13:48</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713770028/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713770028/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713770028/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713770028/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713770028/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713770028/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713770028/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:12:44</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713769964/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769964/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769964/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769964/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769964/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769964/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769964/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:11:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713769871/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769871/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769871/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769871/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769871/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769871/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769871/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:10:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713769838/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769838/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769838/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769838/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769838/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769838/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769838/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:06:00</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.5</code></th>
			<td><a href="execution/1713769560/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713769560/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713769560/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713769560/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713769560/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713769560/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713769560/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:56:36</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.3</code></th>
			<td><a href="execution/1713747396/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713747396/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713747396/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713747396/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713747396/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713747396/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713747396/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:55:59</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.2</code></th>
			<td><a href="execution/1713747359/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713747359/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713747359/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713747359/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713747359/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713747359/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713747359/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:51:24</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.4</code></th>
			<td><a href="execution/1713747084/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713747084/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713747084/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713747084/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713747084/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713747084/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713747084/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:24:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713263041/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713263041/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713263041/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713263041/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713263041/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713263041/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713263041/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:23:13</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1713262993/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1713262993/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1713262993/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1713262993/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1713262993/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1713262993/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1713262993/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
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
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2024-05-06T00:43:46</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
			<td><a href="mutation/1714956226/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-05-06T00:43:12</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="mutation/1714956192/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-29T12:21:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1714393285/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-29T12:21:02</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1714393262/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-29T01:25:09</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.3</code></th>
			<td><a href="mutation/1714353909/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-29T01:13:48</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="mutation/1714353228/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-29T01:13:29</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.3</code></th>
			<td><a href="mutation/1714353209/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-29T01:13:10</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="mutation/1714353190/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:20:32</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770432/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:18:13</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770293/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:17:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770258/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:17:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770234/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T07:04:22</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.3</code></th>
			<td><a href="mutation/1713769462/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T01:03:39</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.5</code></th>
			<td><a href="mutation/1713747819/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T01:03:16</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.2</code></th>
			<td><a href="mutation/1713747796/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-22T00:57:16</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.4</code></th>
			<td><a href="mutation/1713747436/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-16T10:59:06</code></th>
			 <th><code>main</code></th>
			<td></td>
			<td><a href="mutation/1713265146/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/aggregator/target/pit-reports/index.html">project_mutation_reports/aggregator/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/assert/assert-core/target/pit-reports/index.html">project_mutation_reports/assert/assert-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/assert/assert-filter/target/pit-reports/index.html">project_mutation_reports/assert/assert-filter/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/assert/assert-junit5/target/pit-reports/index.html">project_mutation_reports/assert/assert-junit5/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/report/duct/target/pit-reports/index.html">project_mutation_reports/report/duct/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1713265146/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:29:44</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713263384/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-16T10:16:45</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.3</code></th>
			<td><a href="mutation/1713262605/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2024-04-15T08:32:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713169956/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:38:15</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="ng_coverage/1714955895/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:37:54</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
			<td><a href="ng_coverage/1714955874/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:16:26</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392986/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:15:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392954/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:30</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392870/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392851/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:18:29</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.3</code></th>
			<td><a href="ng_coverage/1714353509/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:08:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="ng_coverage/1714352896/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:51</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="ng_coverage/1714352871/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:28</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.3</code></th>
			<td><a href="ng_coverage/1714352848/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:13:48</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713770028/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:12:44</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713769964/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:11:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713769871/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:10:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713769838/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:06:00</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.5</code></th>
			<td><a href="ng_coverage/1713769560/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:56:36</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.3</code></th>
			<td><a href="ng_coverage/1713747396/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:55:59</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.2</code></th>
			<td><a href="ng_coverage/1713747359/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-22T00:51:24</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.4</code></th>
			<td><a href="ng_coverage/1713747084/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:24:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713263041/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-16T10:23:13</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1713262993/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->